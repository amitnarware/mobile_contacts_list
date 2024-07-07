const express = require("express")
const sequelize = require("./config/database")
const {  User, Contact, UserContact, SpamNumber } = require('./models');
const app = express()
const authRoutes = require("./routes/authRoutes")
const contactRoutes = require("./routes/contactRoutes")
const spamRoutes = require("./routes/spamRoutes")
const userRoutes = require("./routes/userRoutes")
const authmiddleware = require("./middleware/authmiddleware")



app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api/auth", authRoutes)
app.use("/api/contacts", contactRoutes)
app.use("/api/spam", spamRoutes)
app.use("/api/user", userRoutes)


  app.listen(3000,() => {
   console.log("server is running on 3000")
  })