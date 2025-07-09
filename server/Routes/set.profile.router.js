import express from 'express';
import userAuth from "../middleware/userAuth.js";
import { setDeveloperInfo } from '../controllers/profileController.js';

const setProfileRouter = express.Router();

setProfileRouter.post('/set-profile', userAuth, setDeveloperInfo);
export default setProfileRouter;
