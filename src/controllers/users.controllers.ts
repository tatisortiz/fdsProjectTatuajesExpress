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
    
export const getProfileUsers= (req: Request , res: Response) => {
 try {
  
 } catch (error) {
  
 }
}

export const updateusers= (req: Request , res: Response) => {
    res.send ('modificar datos del perfil');
}


