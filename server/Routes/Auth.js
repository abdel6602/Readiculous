import express from "express";
import { Authenticator } from "../Controllers/AuthController.js";

const auth = new Authenticator();

export const authApp = express();

authApp.get('/', auth.login);
authApp.post('/', auth.signup);

authApp.post('/:username/:password')