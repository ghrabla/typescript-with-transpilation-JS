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