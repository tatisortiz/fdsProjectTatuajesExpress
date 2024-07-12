import { Request, Response } from "express";


export const appointCreateCita= async (req: Request , res: Response) => {
    try {
    const appointId = req.body.appointId
    const userId = req.tokenData.id;
    const serviceId = req.body.service_id;

    if (!appointId || !serviceId) {
        return res.status(404).json(
            {
                success: false,
                message: "you must enter date and service" // se requiere la fecha y el servicio
            }
        )
    }
    const newAppoint = await appointId.create(
        {
            appointId: appointId,
            userId: userId,
            serviceId: serviceId
        }
    ).save();

    //4. Give a response to the page
    res.status(201).json(
        {
            success: true,
            message: "Appointment created successfully",
            data: newAppoint
        }
    )



        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error appointments created",
            error: error 
        })

        
        
    }

}

export const updateAppoint= (req:Request , res: Response) => {
   try {
    
   } catch (error) {
    res.status(500).json(
        {
            success: false,
            message: "",
            error : error
        }
    )
   }
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