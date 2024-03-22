const express = require("express");

const {connectMongoDb} = require('./connections');

const userRouter = require("./routes/user");

const {logReqRes} = require("./middlewares");

const app = express();
const PORT = 8000;


//Connections
connectMongoDb('mongodb://127.0.0.1:27017/youtube-app-1').then(()=> console.log("Conectado a MongoDB"));

//MiddleWares - Plugin
app.use(express.urlencoded({extended : false}));
app.use(logReqRes("log.txt"));

//Routes
app.use("/api/users",userRouter);

app.listen(PORT,()=>console.log(`Server Started at PORT: ${PORT}`));





// //connecting mongoose
// mongoose
// .connect('mongodb://127.0.0.1:27017/youtube-app-1')
// .then(()=> console.log( "MongoDB ')Connected!"))
// .catch((err)=>console.log("MONGO ERROR",err));

//schema
//Middleware plugin
// app.use(express.urlencoded({extended : false})); // parse url encoded requests of content type - application
// app.use((req,res,next)=>{
// // console.log("hello from middleware1");
// // return res.json({mgs:"hello from middleware 1"});
// fs.appendFile('log.txt',`\n${Date.now()} : ${req.method} : ${req.path}`,(err,data)=>{
//     next();
// });

// });

// app.listen(PORT,()=>console.log(`Server Started at PORT: ${PORT}`));