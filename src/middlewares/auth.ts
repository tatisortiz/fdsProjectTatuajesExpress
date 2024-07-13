import jwt from 'jsonwebtoken'
import { NextFunction,Request,Response } from "express";
import { TokenDecoded } from "../types";

export const auth = (req: Request, res: Response, next: NextFunction) => {
   try {
    
    console.log('middleware authentication');

    console.log(req.headers.authorization);

    if(!req.headers.authorization) {
        return res.status(401).json(
            {
                success: false,
                message:"unauthorized"
            }
        )
    }

    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token,process.env.JWT_SECRET as string) as TokenDecoded;

    req.tokenData = {
        id: decoded.id,
        role: decoded.role,
        email: decoded.email
    }
    
    
    next();
   } catch (error) {
    res.status(500).json(
        {
            success: false,
            message: " error unauthorized" 
            
        }
    )
    
   }
}