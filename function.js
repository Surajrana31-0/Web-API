//function without parameter but we can also put it on. 
//1
function hello(){  //normal function
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
//Normal function
function add(a,b){
    return a+b;
}
var result = add(5,6);//create variable and indicate function to pass parameter
console.log("The addition is:",result);



//Arrowed function
const mull = (a,b) =>{ //if arrow is scopped we need to use return
    return a*b;
}
var result = mull(5,6);
console.log("The multiplication is:",result);

const muller = (a,b)=>console.log("If not scopped:", a*b);
var total = muller(10,2);

const subtract =(a,b) => a-b;// if arrow is not scopped it autometatically return
var result=subtract(5,6);
console.log("The subtraction is:",result);




const person ={
    first_Name:"Suraj",
    last_Name:"Rana",
    fullName: function(){//normal
        return this.first_Name + " "+ this.last_Name;
    },
    fullNameArrow:() =>{
        //arrow in object can not use this
        return this.first_Name +" "+ this.last_Name;
    }
}
console.log(person);
// console.log(person.fullName());
// console.log(person.fillNameArrow());


//distructing or directly converted into variables
const { first_Name, last_Name} = person;
console.log(first_Name, last_Name);

// const (first_Name, last_Name) = person => console.log(first_Name,last_Name); //wrong
const {first_Name: pahilo , last_Name:  dushro} = person;
console.log(dushro, pahilo);

//callback (takes the function as a parameter)and closures(protect the preseres)
//closures
function main (){
    let count = 0;
    function inner (){
        console.log("Inner functions iteration: ",count+1);
        count++;
    }
    return inner;
}

const counter1 = main();
counter1();
counter1();

const counter2 = main();// it reset the iteratin value to 0
counter2();//Output:inner function iterate 1
counter1(); //internal state is preserved so Output: inner function iterate 3


//callback or highet order function
function greet (name, callback){
    callback(name);//invole
}
function say(name){
    console.log("Hello! "+name);
}
say("Suraj");


function sayWhat(name){
    console.log("what's up!"+name);

}
greet( "Ram", say);//one "name" parameter from greet and another function"say"
greet("Ram", sayWhat);
greet("Ram",(name)=> console.log("HI!" + name));//Arrow function

function calculate(num1, num2, callback){
    callback(num1, num2);
}

//First by making const as a compile time initialization
const addition = (num1,num2)=> console.log("Addition is:", num1+num2);
const subtraction = (num1, num2)=> console.log("Subtraction is:", num1-num2);
const mul = (num1, num2)=> console.log("Multiplication is:", num1*num2);
const div =(num1, num2)=> console.log("Division is",num1/num2);
calculate (15,10 ,addition);
calculate(15,10, subtraction);
calculate(15,10, mul);
calculate(15,10, div);

//Second by arrowed function
calculate(15,2, (num1,num2) => console.log("The addition using arrowed function is:", num1+num2));
calculate(15,2 ,(num1,num2)=>console.log("The subtraction using arrowed function is:", num1-num2));
calculate(15,2,(num1,num2)=>console.log("The multiplication using arrowed function is:", num1*num2));
calculate(15,2, (num1,num2)=> console.log("The division using arrowed function is:", num1/num2));


// calculate(10,5,(addition)=> console.log("Addition is:", num1+num2));//wrong xha
// function subtraction(num1, num2){
//     console.log("subtraction:", num1-num2);
// }
// function another(num1, num2){
//     console.log("The output:",num1-num2);
// }



const fruits = ["Apple","Peach","Mango","Banana"];
fruits.forEach(
    //callback function
    (fruit, index)=> console.log(index+1+"."+" "+fruit)
);
console.log("   ");//Spacing
fruits.forEach(
    (fruit, index)=>console.log(index+1 +"."+" "+fruit.toUpperCase())
);

const mappedFruits= fruits.map(
    (fruit)=>"Fresh" +fruit.toUpperCase()//or just +fruit
);
console.log(mappedFruits);

//ui example using arrow
const listFruits = fruits.map(
    (fruits, index)=>{
        return`<li id="${index}">${fruits}</li>`;
    }
);
console.log(listFruits);


const listFruit = fruits.map(
    (fruits, index)=>{
        return`"${index}:${fruits}"`;//"`" pull the value
    }
);
console.log(listFruit);


const filteredFruits = fruits.filter(
    (fruit)=> fruit.length>5// length is on index
);
console.log("The fruit name having length greater than 5:",filteredFruits);


//count
const countFruits = fruits.reduce(
    (count)=> count +1,// count is accumulator, fruit is current value
    0
);
console.log("Total fruits in array:",countFruits);