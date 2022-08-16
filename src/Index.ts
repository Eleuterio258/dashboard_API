import * as dotenv from "dotenv";
import express from "express";
import { orderRouter } from "./Routers/OrderRouter";

const app = express();
dotenv.config();

app.use(express.json());

app.use("/orders", orderRouter);

app.listen(process.env.PORT, () => console.log('server running on port '+process.env.PORT))
