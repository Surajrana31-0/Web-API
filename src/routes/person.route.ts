import { Router } from "express";
import { Request, Response } from "express";
import {PersonController} from "../controllers/person.controller";
const personController   =  new PersonController;
const router = Router();



router.get(
    '/',
    personController.getAllPersons
)

router.post(
    '/',
    personController.createPerson
)

router.put(
    '/api/persons/:id',
    personController.updatePerson
)


export default router;