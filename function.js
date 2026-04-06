//function
//1
function hello(){
    console.log("Hello world");

}
hello();
//2
const hello2 = function(){  // variable reference 
    console.log("Hello world 2");
}
hello2();
//3
const hello3 = ()=> {//Arrow function
    console.log("Suraj");
}  
hello3();


//difference between normal and arrow
function add(a,b){
    return a+b;
}
var result = add(5,6);//
console.log(result);
const subtract =(a,b) => a-b;// arrow autometatically return
var result=subtract(5,6);
console.log(result);



const mull = (a,b) =>{ //if arrow is scopped we need to use return
    return a*b;
}
var result = mull(5,6);
console.log(result);


const person ={
    fName:"Ram",
    lName:"Raj",
    fullName: function(){
        return this.fName + " "+ this.lName;
    },
    fullNameArrow:() =>{
        //arrow in object can not use this
        return this.fName+" "+this.lName;
    }

}


console.log(person);
// console.log(person.fullName());
// console.log(person.fillNameArrow());


//distructing or directly converted into variables
const { fName, lName} = person;
console.log(fName, lName);
const {fName: pahilo , lName:  dushro} = person;
console.log(dushro, pahilo);

//callback (takes the function as a parameter)and closures(protect the preseres)
//closures
function main (){
    let count = 0;
    function inner (){
        count++;
        console.log("inner functions iterate ",count);
    }
    return inner;
}

const counter1 = main();
counter1();
counter1();

const counter2 = main();// it reset the iteratin value to 0
// counter1(); //internal state is preserved so Output: inner function iterate 3
counter2();//Output:inner function iterate 1



//callback or highet order function
function greet (name, callback){
    callback(name);//invole
}
function say(name){
    console.log("Hello! "+name);
}

function sayWhat(name){
    console.log("what's up!"+name);

}
greet( "Ram", say);//one "name" parameter from greet and another function"say"
greet("Ram", sayWhat);
greet("Ram",(name)=> console.log("HI!" + name));




// function calculate(num1, num2, callback){
//     callback(num1, num2);
// }
// function subtract(num1, num2){
//     console.log("subtraction:", num1-num2);
// }
// function another(num1, num2){
//     console.log("The output:",num1-num2);
// }

// const add = (a,b) => console.log("Addition:", a+b);
// calculate(15, 10, add);
// calculate(15,2, (a,b) => console.log("multiplication:", a*b));

// calculate(25,10, subtract);


const fruits = ["Apple","Peach","Mango","Banana"];
fruits.forEach(
    //callback function
    (fruit, index)=> console.log(index+1+" "+fruit)
);
fruits.forEach((fruit)=>console.log(fruit.toUpperCase()));

const mappedFruits= fruits.map(
    (fruit)=>"Fresh" +fruit.toUpperCase()
);
console.log(mappedFruits);

//ui example
const listFruits = fruits.map(
    (fruits, index)=>{
        return`<li id="${index}">${fruits}</li>`;
    }
);

console.log(listFruits);

const filteredFruits = fruits.filter(
    (fruit)=> fruit.length>5// length is on index
);
console.log(filteredFruits);
//count
const countFruits = fruits.reduce(
    (count)=> count +1,// count is accumulator, fruit is current calue

);
console.log(countFruits);