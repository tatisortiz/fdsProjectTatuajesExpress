import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { User } from '../database/models/User';
import jwt from 'jsonwebtoken';

export const authRegister = async (req: Request, res: Response) => {
  try {
    // Recuperar la información
    const email = req.body.email;
    const password = req.body.password;

    // Validar la información
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    // Validar el formato del password
    if (password.length < 8 || password.length > 12) {
      return res.status(400).json({
        success: false,
        message: "Password is not valid, 8 to 12 characters must be needed",
      });
    }

    // Encriptar password
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Guardar en la base de datos
    const newUser = await User.create({
      email: email,
      password: hashedPassword,
    });

    // Responder
    res.status(201).json({
      success: true,
      message: "User registered",
      data: newUser,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "User can't be registered",
      error: error,
    });
  }
};

export const authLogin = async (req: Request, res: Response) => {
  try {
    // Recuperar la información
    const { email, password } = req.body;

    // Validar la información
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are needed",
      });
    }

    // Comprobar si el usuario existe
    const user = await User.findOne({
      where: { email: email },
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Email or password not valid",
      });
    }

    // Comprobar la contraseña
    const isPasswordValid = bcrypt.compareSync(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({
        success: false,
        message: "Email or password not valid",
      });
    }

    // creacion del token
   const token = jwt.sign(
    {
     id: user.id,
     role: user.role,
     email:user.email
    },

    process.env.JWt_SECRET as string,
    {
        expiresIn:"2h"
    }
    

)

    // Responder con éxito
    res.status(200).json({
      success: true,
      message: "User logged",
    });

   // o responder con error

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "User can't be logged",
      error: error,
    });
  }
};


