const User = require("../models/users");


async function handleGetAllUsers(req,res){
    const allDbUsers = await User.find({});
    return res.json(allDbUsers);
}


async function handleGetUserById(req,res){
    const user = await User.findById(req.params.id);
   if(!user) return  res.status(404).json({error :'The user with the given ID was not found.'});
   return res.json(user);
}


async function handleUpdateUserById(req,res){
    await User.findByIdAndUpdate(req.params.id,{lastName:"Changed"});
    return res.json({status: 'User information has been updated!'});
}


async function handleDeleteUserById(req,res){
    await  User.findByIdAndDelete(req.params.id);
    return res.json({status: "User deleted! The user has been removed from database."});
}


async function handleCreateNewUser(req,res){
    const body = req.body;
        if(!body || 
            !body.first_name ||
            !body.last_name || 
            !body.gender ||
            !body.email || 
            !body.job_title
            ) {
            return res.status(400).json({msg:"all fields are required.."});
        }   

        const result = await User.create({
            firstName:body.first_name,
            lastName:body.last_name,
            gender:body.gender,
            email:body.email,
            jobTitle:body.job_title
    
        });
    
        return res.status(201).json({status:"success",id:result._id});
}


module.exports= {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser
}; 
