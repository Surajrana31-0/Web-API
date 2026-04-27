import {z} from "zod";

export const PersonSchema = z.object(
    {
    id: z.number(),
    name:z.string().min(1, "Nmae is required"),
    age: z.number().min(0," Age must be positive number")
    }
)

//domain model -person
export type Person = z.infer<typeof PersonSchema>;





export const ProductSchema = z.object(
    {
    id: z.number(),
    name:z.string().min(1, "Name is required").default("UnKnown product"),
    price: z.number().min(0," Price must be!"),category:z.string().optional()
    }
)
// export type Product = z.infer<typeof ProductSchema>;
export const UpdateProductSchema = ProductSchema.partial();
export type UpdateProductDTO = z.infer<typeof UpdateProductSchema>;

// create a zod schema of
// id as string
// name as string, min length 1, default value "Unnamed Product"
// price as number, min 0
// category as optional string 
// z.string().optional() // optional
// z.default("Unknown Product") // default value if not provided

// make a dto from this schema for create
// on create, id is not required

// make a dto from this schema for update
// on update, all fields are optional 

// apply model, dto, and controller for product similar to person