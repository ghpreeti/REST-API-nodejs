const express = require("express");
const User = require("../models/users");
const {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser} = require("../controllers/user");

const router = express.Router();


router.route("/").get(handleGetAllUsers).post(handleCreateNewUser);
 
router
.route("/:id")
.get(handleGetUserById)
.patch(handleUpdateUserById)
.delete(handleDeleteUserById)


module.exports = router;











        
// router.get('/users',(req,res)=>{
//     const html = `
//     <ul>
//     ${users.map((users) => `<li>${users.first_name} </li>`).join("")}
//     </ul>`;
//     res.send(html);
// });
//routes
// for hybrid server
//REST API
// router.get('/api/users',(req,res) => {
//     res.setHeader("X-myName","myHeader");// custom header
//     //always addX to custum header
//     return res.json(users);
// });

// router.get('/api/users/:id',(req,res)=>{
//     const id = Number(req.params.id);
//     const user = users.find((user)=> user.id === id);
//     if(!user) return res.status(404).json({msg: "User not found"});
//     return res.json(user); 
// });

// router.post('/api/users',async(req,res)=>{
//     //TOOD: CREAT NEW USER
//     const body = req.body;
//     if(!body || !body.first_name || !body.last_name || !body.gender || !body.email || !body.job_title){
//         return res.status(400).json({msg:"all fields are required.."});
//     }
    // users.push({...body, id:users.length+1});
    // fs.writeFile('./MOCK_DATA.json',JSON.stringify(users), (err,data)=>{
    //     return res.status(201).json({status:"success",id:users.length});

    
    // const result = await user.create({
    //     firstName:body.first_name,
    //     lastName:body.last_name,
    //     gender:body.gender,
    //     email:body.email,
    //     jobTitle:body.job_title

    // });

    // console.log("result",result);

    // return res.status(201).json({status:"success",id:users.length});
    // });
    // console.log("Body",body);
    // return res.json({status:"pending"});
// });

// router.patch('/api/users/:id',(req,res)=>{
//     //TOOD: EDIT THE USER WITH ID
//     return res.json({status:"pending"});
// })

// router.delete('/api/users/:id',(req,res)=>{
//    //TOOD: DELETE A USERS WITH ID
//     return res.json({status:"pending"});
// })

//****if i want to merge  the two routes above into one route*********//
// app.route("/api/users/:id")
// .get((req,res)=>{
//     const id = Number(req.params.id);
//     const user = users.find((user)=> user.id === id);
//     return res.json(user);
// })
// .patch((req,res)=>{
//     return res.json({status:"pending"});
// })
// .delete((req,res)=>{
//     return res.json({status:"pending"});
// });
 
