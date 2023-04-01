import 'reflect-metadata';
import * as dotenv from 'dotenv';
import { container, Setup } from './ioc/setup';
import { Server } from './api/server';

dotenv.config();

Setup.configure();
const server = container.resolve(Server);

const port = process.env.PORT || 3000;
server.app.listen(port, () => console.log(`Server on: http://localhost:${port}`));