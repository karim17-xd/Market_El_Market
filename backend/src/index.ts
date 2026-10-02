import express from "express";
import cors from "cors";

import { ENV } from "./config/env";
import { clerkMiddleware } from '@clerk/express'

const app = express();

app.use(cors({origin: ENV.FRONTEND_URL})); // allow cross origin requests from frontend url
app.use(clerkMiddleware()) // auth obj will be available in req.auth
app.use(express.json()); // parse json data from request body
app.use(express.urlencoded({ extended: true })); // parse from data (like html forms ).

app.get("/", (req, res) => {
  
  res.json({ message: "welcome to E-commerce" });
});

app.listen(ENV.PORT, () => {
  console.log(`Server is running on port ${ENV.PORT}`);
});
