import bodyParser from 'body-parser';
import cors, { CorsOptions } from 'cors';
import express from 'express';
import { JsonUrlDriver } from './db/JsonUrlDriver.js';
import { shortenHandler } from './requestHandlers/shortenHandler.js';
import { slugHandler } from './requestHandlers/slugHandler.js';
import { getConfig } from './utils/getConfig.js';

const app = express();

app.use(bodyParser.json());

const corsOptions: CorsOptions = {
  origin: 'http://localhost:5173',
};

app.use(cors(corsOptions));

const driver = new JsonUrlDriver(await import(`./db/${getConfig().db_path}`));

app.post('/shorten', shortenHandler(driver));

app.get('/:slug', slugHandler(driver));

app.listen(process.env.PORT, () => {
  console.log(`Server ready http://localhost:${process.env.PORT}`);
});
