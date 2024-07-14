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

export const updateRole = async (req : Request, res: Response) => {
    try {
    
       const roleId = req.params.id
       const body = req.body

       const roleUpDate = await Role.update (
        {
            id: parseInt(roleId)
        },
        body
       )
        
       res.status(200).json(
        {
            success: true,
            message: "role update",
            data : roleUpDate
        }
       )
        
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: " role error",
                error: error
            }
        )
        
    }
}

export const deleteRole = async (req: Request, res: Response) => {
    try {
     const roleIdDelete = Number (req.params.id)

     const roleDelete = await Role.delete(roleIdDelete)

     if(!roleDelete.affected){
        return res.status(404).json(
            {
                success: false,
                message: "role doesnt exist"
            }
        )
     }
     res.status(200).json(
        {
            success: true,
            message: "role removed",
            data: roleDelete
        }
     )
        
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "role deleted",
                error: error
            }
        )
        
    }
}
