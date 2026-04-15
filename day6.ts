//complex data type
const var1: String = "Hello";
//union "|"
let var2: string | number = 5;
console.log(var2);
var2 = "Hello";
console.log(var2);

//object defined deceleration
let user: {
    name:String;
    age:number;
    desc?:string //nullable
} = {
    name: "Alice",
    age: 30
}
console.log(user);


//using type
type ProductType = {
    id : number;
    price :number;
} 
const p1: ProductType = {
    id: 1,
    price: 10025.25
}

console.log(p1);


//using interface
interface UserInterface{
    name: string;
    age: number;
    isActive? : boolean;
}

const stu1 : UserInterface = {
    name:"Suraj",
    age: 22,
    isActive:true
}

console.log(stu1);


//class and object

class UserClass {
    private name? : String;
    age? : number;
    constructor(name:string = "Default", age: number = 0 ){
        this.name = name;
        this.age = age;
    }

}

const user2: UserClass = new UserClass("Shyam");
console.log(user2,user2.age);//for user2.name or age variable must be public



//inheritance
class Employee extends UserClass {
    empId: number;
    constructor(name:string, age:number,empId:number){
        super(name, age);
        this.empId = empId;
    }
}

const emp1: Employee = new Employee("Alice", 22, 101);
console.log(emp1);


//pollymorphism
const emp2: UserClass = new Employee("Boby",25, 102);
console.log(emp2);


//Abstraction
interface IsShape{
    area():number;

}
class Circle implements IsShape {
    radius:number;
    constructor(radius:number){
        this.radius = radius;
    }
    area(): number {
        return Math.PI * this.radius *this.radius;
    }
}







type ComplexDataType  = {
    user: Employee;
    details:UserInterface,
    product:ProductType
    circle: Circle
}

let data: ComplexDataType = {
    user: new Employee("Charlie", 35, 103),
    details: {
        name: "David",
        age:25,
        isActive:true
    },
    product: {
        id: 105,
        price:2000.23
    },
    circle: new Circle(2)
    

}
console.log(data);



type UDetails = {
    name:string
 }
type UInfo = {
    age:number
}
type DType = UDetails | UInfo//intersection either
let d1: DType = {name:"Emonual"}
let d2: DType = {age:25}
console.log(d2)//console.log(d1,d2)


type IType = UDetails&UInfo//interdection both
let it1 : IType = {name:"Frank", age:45}
console.log(it1)



//generic function -type injection
function identify<T>(arg:T): T {
    //T is placeholder
    return arg;
}

const id1: number = identify<number>(5);
const id2 : string  = identify<string>("Hello");
console.log(id1, id2);

interface IAPIResponse <T>{
    status:number;
    data:T;
    success:boolean;
}
type UserData = {id:number, name:string}
type ProductData = {id: number, price: number}

const response1 : IAPIResponse<UserData> = {
    status: 200,
    data:{ id:105, name:"Alice"},
    success: true
}
console.log(response1);
const response2: IAPIResponse<ProductData> = {
    status:404,
    data:{id:106, price:52300},
    success: true
}

console.log(response2);

type GeneralType = {
    id: number,
    createdAt: Date,
    title: String,
    active?:boolean
}

type PartialType = Partial<GeneralType>; //all properties optional
type RequiredType = Required<GeneralType>; //all properties required
type ReadonlyType = Readonly<GeneralType>; 
type PickType = Pick<GeneralType, "id" |"title"> //only id and title
type OmitType = Omit<GeneralType, "CreatedAt">; //all except createdAt

const partialObj:PartialType = {};
const pickObj:PickType={id:1, title:"Unknown"};
// const omitObj:OmitType={createdAt:"2070-20-2"}
// const requireObj:ReadonlyType{id:101, title :"Known", active:true,createdAt:};


const userData: 
    Partial<Omit<GeneralType,"createdAt">> | Required<Pick<GeneralType, "title" | "active">>
={
    title:"Known",
    active:true
}
console.log(userData);

const userData2:
Pick<GeneralType,"title"|"id"> & {type:string} &{empId:string |number}
={
    title:"Suraj",
    id: 101,
    type:"Class",
    empId:100
}
console.log(userData2);