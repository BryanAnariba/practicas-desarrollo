import dotenv from 'dotenv';
import { connect } from './database/connection.js';
import { Server } from './models/Server.js';
dotenv.config();

const main = () => {
    const server = new Server();
    server.start();
    connect();
}

main();