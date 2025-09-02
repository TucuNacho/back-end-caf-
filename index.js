import Server from "./server/config.js";
import router from "./src/routes/index.routes.js";
import routerUser from "./src/routes/indexUser.routes.js";
const server = new Server();

//agregar las rutas
server.app.use('/api',router)
server.app.use('/api',routerUser)

server.listen();
