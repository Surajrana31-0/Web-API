import z from "zod";
import { PersonSchema, ProductSchema } from "../types/person.type";


//DTO - Data transfer object[can be input/output to client]
export const CreatePersonDTO = PersonSchema.omit({id: true});
//fro create id is not required
export type CreatePersonDTOType  = z.infer<typeof CreatePersonDTO>;



//DTO - Data transfer object[can be input/output to client]
export const CreateProductDTO = ProductSchema.omit({id: true});
//fro create id is not required
export type CreateProductDTOType  = z.infer<typeof CreateProductDTO>;


