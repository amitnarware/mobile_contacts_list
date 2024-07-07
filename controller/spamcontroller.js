const {  sequelize,User,Contact, UserContact, SpamNumber}  = require ("../models")


// mark a number as spam
exports.markAsSpam = async (req, res) => {
 try{

  const {phone_number} = req.body;
  console.log(phone_number)
  const markedBy = req.user.userId;

  const spamNumber = await SpamNumber.create({phone_number,markedBy})

  res.status(201).json({message:"Number marked as sapm",spamNumber})
 } catch (err){
  res.status(500).json({message:"Error marking number as spam",error:err.message})
 }
}

// get all spam number
exports.getSpamNumber = async (req,res) => {
 try{
  const spamNumber = await SpamNumber.findAll();
  res.status(200).json(spamNumber);
 }catch(err){
  res.status(500).json({message: "Error fetching spam numbers",error:err.message})
 }
}