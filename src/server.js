import app from './app.js';
import {init} from './socket.js'

const PORT = 8080;

const httpServer = app.listen(PORT, () => {
    console.log(`servidor escuchando desde el puerto 8080 http://localhost:${PORT}`);
});

init(httpServer);