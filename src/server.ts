import * as dotenv from 'dotenv';
dotenv.config();

import router from './interface/routes/routes';
import express from 'express';

const app = express();

app.use(express.json())

app.use('/api/v1', router)

app.listen(process.env.PORT, () => { console.log("Server running on PORT " + process.env.PORT) })