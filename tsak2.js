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

// 4. searchProduct - returns all products matching the name (case-insensitive)
const searchProduct = (name) => {
    return new Promise((resolve) => {
        const matchingProducts = products.filter(p => 
            p.name.toLowerCase().includes(name.toLowerCase())
        );
        resolve(matchingProducts);
    });
}

// 5. updateProduct - updates a product with given id
const updateProduct = (id, updateObj) => {
    return new Promise((resolve, reject) => {
        const index = products.findIndex(p => p.id === id);
        
        if (index === -1) {
            reject(new Error(`Product with id ${id} not found`));
            return;
        }
        
        // Update the product while preserving the id
        products[index] = {
            ...products[index],
            ...updateObj,
            id: products[index].id // Ensure id doesn't change
        };
        
        resolve(products[index]);
    });
}

// 6. deleteProduct - deletes a product with given id
const deleteProduct = (id) => {
    return new Promise((resolve, reject) => {
        const index = products.findIndex(p => p.id === id);
        
        if (index === -1) {
            reject(new Error(`Product with id ${id} not found`));
            return;
        }
        
        const deletedProduct = products[index];
        products.splice(index, 1);
        resolve(`Successfully deleted product: ${deletedProduct.name} (ID: ${id})`);
    });
}

// ============ TESTING THE APPLICATION ============

// Helper function to demonstrate async operations
async function testCRUDOperations() {
    console.log("\n========== STARTING CRUD TESTS ==========\n");
    
    // 1. Test createProduct
    console.log("1. Testing createProduct...");
    try {
        const newProduct1 = await createProduct({ id: 105, name: "Keyboard", price: 2000 });
        console.log("✓ Created:", newProduct1);
        
        const newProduct2 = await createProduct({ id: 106, name: "Mouse", price: 800 });
        console.log("✓ Created:", newProduct2);
        
        const newProduct3 = await createProduct({ id: 107, price: 50000 }); // Missing name
        console.log("✓ Created (default name):", newProduct3);
        
        const newProduct4 = await createProduct({ id: 108, name: "Webcam" }); // Missing price
        console.log("✓ Created (default price):", newProduct4);
        
        // This will fail - duplicate id
        await createProduct({ id: 101, name: "Duplicate", price: 999 });
    } catch (error) {
        console.log("✗ Create failed:", error.message);
    }
    
    // 2. Test getProducts (with delay)
    console.log("\n2. Testing getProducts (waiting 2 seconds)...");
    const allProducts = await getProducts();
    console.log("✓ All products:", allProducts);
    
    // 3. Test getProductById
    console.log("\n3. Testing getProductById...");
    try {
        const product = await getProductById(102);
        console.log("✓ Found product:", product);
        
        // This will fail - id not found
        await getProductById(999);
    } catch (error) {
        console.log("✗ Get by id failed:", error.message);
    }
    
    // 4. Test searchProduct
    console.log("\n4. Testing searchProduct...");
    const searchResults = await searchProduct("lap");
    console.log("✓ Search results for 'lap':", searchResults);
    
    const searchResults2 = await searchProduct("MOBILE");
    console.log("✓ Search results for 'MOBILE' (case-insensitive):", searchResults2);
    
    // 5. Test updateProduct
    console.log("\n5. Testing updateProduct...");
    try {
        const updated = await updateProduct(103, { name: "Premium Tablet", price: 35000 });
        console.log("✓ Updated product:", updated);
        
        // This will fail - id not found
        await updateProduct(999, { name: "Ghost", price: 100 });
    } catch (error) {
        console.log("✗ Update failed:", error.message);
    }
    
    // 6. Test deleteProduct
    console.log("\n6. Testing deleteProduct...");
    try {
        const deleteResult = await deleteProduct(104);
        console.log("✓", deleteResult);
        
        // Show remaining products
        const remainingProducts = await getProducts();
        console.log("✓ Remaining products:", remainingProducts);
        
        // This will fail - id not found
        await deleteProduct(104);
    } catch (error) {
        console.log("✗ Delete failed:", error.message);
    }
    
    console.log("\n========== CRUD TESTS COMPLETED ==========");
    console.log("Final products array:", products);
}

// Run the tests
testCRUDOperations();

// ============ ADDITIONAL DEMONSTRATION ============
// Example of using Promise.all with multiple operations
async function demonstratePromiseAll() {
    console.log("\n\n========== PROMISE.ALL DEMONSTRATION ==========\n");
    
    // Fetch multiple products simultaneously
    const productIds = [101, 102, 103];
    const promises = productIds.map(id => getProductById(id));
    
    try {
        const results = await Promise.all(promises);
        console.log("✓ All products fetched simultaneously:", results);
    } catch (error) {
        console.log("✗ Failed to fetch all products:", error.message);
    }
}

// Uncomment to run the Promise.all demonstration
// demonstratePromiseAll();

// Example of using Promise.race
async function demonstratePromiseRace() {
    console.log("\n\n========== PROMISE.RACE DEMONSTRATION ==========\n");
    
    const promise1 = getProductById(101);
    const promise2 = new Promise((_, reject) => 
        setTimeout(() => reject(new Error("Timeout!")), 1500)
    );
    
    try {
        const result = await Promise.race([promise1, promise2]);
        console.log("✓ Race winner:", result);
    } catch (error) {
        console.log("✗ Race lost:", error.message);
    }
}

// Uncomment to run the Promise.race demonstration
// demonstratePromiseRace();