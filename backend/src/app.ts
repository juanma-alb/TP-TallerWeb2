import { envs } from "./config/envs";
import { Server } from "./server/server";
import { AppRoutes } from './routes/routes.routes';


(
  async () => { main(); }

)();


function main() {
  const server = new Server(
    { port: envs.PORT, routes: AppRoutes.routes },
  );

  server.start()
}