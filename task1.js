
// Task, Create a CRUD application to simulate api behaviour/functions
// make use of list function, promise, async-await
let products = [
    { id: 101, name: "Laptiop", price: 50000 },
    { id: 102, name: "Mobile", price: 20000 },
    { id: 103, name: "Tablet", price: 30000 },
    { id: 104, name: "Monitor", price: 15000 }
]
// your application should be 6 functions to perform CRUD operations using Promise
// 1. createProduct 
// -- takes product object as argument and add to products array
// -- check if id is present, if yes, reject with error
// -- if name is missing, replace with "Unknown Product" 
// -- if price is missing, replace with 0


const createProduct = (product) => new Promise(
    (resolve, reject) => {
        const existing = products.find(p => p.id === product.id);
        if (existing) {
            reject(new Error(`Product with id ${product.id} already exists`));
            return;
        }
        if (!product.name) product.name = "Unknown Product";
        if (!product.price) product.price = 0;

        products.push(product);
        resolve(product);
    }
)


const run = async () => {
    try{

        const newProduct = await createProduct({ id: 105, name: "Keyboard", price: 5000 });
        console.log("Created:", newProduct);
    }
}
