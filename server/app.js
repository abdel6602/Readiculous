import express from "express";
import cors from 'cors';
import { authApp } from "./Routes/Auth.js";
import {createDatabaseIfNotExists} from './Models/dummyDatabase.js'

export const app = express();

app.use(cors());
app.use(express.json());

app.use('/auth', authApp)

app.get('/', (req, res) => {
    createDatabaseIfNotExists();
    res.json({message: "database created"});
})

app.listen(8080, () => {
    console.log('server listening on port 8080')
});