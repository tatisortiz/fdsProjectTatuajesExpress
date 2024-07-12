import { Request, Response } from "express";
import { Appointments } from "../database/models/Appointments";


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

export const updateAppoint= async(req:Request , res: Response) => {
   try {
    const Id = req.params.id;
        const body = req.body;

        //2.actualizar en base de datos
        const appointments = await Appointments.findOne(
            {
                where: {
                    id: parseInt(Id)
                }
            }
        )

        if (!appointments) {
            return res.status(404).json(
                {
                    success: false,
                    message: "appointment  not exist"
                }
            )
        }

        const updatedAppointment = await Appointments.update(
            {
                id: parseInt(Id)
            },
            body
        )

        
        res.status(200).json(
            {
                success: true,
                message: "appointment updated",
                data: updatedAppointment
            }
        )
    
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