import { Request, Response } from "express";
import { Appointments } from "../database/models/Appointments";


export const appointCreateCita= async (req: Request , res: Response) => {
    try {
    const  appointId = req.body. appointment_date;
    const userId = req.tokenData.id;
    const serviceId = req.body.service_id;

    if (!appointId || !serviceId) {
        return res.status(404).json(
            {
                success: false,
                message: "you must enter date and service" 
            }
        )
    }
    const newAppoint = await Appointments.create(
        {
            appointment_date: appointId,
            user_id: userId,
            service_id: serviceId
        }
    ).save();

    
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
            message: "appointment cant be updated",
            error : error
        }
    )
   }
}

export const getAllAppointById= async(req: Request, res: Response) => {
   try {
    const Id = req.params.id;
        const userId = req.tokenData.id;

       // 1. recuperar Id de la base de datos
        const appointments = await Appointments.findOne(
            {
                where: {
                    users: { id: userId },
                    id: parseInt(Id)
                },
                relations: { services: {} }
            }
        )

        if (!Id) {
            return res.status(404).json(
                {
                    success: false,
                    message: "appointment  not exist"
                }
            )
        }

        res.json(
            {
                success: true,
                message: "appointment retrived",
                data: appointments
            }
        )

    
   } catch (error) {
    res.status(500).json(
        {
            success: false,
            message:"Error retrieving appointment",
            error: error 
        }
    )
    
   }
}

export const getAppointment= async(req:Request , res: Response) => {
 try {
    const userId = req.tokenData.id;

    const appointments = await Appointments.find(
        {
            select: {
                id: true,
                appointment_date: true,
                users: {
                    id: true,
                    email: true,
                   
                },
                services: {
                    id: true,
                    title: true
                },
            },
            where:
            {
                user_id: userId
            },

            relations: { users: {}, services: {} }
        }
    );

    res.status(200).json(
        {
            success: true,
            message: "appointment retrived successfully",
            data: appointments
        }
    )

    
 } catch (error: any) {
    res.status(500).json(
        {
            success: false,
            message:"Error retrieving appointment",
            error: error.message
        }
    )
    
 }
}
export const deleteAppointmentById = async (req: Request, res: Response) => {
    try {
      const apptIdToDelete = Number(req.params.id);
  
      const apptDeleted = await Appointments.delete(apptIdToDelete);
  
      if (!apptDeleted.affected) {
        throw new Error("Appointment not foudn");
      }
  
      return res.status(200).json({
        success: true,
        message: "Appointment deleted successfully",
        data: apptDeleted,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error trying to delete appointment",
        error: error,
      });
    }
  };