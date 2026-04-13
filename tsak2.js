// Task: Create a CRUD application to simulate api behaviour/functions
// make use of list function, promise, async-await

let products = [
    { id: 101, name: "Laptop", price: 50000 },
    { id: 102, name: "Mobile", price: 20000 },
    { id: 103, name: "Tablet", price: 30000 },
    { id: 104, name: "Monitor", price: 15000 }
]

console.log( products);

// 1. createProduct - adds a new product to the array
const createProduct = (product) => {
    return new Promise((resolve, reject) => {
        // Check if id already exists
        if (products.some(p => p.id === product.id)) {
            reject(new Error(`Product with id ${product.id} already exists`));
            return;
        }
        
        // Create a new product with defaults
        const newProduct = {
            id: product.id,
            name: product.name || "Unknown Product",
            price: product.price !== undefined ? product.price : 0
        };
        
        products.push(newProduct);
        resolve(newProduct);
    });
}

// 2. getProducts - returns all products after 2 seconds delay
const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([...products]);
        }, 2000);
    });
}

// 3. getProductById - returns product with specific id after 1 second
const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = products.find(p => p.id === id);
            if (product) {
                resolve(product);
            } else {
                reject(new Error(`Product with id ${id} not found`));
            }
        }, 1000);
    });
}


// Uncomment to run the Promise.race demonstration
// demonstratePromiseRace();
