import { Request, Response } from "express";
import { Service } from "../database/models/Service";

export const getAllService = async (req: Request, res: Response) =>{
    try {
        ///1 recuperar la inf de la BD
      const services =  await Service.find()

      //2 responder la inf de la BD
      res.json(
        {
            success: true,
            message: "see all services",
            data: services
        }
      )




    } catch (error) {
        res.status(500).json(
            {
                success: false, 
                message: "cannot recover services",
                error: error
            }
        )
        
    }
       }