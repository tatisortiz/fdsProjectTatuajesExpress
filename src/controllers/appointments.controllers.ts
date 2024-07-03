import { Request, Response } from "express";


export const appointCreateCIta= (req: Request , res: Response) => {
    res.send('crear cita');

}

export const appointActuCita= (req:Request , res: Response) => {
    res.send('actualiza mi cita')
}

export const appointRecupCitaById=(req: Request, res: Response) => {
    console.log(req.params.id);

    res.json({
        success: true,
        message: `recuperar cita with id ${req.params.id}`
    })
}

export const appointPropCitas= (req:Request , res: Response) => {
    res.send('ver mis propias citas')
}