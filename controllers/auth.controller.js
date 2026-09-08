import mongoose from "mongoose"
import bcrypt from "bcrypt"
import User from "../models/user.model.js"
import jwt from "jsonwebtoken"

const signup = async(req, res)=>{
    console.log(req.body)
    

try{
    const{fullname, email, role, password} = req.body;

    const existingUser = await User.findOne({fullname});
    

    if(existingUser){
        return res.status(400).json({
            message:"User Already Exist"
        })
    }


    if(!fullname || !email || !password || !role ){
        return res.status(400).json({
            message:"All Feilds are required"
        }) 
    }
    // hash password
   const hashedPassword = await bcrypt.hash(password,10)

const user = await User.create({
    fullname,
    email,
    password: hashedPassword,
    role,
    
});

return res.status(201).json({
    message: "User created successfully",
    user
});

}catch(error){
    res.status(500).json({
        message:"Internal Server Error",
        error,
    })
    console.log(error)
}
    }

const login = async(req,res)=>{
    
        try{
       const{email,role, password} = req.body;

       if(!email || !password){
        return res.status(400).json({message:"All Feilds are required"})
       }

   const existingUser = await User.findOne({email});

   if(!existingUser){
       return res.status(400).json({
        message:"Email Does Not Exist"
       })
   }

        const isMatch = await bcrypt.compare(password, existingUser.password)

        if(!isMatch){
            return res.status(401).json({
                message:"password invalid"
            })
        }
         const token = jwt.sign(
      {
        id: existingUser._id,
        email: existingUser.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

   return res.status(200).json({
    success:true,
    message:"User logged in Successfully",
    token,
    user: {
        id: existingUser._id,
        name: existingUser.name,
        email: existingUser.email,
      },
     })

        }catch(error){
            console.log(error)
            return res.status(500).json({
                messsage :"Internal Server Error"
            })
            error
        }
    }

export{signup, login}
        