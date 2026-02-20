import ServerDocker from "./src/server/config.js"
import routerIndex from "./src/routes/index.routes.js"

const server = new ServerDocker();

server.app.use('/api', routerIndex)



server.listen()



    