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

export const createService = async (req: Request, res: Response) =>{
  try {
    /////1 recupero la inf
    const title = req.body.title
    const description = req.body.description

   //2.valido la inf
   if (!title || !description) {
    return res.status(400).json(
        {
            success: false,
            message: "title and description needed"
        }
    )
}
 //3. tratar inf si hace falta
  /// 4 guardar en base datos

  const newService = await Service.create(
    {
        title: title,
        description: description,
        }
).save()
res.status(201).json(
    {
        success: true,
        messages: "service created",
        data: newService
    }
)

  
    } catch (error) {
    res.status(500).json(
        {
            success: false,
            messages: "service cant be created",
            error: error
        }
    )
    
  }

}