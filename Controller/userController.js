const {userSchema } = require('../Models/userSchema')

//Create an API for Signup, Login, Forgot Password using the reset password link on the email.

//Signup
let Signup = async(req,res)=>{ 
    let {email} = req.body;
    if(email){return res.status(400).send({success:false,message:'Email invalid'})}
    let user = await userModel
    if(user){
     return res.status(409).send({success:false,message:'Email already exist'})}let Signup = async(req,res)=>{
      }
    }
             
  //Login
  let login =async(req,res)=>{
    let {email,password} = req.body;
    let user = await userModel
    if(!user){  return res.status(404).send({success:false,message:'Email not exist'})}
  }
  
  //resetpassword
      let resetpassword = async(req,res)=>{
      let user = await userModel
      if(!user){return res.status(400).send({ success:false,message:"Invalid email"})}
       res.status(200).send({success:true,message:"Reset password successfully"})
  }

  //Forget Password
  let forgetpassword = async(req,res)=>{
    let{email,password}= req
    
  }
   
      



     module.exports={Signup,login,resetpassword}
  
  

