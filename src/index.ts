// let num = 10;
// num = "kamal";
// console.log(num)

// cheking err : Property 'repeat' does not exist on type 'number'
let age = 40;
if(age > 40){
  console.log("yeep")
}else{
    console.log(age.repeat(3))
}
// Property 'repeat' does not exist on type 'void'
let name = "kamal";
if(name > 40){
  console.log("yeep")
}else{
    console.log(name.repeat(3))
}

// Type Annotations And Any Data Type
let myname: string = "kamal";
let myage: number = 20;
let love: boolean = true;

 // Type 'number' is not assignable to type 'string'.
 myname= 33;
// solution for the err above
 let Data: any = "hi there"
 Data = 44;


 // ts will show you and does not run the code err
function add (n1: number,n2: number){
    return n1 + n2;
}
console.log(add(1,"6"))
console.log(typeof add(1,"6"))


// set two typs into one var 
let all: number | string | boolean;
all = "kamal";
all = 20;
all = true

// Type 'number' is not assignable to type 'string'. arr

let myfriends: string[] = ["adnane","abdelhak","amine","mouad","abd rafie",12]

for (let i = 0 ; i < myfriends.length ; i++){
    console.log(myfriends[i].repeat(3))
}

// Type Annotations With Multidimensional

let arr1: string[] = ["a","b","c"];
let arr2: number[] = [1,2,3];
let arr3: boolean[] = [true,false];

let arrall:  (string | number | boolean[])[] = ["a","b","c",1,5,[true,false]]


/* Enable error reporting for expressions and declarations with an implied 'any' type. */
let msgIn = true;
/* Enable error reporting for codepaths that do not explicitly return in a function. */

 /* Raise an error when a function parameter isn't read. */
const funshowwords = (fname: string,fage: number,salary: number): string => {
     /* Enable error reporting when local variables aren't read. */
    let test = 12;
    if(msgIn){
       return `your name is ${fname} and age is ${fage} , salary `
    }
    return "no data to show";
}

console.log(funshowwords("kamal",20,20000))

// Function Optional and Default Parameters
function returndata(name: string,age: number,city?: string){
    return `${name} - ${age} - ${city}`
}
returndata("kamal",20,"safi")

