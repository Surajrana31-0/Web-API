//.tsx is a component file
// npx ts-node filename to run the ts file
console.log("Typescript Running")
let a=4;
console.log(a)

let num: string = "Suraj"; //let variable: datatype = value;
//can not change type after declaration
//num = "Hello";
// a= "Hello";
console.log(typeof num, num);


let name: String = "Shyam";
let boolVar: boolean = true;
let anyVar: any = "CAn be any type";
let unknownVar: unknown = 10;
// console.log(anyVar, typeof anyVar);
// console.log(unknownVar, typeof unknownVar);
//any can be assigned to unknown
//but unknown can not be assigned to any without type assertion

anyVar = 123;
unknownVar = "Now I'm String";


console.log(name, typeof name);

console.log(boolVar, typeof boolVar);
console.log(anyVar, typeof anyVar);
console.log(unknownVar, typeof unknownVar);


//name = anyVar; //valid
//name = unknownVar; //invalid or error


//Array
let numberArray: number [] =[1,3,5,56,8,7,245];
//using generic
let stringArray: Array<String> = ["Apple", "Mango", "Banana", "Peach"];
let anyArry: any = [1, true, "Two"];
console.log(numberArray, stringArray, anyArry);

//Tuples
let user:  [string, number, boolean] = ["Alice", 30, false];
console.log(user[0], typeof user[0]);
console.log(user[1], typeof user[1]);
console.log(user[2], typeof user[2]);

//typescrpt function
function add(x:number, y:number){
    return x+y;
}
console.log(add(10, 52));// x and y required
const optional = (x?: number, y?:number) : number =>{
    return x+y;
}

console.log(optional());//x and y optional not invalid but return NaN
console.log(optional(50,50));


const optionalDefault = (fname:string = "Ram") =>{
    return "Hello" +fname;
}

console.log(optionalDefault());//fname default
console.log(optionalDefault("Shyam"));// fname default overridden


let fruits: string[] = ["apple", "mango", "cherry", "banana"];
// make a function that takes array of string
// if not passed default to empty array
// and return array of string with length greater than 5
// print the returned value

const filterFruits = (fruitsArray: string[] = []): string[] => {
    return fruitsArray.filter(fruit => fruit.length > 5);
}
console.log(filterFruits(fruits));