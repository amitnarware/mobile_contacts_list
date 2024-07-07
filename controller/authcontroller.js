const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../models/User")
require('dotenv').config();

exports.register = async (req, res) => {
 try {
   const { name, phone_number, email, password } = req.body;
   const hashedPassword = await bcrypt.hash(password, 10);
   try {
     const user = await User.create({ name, phone_number, email, password: hashedPassword });
     console.log(user);
     res.status(201).json({ message: 'user registered successfully', user });
   } catch (err) {
     console.error(err);
     res.status(500).json({ message: 'Error registering User', err: err.message });
   }
 } catch (err) {
   console.error(err);
   res.status(500).json({ message: 'Error registering User', err: err.message });
 }
};


exports.login = async (req, res) => {
 try {
     const { email, password } = req.body;
     console.log("Login attempt:", req.body);

     // Use email for finding the user as per the provided JSON example
     const user = await User.findOne({ where: { email } });

     if (!user) {
         console.log("User not found");
         return res.status(404).json({ message: "User not found" });
     }

     const isPasswordValid = await bcrypt.compare(password, user.password);
     if (!isPasswordValid) {
         console.log("Invalid password");
         return res.status(401).json({ message: 'Invalid password' });
     }

     const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: "8h" });
    // console.log("Login successful, token generated");
     res.status(200).json({ message: "Login successful", token });
 } catch (error) {
     console.error("Error logging in:", error);
     res.status(500).json({ message: "Error logging in", error });
 }
};