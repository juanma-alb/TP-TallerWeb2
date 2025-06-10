import { Router } from "express";
import { UsuarioController } from "../../controller/usuario.controller"

export const usuarioRouter = Router();

const usuarioController = new UsuarioController();


// usuarioRouter.get('/', usuarioController.getUsuarios.bind(usuarioController)) como mostro el profe

usuarioRouter.post('/signup', usuarioController.signup.bind(usuarioController));
usuarioRouter.post('/signin', usuarioController.signin.bind(usuarioController));