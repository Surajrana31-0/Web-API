//CRUD
let arr1 = [1,52,63,45]
//spread operator"...""
let arr2 = [4,5,6,8,4]
let arr3 = [52,58,43,5,9]
let arr4 = [arr1,arr2]
let arrRe = [...arr1,...arr2] //unpack and make new array
console.log(arr4)//stored in list also as a list of array
console.log(arrRe)


let arr5 = [...arr1, 5, 78, 69]//treates as a new list of array
console.log(arr5)


//distruct spread
const [num1, num2, num3,...rest] = arr5;
console.log(num1,num2,num3, rest)//alligned in the index of previous array5

//spread inn object
let obj1 = {name:"Shyam", age:22}
obj1 = {...obj1, grade:"A", lastname:"Bahadur",...{isActive:true}}
console.log(obj1)

// const {o1,o2, ...rests } = obj1
// console.log(o1,o2,rests)

let student = [
    {id: 1 , name:"Hari", grade:10},
    {id: 2 , name:"Shyam", grade:20},
    {id: 3 , name:"Ram", grade:30},
    {id: 4 , name:"Rohit", grade:40}
]

student.push({id: 5 , name:"Raj", grade:70})
student = [...student, {id: 6 , name:"Gita", grade:90}]
console.log(student)
//update =>find and upddate
let find = student.find(s=>s.id == 2)
//if not found it wil be undefined
find.name = "Sahaam Bahadur"
console.log(student)


//update by index
let FoundIndex = student.findIndex(s=> s.id === 3)//if idex is not find it will return -1
student[FoundIndex].grade = 85 
console.log(student)

//delete
student.splice(
    FoundIndex,
    1,
)

console.log(student)
student.splice(
    0, //where to start
    2 //how many to delete
)

console.log(student)

