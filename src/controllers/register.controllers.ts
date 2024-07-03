import { Request, Response } from "express";

    
export const authRegister= (req: Request , res: Response) => {
    res.send('registro de usuarios');

}

export const authLogin= (req: Request, res: Response) => {
    res.send('login de usuarios');
}