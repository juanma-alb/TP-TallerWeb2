import { UsuarioRepository } from "../repository/usuario.respository";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export class UsuarioService {
    
  private repo = new UsuarioRepository();

  async signup(data: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    address: string;
  }) {

    const existingUser = await this.repo.findByEmail(data.email);
    if (existingUser) throw new Error("Email ya registrado");

    const hashedPassword = await bcrypt.hash(data.password, 10);// encrypta la contraseña antes de guardarla en DB
    return this.repo.create({ ...data, password: hashedPassword });
  }

  
  async signin(email: string, password: string) {

    const user = await this.repo.findByEmail(email);
    if (!user) throw new Error("Credenciales inválidas");

    const isMatch = await bcrypt.compare(password, user.password); 
    if (!isMatch) throw new Error("Credenciales inválidas");

    return {
    message: "Login exitoso",
    user: {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
    }
  };
    
  }
}
