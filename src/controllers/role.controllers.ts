import { Request, Response } from "express";
import { Role } from "../database/models/Role";

export const createRole = async (req: Request, res: Response) => {
    try {
    const name = req.body.name

    const newName = await Role.create(
        {
            name: name
        }
    ).save()

    res.status(201).json(
        {
            success: true, 
            message: " role created",
            data:newName
        }
    )

    

        
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "role cant be created",
                error : error
            }
        )
    }
}

export const getAllRole = async (req: Request, res: Response) => {
    try {
        const roles = await Role.find()

        res.json(
            {
                success: true,
                message: "all roles retrieve successfully",
                data: roles
            }
        )
        
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "no role found",
                error: error
            }
        )
        
    }
}




