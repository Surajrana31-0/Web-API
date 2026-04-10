
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
            reject(new Error(`Product already exists`));
            return;
        }
        if (!product.name) product.name = "Unknown Product";
        if (!product.price) product.price = 0;

        products.push(product);
        resolve(product);
    }
)


// 2. getProducts, 
// -- returns all products after 2 seconds delay using Promise

const getProducts = () => new Promise(
    (resolve, reject) => {
        setTimeout(() => {
            if (products.length === 0){
                reject(new Error("No products found."));
                return;
            }
            resolve(products);
        }, 2000);
    }
)


// 3. getProductById, 
// -- takes id as argument and returns product with that id after 1 second delay 
// using Promise, if not found, reject with error

const getProductById = (id) => new Promise(
    (resolve, reject)=> {
        setTimeout(() => {
            const product = products.find(p => p.id === id);
            if (product) {
                resolve(product);
            } else {
                reject(new Error("Product not found"));
            }
        }, 1000);
    }
)


// 4. searchProduct,
// -- takes name as argument and returns all products that match the name


const searchProduct = (name) => new Promise(
    (resolve, reject) => {
        setTimeout(() => {
            const filtered = products.filter(
            p => p.name.toLowerCase().includes(name.toLowerCase())
        );
        if (filtered.length > 0) {
            resolve(filtered);
        } else {
            reject(new Error(`No products found matching "${name}"`));
        }


        },1000 );
        
    }
)



// const searchProduct = (name) => new Promise(
//     (resolve, reject) => {
//        const filtered = product.filter(
//         p=> p.name === search
//        )
//        resolve(filtered)
//     }

// )
// 5. updateProduct, 
// -- takes id and update object as arguments, 
// finds product by id and updates it with the update object, 
// if not found, reject with error

const updateProduct = (id, updateObj) => new Promise(
    (resolve, reject) => {
        const index = products.findIndex(p => p.id === id);
        if (index === -1) {
            reject(new Error(`Product not found`));
            return;
        }
        products[index] = { ...products[index], ...updateObj };
        resolve(products[index]);
    }
)
// 6. deleteProduct
// -- takes id as argument and deletes product with that id,
// if not found, reject with error, if deleted, resolve with success message

const deleteProduct = (id) => new Promise(
    (resolve, reject) => {
        const index = products.findIndex(p => p.id === id);
        if (index === -1) {
            reject(new Error(`Product not found`));
            return;
        }
        products.splice(index, 1);
        resolve(`Product deleted successfully`);
    }
)


const run = async () => {
    try{
        //create ======
        const newProduct = await createProduct({ id: 105, name: "Keyboard", price: 5000 });
        console.log("Created:", newProduct);

        //getAll product=====
        const allProducts = await getProducts();
        console.log("All Products:", allProducts);

        //get by id----------
        const found = await getProductById(103);
        console.log("Found:", found);

        //search product============
        const searched = await searchProduct("mobile");
        console.log("Search Result:", searched);


        //update products=========
        const updated = await updateProduct(101, { price: 55000, name: "Laptop Pro" });
        console.log("Updated:", updated);

        //delet product=========
        const deleted = await deleteProduct(104);
        console.log(deleted);

        const list = await getProducts();
        console.log(list);
    }catch (error) {
        console.error("Error:", error.message);
    }
}

run();
