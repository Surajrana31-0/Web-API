//syncronous statement
const var1 ="Ram";
const var2 = 2;
console.log(var1);
console.log(var2);

// asyncronous statement
 setTimeout(
    () => {
        console.log("this is asyncronous statement.");// the function that takes time is called promiss function
    },
 2000
);
console.log("End of task.");

setTimeout(() =>{
    console.log("This is another timer for promis function");
},
2000,
);
console.log("About to end");



const promis = ()=>{
    return new Promise ((resolve, reject) => {
        setTimeout(
            ()=> {
                resolve("success return");
            },
            200//millisecind
        );
    });
    
};


const pr = ()=>{
    return new Promise((resolve, reject) => {
        setTimeout(
            ()=>{
            resolve("success done");
            },
            2000
        );
    });
};
promis()
.then(result =>{
    //result is resolved
    console.log("success");
    console.log(result);
})

.catch(error =>{
    //error is rejectted
    console.log("Exception");
    console.log(error);
});

console.log("Sakiyo");


pr()
.then(result =>{
    //result is resolved
    console.log("success");
    console.log(result);
})

.catch(error =>{
    //error is rejectted
    console.log("Exception");
    console.log(error);
});

console.log("Sakiyo");



const main = async() =>{
    try{
         const result = await promis()//block the execution
         console.log(result);
         console.log("result of function");
    }catch(error){
        //error is rejected
        console.log("Rejected", error);
    }
   
}
main();





















const mn = async()=> {
    try{
//         const isEven = (num) => new Promise(
//     (resolve, reject) => {
//         if (num % 2 === 0) {
//             resolve(true);
//         } else {
//             reject(false);
//         }
//     }
// )
const evenResult = await isEven(4);
console.log("Is Eveen:", evenResult);
const positiveResult = await isPositive(4);
console.log("Is Positive:", positiveResult);
    }catch (error){
        console.log(error);
    }
}
mn();
// Task 1
const isEven = (num) => new Promise(
    (resolve, reject) => {
        if (num % 2 === 0) {
            resolve(true);
        } else {
            reject(false);
        }
    }
)

const isPositive = (num) => new Promise(
    (resolve, reject) => {
        if (num > 0) {
            resolve(true);
        } else {
            reject(false);
        }
    }
)

isEven
.then(result => {
    console.log("Is Even", result);
    isPositive(4),then (result => {
        console.log("Is Positive", result);
    }).catch(error =>{
        console.log("Is Positive", error );
    })
}).catch(error =>{
    console.log("Is Even", error);
})
mn();
// 1. run these function with async await, sequencially
// 2. run these function with .then and .catch, sequencially

//Parallel promise
const parallelRun = async() =>{
    try {
        const [result1, result2] = await Promise.all(
            [
                iseven(4),
                isPositive(4)
            ]
        );
        console.log("Is Even:", result1);
        console.log("Is Positive:", result2);
    }catch(error){
        console.log(error);
    }
}
parallelRun();

const parallelRun2 = () =>{
    try {
        const [result1, result2] =  Promise.allSettled(
            [
                isEven(4),
                isPositive(-4)
            ]
        )
        console.log("Is Even:", result1, result2.value);//value =resolved
        console.log("Is positive:", result1, result2);
    }catch(error){
        console.log(error);
    }
}