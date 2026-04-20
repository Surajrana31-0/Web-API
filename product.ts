import express, { Application, Request, Response } from "express";

const app: Application =express();
app.use(express.json());//use json as request

type Product ={
    id: number;
    name: string;
    price:number;
    category?: string;
}

const product =[//both products are differently stored

    {id:1, name: "Apple", price:2000, category:"Fruit"},
]

// sample product
const  products: Product[] = [
    
    { id: 1, name: "Laptop", price: 1200, category: "Electronics" },
    { id: 2, name: "Phone", price: 800, category: "Electronics" },
    { id: 3, name: "Shoes", price: 100, category: "Fashion" },
    {id:4, name: "Banana", price:2560, category:"Fruit"},
    { id: 5, name: "Watch", price: 250, category: "Accessories" },
    { id: 6, name: "Bag", price: 60, category: "Fashion" },
    {id:7, name: "Apple", price:2000, category:"Fruit"},
    
];

//get all product
app.get(
    "/api/products",
    (req:Request, res:Response)=>{
        return res.status(200).json(products);
    }
);


//get product by Id
app.get(
    '/api/products/:id',
    (req:Request, res:Response)=>{
        const {id} = req.params;
        const product = products.find(p=>p.id === parseInt(id as string));

        if(!product){
            return res.status(404).json({message:"Product not found"});
        }
        return res.status(200).json(product);
    }
);


app.post(
    '/api/products',
    (req:Request, res:Response)=>{
        const {name, price, category} =req.body;
        const newProduct={
            id:products.length+1,
            name:name||"Unknown Product",
            price:price||0,
            category:category||"Unknown Category"
        };
        products.push(newProduct);
        return res.status(201).json(newProduct);
    }
);

//update by id
app.put(
    '/api/products/:id',
    (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, price, category } = req.body;

    const index = products.findIndex(p => p.id === parseInt(id as string));

    if (index === -1) {
        return res.status(404).json({ message: "Product not found" });
    }

    const updatedProduct: Product = {
        ...products[index],
        name: name || "Unknown Product",
        price: price || 0,
        category
    };

    products[index] = updatedProduct;

    return res.status(200).json(updatedProduct);
    }
);

//delete by id
app.delete(
    '/api/products/:id',
    (req: Request, res: Response) => {
    const { id } = req.params;

    const index = products.findIndex(p => p.id === parseInt(id as string));

    if (index === -1) {
        return res.status(404).json({ message: "Product not found" });
    }

    products.splice(index, 1);

    return res.status(200).json({ message: "Product deleted successfully" });
}
);

const PORT : number = 808;
app.listen(
    PORT,
    ()=>{
        console.log(`Server is running on:${PORT}`);
    }
);