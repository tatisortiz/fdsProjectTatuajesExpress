import { Request, Response } from "express";

export const createdUser= (req: Request, res: Response) =>{
  res.json({
    success:true,
    messages: 'ver todos los usuarios'
  })
}
    
export const userProfile= (req: Request , res: Response) => {
    res.send('ver perfil del usuario');

}

export const userModifyData= (req: Request , res: Response) => {
    res.send ('modificar datos del perfil');
}


