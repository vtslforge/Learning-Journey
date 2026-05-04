import express from 'express';
import studentRoutes from './Routes/studentRoutes.js';
const app = express();

const port = 3001;

app.use('/api', studentRoutes)
app.listen(port)