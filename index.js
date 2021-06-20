import express from 'express';
import http from 'http';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoConnect from './config/db.js';
import treeCategory from './routes/tree.js';

dotenv.config();
mongoConnect();

const environment = process.env.NODE_ENV;

const app = express();
const server = http.createServer(app);

app.use(
  cors({
    origin: [process.env.LOCAL_URL],
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/tree', treeCategory);

server.listen(process.env.PORT, () => {
  console.log(
    `server running in ${environment} mode & listening on port ${process.env.PORT}`
  );
});
