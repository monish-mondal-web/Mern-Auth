import express from "express";
import userAuth from "../middleware/userAuth.js";
import { getDeveloperInfo } from "../controllers/getProfileController.js";
const getProfileRouter = express.Router();

getProfileRouter.get('/get-profile', userAuth, getDeveloperInfo);

export default getProfileRouter;