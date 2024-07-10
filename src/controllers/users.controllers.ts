import { Request, Response } from "express";
import { User } from "../database/models/User";

export const getAllUsers= async (req: Request, res: Response) =>{
  try {
    const user = await User.find()

    res.json(
      {
        success: true,
        message: 'see all users',
        data : user
      }
    )

    
  } catch (error) {
    res.status(500).json(
      {
        success: false,
        message:"cannot recover users",
        error: error
      }
    )
    
  }
}
    
export const getProfileUsers= async (req: Request , res: Response) => {
 try {

  const userId = req.tokenData.id
  const users = await User.findOne(
    {
      where: {
        id:userId
      }
    }
  )

  
   return res.status(201).json({
    success: true,
    message: "profile successfully recovered",
    data: users
  })

  
 } catch (error : any ) {
    res.status(500).json({
      susscess: false,
      message: "your profile can't be retrieved",
      error: error.message
    })
 }
}

export const updateUsers= async(req: Request , res: Response) => {
   try {
    const userId = req.tokenData.id
     const body = req.body;

    if(!body) {
      return res.status(404).json({
      success: false,
      message:"error update user",
      })
    }

    const userUpdate = await User.update(
      {
        id:userId
      },body
    )
     
    res.status(201).json(
      {
        success: true,
        message:"user update",
        data: userUpdate
      }
    )
    
   
    
   } catch (error) {
    res.status(500).json({
      success:false,
      message:"user cannot be modified",
      error: error
    })
    
   }
}


