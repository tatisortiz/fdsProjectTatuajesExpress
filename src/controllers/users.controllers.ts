import { Request, Response } from "express";

export const getUsers= (req: Request, res: Response) =>{
  res.json({
    success:true,
    messages: 'ver todos los usuarios'
  })
}
    
export const getAllUsers= (req: Request , res: Response) => {
    res.send('ver perfil del usuario');

}

export const updateusers= (req: Request , res: Response) => {
    res.send ('modificar datos del perfil');
}


