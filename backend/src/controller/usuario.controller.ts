import { Request } from "express";
import { Response } from "express";
import {UsuarioService} from "../services/usuario.service"


export class UsuarioController {

    private service = new UsuarioService();

    constructor() {

    }

   public signup = async (req: Request, res: Response) => {
        try {
            const user = await this.service.signup(req.body);
            res.status(201).json({ message: "Usuario creado", email: user.email });
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
  }

    public signin = async (req: Request, res: Response) => {
         try {
            const { email, password } = req.body;
            const result = await this.service.signin(email, password);
            res.status(200).json(result); // éxito, el frontend puede redirigir al home
        } catch (error: any) {
            res.status(401).json({ error: error.message }); // el frontend muestra error
        }
    }
}