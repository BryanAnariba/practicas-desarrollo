import dotenv from 'dotenv';
import { Server } from './models/Server.js';
dotenv.config();

const main = () => {
    const server = new Server();
    server.start();
}

main();