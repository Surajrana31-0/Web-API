import { Router } from "express";
import { Request, Response } from "express";
import {PersonController} from "../controllers/person.controller";
const personController   =  new PersonController;
const router = Router();



router.get(
    '/',
    personController.getAllPersons
)
export default router;