const UserModel = require("../model/UserModel")

const getuser =async (req , res)=>{
  const data = await UserModel.find()
  res.send(data)

}


const registation =async (req , res)=>{
  const {username , email , password}= req.body

  const existeduser = await UserModel.findOne({email})

  if(existeduser){
    res.status(400).json({
        success : false,
        message : "user already existed",
        email : existeduser.email
    })
   return
    
  }
   const user = await UserModel.create({
    username , email , password
   })
 

  res.status(201).json({
    success : true,
    message : "user created",
    data : user
    
  })
}
 
const userlogin = async (req , res)=>{
  const { email , password }= req.body

  const user = await UserModel.findOne({email })

  if(!user){
   res.status(500).json({
    success : false,
    message : "user not found"
   })
   return
  }

  if(user.password !== password){
   res.status(404).json({
    success : false,
    message : "password wrong"
   })


  }
  res.status(200).json({
     success : true,
    message : "login successfully",
    user
  })

  
}

module.exports = { registation , getuser , userlogin}