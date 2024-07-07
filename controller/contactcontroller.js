// const  User = require("../models/User");
const {  sequelize,User,Contact, UserContact, SpamNumber}  = require ("../models/index")

// const Contact = require("../models/Contact")
// const UserContact = require("../models/UserContact")

// add contact
exports.addContact = async (req, res) => {
 try {
  const { name, phone_number} = req.body;
  const userId = req.user.userId;

  const contact = await Contact.create({name, phone_number});
  await UserContact.create({userId, conatctId:contact.id})
  res.status(201).json({ message: "contact added successfully", contact})
 } catch (err){
  res.status(500).json({message:'error adding contact', error:message})
 }
};


// Get contacts
// Get contacts
exports.getContacts = async (req, res) => {
 try {
   const userId = req.user.userId;

   const userContacts = await UserContact.findAll({
     where: { user_id: userId },
     include: [Contact],
   });

   if (!userContacts.length) {
     return res.status(404).json({ message: "No contacts found for this user." });
   }

   const contacts = userContacts.map(userContact => userContact.Contact);

   res.status(200).json(contacts);
 } catch (err) {
   res.status(500).json({ message: 'Error fetching contacts', error: err.message });
 }
};

