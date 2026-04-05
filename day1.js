//types of variale is javascript
// cost , let, var 

const nmae = "SUraj";// const is a block scoped and can not be re assigned
let age = 23;
age =  31;
var isActive = true; //var is function scope and can be re assigned
var isActive = false;


console.log(city); //var can 

// scoped variable
if (true){
    const lName = "Rana";
    let fName = "Ram";
    var city = "Kathmandu";
    console.log(lName);
    console.log(fName);
    

}
console.log(city);


//Data type commonly used
let stringVar = "Hellow world";
let numberVar = 25;
let longNeumberVAr = 98266n;
let booleanVar  = true;
let nullVar = null;
let undefinedVar ;
//Undefined
let symbolVar = Symbol('unique');
let symbolVar2 = Symbol('unique')




console.log(stringVar, typeof stringVar);

console.log(numberVar, typeof numberVar);
console.log(longNeumberVAr  ,typeof longNeumberVAr);
console.log(booleanVar , typeof booleanVar);
console.log(nullVar, typeof nullVar);

console.log(undefinedVar ,typeof undefinedVar);
console.log(symbolVar , typeof symbolVar);
console.log(symbolVar == symbolVar2);


// if else if else 
let score = 25;
if (score>90){
    console.log('grase A');
} else if(score>=80){
    console.log('Grade B');
}else if (score>=70){
    console.log('Grade c');
}else {
    console.log('Grade F');
}



//ternary operator
let day = 4;
switch(day){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break
    default:
        console.log("Holiday");
}


let num1 = 10;
let num2 = "56";

console.log(num1==num2);
console.log(num1===num2);//compares both datatype and values


const array = ["mango", "Apple","Banana", "Pinapple","Orange"];
console.log(1);
array.push("Onion");//Add at the end
array.unshift("Guava");// Add at first
console.log(array);



//Iterative array
for(let  i= 0; i<array.length;i++){
    console.log(array[4]);
}

// for of loop[iterate/value]
for(const fruites of array){
    console.log(fruites);
}

//for in loop[iterate index/key]
for(const index in array){
    console.log(array[index]);
}



//object
//JSON-> JAvascript object notation
//[Key:value pair key is string , vallue can be any data type]
const person1 ={
    firstName: "Suraj",
    lastName:"Rana",
    // Address:"KAthmandu", or
    Address:{city:"Kathmandu",
        country:"Nepal"
    },
    "Age":22,
    isStudent:true,
    hobies:["Playing","Traveling"],

}

console.log(person1);
console.log(person1.firstName);//notation
console.log(person1["lastName"]);//[]
console.log(person1.hobies[0]);
console.log(person1.Address.city);


person1.name = "Shyam"//objects are mutable 
//person1 = {}//can not be re assigned

console.log(person1.details);//cos not defined so unintensionally null
// console.log(person1.details.city);//exception system crashed

console.log(person1.city);//undefined



// nullable
console.log(person1.details ?? "Details not find");//Fall back value can be assigned
// console.log(person1.details.city?? "city not found");// error: can't read the properties of undefined 
// console.log(person1.details?.city?? "city not found");// error: can't read the properties of undefined 

//create array of student
const student1 = {
    name: "Ram",
    age: 20,
    score :85
} 
const student2 = {
    name: "Shyam",
    age:56,
    score :56
}

// create  array of students and add student1 and student2 to it
//loop students and print the name of students who scored below 40
console.log(student1);
