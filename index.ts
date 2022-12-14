
import express from "express";

import bodyParser from "body-parser";

import mongoose from "mongoose";
import productRouter from "./src/router/product.router";



const PORT = 3000;

const app = express();

app.set("view engine", "ejs");

app.set('views', './src/views');

const DB_URL = 'mongodb://localhost:27017/demoejs';

mongoose.connect(DB_URL)

    .then(() => console.log('DB Connected!'))

    .catch(error => console.log('DB connection error:', error.message));

app.use(bodyParser.json());

app.use(productRouter)

app.listen(PORT, () => {

    console.log("App running on port: " + PORT)

})
