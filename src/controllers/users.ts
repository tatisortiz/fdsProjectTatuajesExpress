import { Request, Response } from "express";

export const createdUser= (req: Request , res: Response) =>{
  res.json({
    success:true,
    messages: 'soy genial'
  })
}
    

