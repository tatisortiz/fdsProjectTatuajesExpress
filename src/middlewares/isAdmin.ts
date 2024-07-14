import { NextFunction,Request, Response } from "express";

export const isAdmin= (req: Request, res: Response, next:NextFunction) => {
    try {
        console.log(req.tokenData.role_id)
        if(req.tokenData.role_id!== 2) {
            return res.status(403).json(
                {
                    success: false,
                     message: "you are not allowerd"
                }
            )
        }
        next()
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "error"
            }
        )
        
    }
}