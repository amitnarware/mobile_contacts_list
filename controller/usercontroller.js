const { Op } = require('sequelize');
const {  sequelize,User,Contact, UserContact, SpamNumber}  = require ("../models")

exports.getProfile = async (req, res) => {
 try{
  const userId = req.user.userId;
  const user = await  User.findByPk(userId,{
   attributes: ["id","name","phone_number","email"],
  });
  res.status(200).json(user)
 } catch(err){
  res.status(500)({message:"error fetching profile",error:err.message})
 }
}

// By name
exports.searchByName = async (req, res) => {
 try {
   const { name } = req.query;

   const users = await User.findAll({
     where: {
       name: {
         [Op.like]: `%${name}%`,
       },
     },
     attributes: ['id', 'name', 'phone_number'],
     include: [{
       model: SpamNumber,
       attributes: ['id', 'phone_number'],
     }],
   });

   res.status(200).json(users);
 } catch (err) {
   res.status(500).json({ message: 'Error searching users by name', error: err.message });
 }
};

exports.searchByPhoneNumber = async (req, res) => {
 try {
   const { phone_number } = req.query;

   const users = await User.findAll({
     where: { phone_number },
     attributes: ['id', 'name', 'phone_number'],
     include: [{
       model: SpamNumber,
       attributes: ['id', 'phone_number'],
     }],
   });

   res.status(200).json(users);
 } catch (err) {
   res.status(500).json({ message: 'Error searching users by phone number', error: err.message });
 }
};