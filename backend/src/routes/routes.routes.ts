import { Router } from "express";
import { usuarioRouter } from "./usuario/usuario.routes";

export class AppRoutes {
    static get routes():Router{

        const router = Router();

        router.use('/api/usuario',usuarioRouter);

        return router;
    }
    
}