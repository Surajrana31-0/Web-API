/*
Legacy Code Copy (Archived)
This block preserves the old controller code exactly for easy comparison.

import { Request, Response } from "express";
import {data} from "../models/person.model";
import { HttpException } from "../exceptions/http-exception";
import { ApiResponseHelper } from "../utils/api-response";
import {z} from "zod";
import { PersonSchema } from "../types/person.type";
import { CreatePersonDTO } from "../dtos/person.dto";

export class PersonController{
    async getAllPersons(req:Request, res:Response){
        try{
            const someVar:any = {}
            if(!someVar.name){
                throw new HttpException(400, "Name is required");
            }
            someVar.name.getAll();
            return res.status(200).json(data);
            return ApiResponseHelper.success(res,data, 200, "Success");

        } catch (err:Error|unknown |any){
            return ApiResponseHelper.error(
                res,
                err?.message || "Failed to get",
                err.status || 500
            );
        }
    }

    async createPerson(req:Request, res:Response){
        const parseResult = CreatePersonDTO.safeParse(req.body);
        if(!parseResult.success){
            throw new HttpException(
                400,
                z.prettifyError(parseResult.error)
            );
        }
        const {name, age} = parseResult.data;
        const newPerson = {
            id: data.length +1,
            name,
            age
        }
        data.push(newPerson);
        return ApiResponseHelper.success(res, newPerson,201, "Person is successfully created");
    }

    async updatePerson(req:Request, res:Response){
        const {id} = req.params;
        const {name, age} = req.body;
        if(!name){
            throw new HttpException(404, "Person  not found");
        }
        const findPerson = data.findIndex(p=>p.id===parseInt(id as string));
        const updatePerson = {
            name,
            age
        }
        data[findPerson] = {...data[findPerson],...updatePerson};
        return res.status(200).json(updatePerson);
    }
}
*/

import { Request, Response } from "express";
import { data } from "../models/person.model";
import { HttpException } from "../exceptions/http-exception";
import { ApiResponseHelper } from "../utils/api-response";
import { CreatePersonDTO } from "../dtos/person.dto";

const UpdatePersonDTO = CreatePersonDTO.partial();

function formatZodMessage(error: { issues: Array<{ message: string }> }): string {
    return error.issues.map((issue) => issue.message).join(", ");
}

function handleControllerError(res: Response, err: unknown, fallbackMessage: string) {
    if (err instanceof HttpException) {
        return ApiResponseHelper.error(res, err.message, err.status);
    }

    if (err instanceof Error) {
        return ApiResponseHelper.error(res, err.message, 500);
    }

    return ApiResponseHelper.error(res, fallbackMessage, 500);
}

export class PersonController {
    async getAllPersons(_req: Request, res: Response) {
        try {
            return ApiResponseHelper.success(res, data, 200, "Persons fetched successfully");
        } catch (err: unknown) {
            return handleControllerError(res, err, "Failed to fetch persons");
        }
    }

    async createPerson(req: Request, res: Response) {
        try {
            const parseResult = CreatePersonDTO.safeParse(req.body);

            if (!parseResult.success) {
                throw new HttpException(400, formatZodMessage(parseResult.error));
            }

            const { name, age } = parseResult.data;
            const newPerson = {
                id: data.length + 1,
                name,
                age,
            };

            data.push(newPerson);
            return ApiResponseHelper.success(res, newPerson, 201, "Person created successfully");
        } catch (err: unknown) {
            return handleControllerError(res, err, "Failed to create person");
        }
    }

    async updatePerson(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);

            if (Number.isNaN(id)) {
                throw new HttpException(400, "Invalid person id");
            }

            const parseResult = UpdatePersonDTO.safeParse(req.body);

            if (!parseResult.success) {
                throw new HttpException(400, formatZodMessage(parseResult.error));
            }

            if (Object.keys(parseResult.data).length === 0) {
                throw new HttpException(400, "At least one field (name or age) is required");
            }

            const personIndex = data.findIndex((person) => person.id === id);

            if (personIndex === -1) {
                throw new HttpException(404, "Person not found");
            }

            data[personIndex] = { ...data[personIndex], ...parseResult.data };
            return ApiResponseHelper.success(res, data[personIndex], 200, "Person updated successfully");
        } catch (err: unknown) {
            return handleControllerError(res, err, "Failed to update person");
        }
    }
}