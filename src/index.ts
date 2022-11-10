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


// set two types into one var 
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
// A required parameter cannot follow an optional parameter.
function returndata(name?: string,age: number,city?: string){
    return `${name} - ${age} - ${city}`
}
returndata("kamal",20,"safi")


// Function Rest Parameter
function addall (...nums: number[]): number{
    let result = 0;
    // for (let i = 0;i<nums.length ; i++){
        // result += nums[i];
    // }
    nums.forEach((nums)=> result += nums)
    return result;
}
// +true is a unary operator and it will return 1
console.log(addall(10,99,57, +true))

// data types:
// type alias

type st = string;
let theName: st = "kamal";
theName = 10;

// two types
type twot = string | number;
let hisName: twot = "brahim";
hisName = 10;


// type alias advanced
type Buttons = {
    up: string,
    right: string,
    down: string,
    left: string
}

type last = Buttons & {
    x: boolean
}

function getActions(btns: last){
    console.log(`Action for button up is ${btns.up}`)
    console.log(`Action for button right is ${btns.right}`)
    console.log(`Action for button left is ${btns.left}`)
    console.log(`Action for button down is ${btns.down}`)
}
getActions({up: "jump", right: "go right",down: "go down",left: "go left", x: true})


//  Literal Types
// it looks like you are adding ur own type into js
type nums = 0 | 1 | -1;

function compare(num1: number, num2: number): nums{
    if(num1 == num2){
        return 0;
    }else if(num1 > num2){
        return 1;
    }else{
        return -1
    }
}

compare(12,15)
compare(17,13)
compare(11,11)


// tuple 
// it does not let push new item and does not change position in the arr number should be number
let article: readonly [number, string , boolean] = [11, "article one",false];

console.log(article)
// destructuring declaration
const [id,title,published] = article;
console.log(id,title,published);

// Void And Never

// it does not return any value but it return void
function logging (msg: string): void{
    console.log(msg);
    return;
}
console.log(logging("i am a message"));
// the next line work fine
console.log("test");

const fail = (msg: string): never => {
    throw new Error(msg);
    // 'Unreachable code detected' if i am not using never 
    return 10 ;
    // Type 'number' is not assignable to type 'never'. with never
}

function alwasmyname(name: string): never{
    while(true){
        console.log("my name is", name)
    }
}

// alwasmyname("kamal");
// Unreachable code detected. because the function above hav infinite loop
// console.log(("test"));


// enums
/*
  Data Types
  - Enums => Enumerations
  --- Allow Us To Declare A Set Of Named Constants
  --- Used For Logical Grouping Collection Of Constants "Collection Of Related Values"
  --- It Organize Your Code
  --- By Default Enums Are Number-Based, First Element Is 0
  --- Theres A Numeric Enums
  --- Theres A String-Based Enums
  --- Theres Heterogeneous Enums [String + Number]
*/

const KIDS = 15;
const EASY = 9;
const MEDIUM = 6;
const HARD = 3;

enum Level {
  Kids = 15,
  Easy = 9,
  Medium = 6,
  Hard = 3
}

let lvl: string = "Easy";

if (lvl === "Easy") {
  console.log(`The Level Is ${lvl} And Number Of Seconds Is ${Level.Easy}`);
}


/*
  Data Types
  - Enums => Enumerations
  --- Enum Can Refer To Other Enum
  --- Enum Can Refer To Same Enum
  --- Enum Can Have Calculations
  --- Enum Can Have Functions
*/

function getHardSeconds() : number {
    return 3;
  }
  
  enum Kids {
    Five = 25,
    Seven = 20,
    Ten = 15
  }
  
  enum Level1 {
    Kid = Kids.Ten,
    Easy1 = 9,
    Medium1 = Easy1 - 3,
    Hard1 = getHardSeconds()
  }
  
  let lvl1: string = "Easy";
  
  if (lvl1 === "Easy") {
    console.log(`The Level Is ${lvl1} And Number Of Seconds Is ${Level1.Hard}`);
  }


  /*
  Data Types
  - Type Assertions
  --- Sometime Compiler Doesnt Know The Information We Do
  --- TypeScript Is Not Performing Any Check To Make Sure Type Assertion Is Valid
*/

// let myImg = document.getElementById("my-img") as HTMLImageElement;
let myImg = <HTMLImageElement> document.getElementById("my-img");
console.log(myImg.src);

let data: any = 1000;
console.log((data as string).repeat(3));

/*
  Data Types
  - Union And Intersection Types
  --- Union Type
  ------ The | Symbol Is Used To Create The Union => "Or"

  --- Intersection Type
  ------ Is A Type That Combines Several Types Into One
  ------ The & Symbol Is Used To Create An Intersection => "And"

  --- If A Union Is An OR, Then An Intersection Is An AND.
*/

// let all: number | string = 100;

type A = {
    one: string,
    two: number,
    three: boolean
  }
  
  type B = A & {
    four: number
  }
  
  type C = {
    five: boolean
  }
  
  type mix = A & C;
  
  function getActions1(btns: mix) {
    console.log(`Hello ${btns.one}`);
    console.log(`Hello ${btns.two}`);
    console.log(`Hello ${btns.three}`);
    console.log(`Hello ${btns.five}`);
  }
  
  getActions1({ one: "String", two: 100, three: true, five: true });

  // type annotations with object

  let myObject: {
    readonly username: string,
     userage: number,
     hire?: boolean,
     skills: {
       one: string,
       two: string
     }
    } = { 
    username: "kamal",
    userage: 20,
    skills: {
      one: "html",
      two: "js"
    }
  }

// change these values
// Cannot assign to 'username' because it is a read-only property.
myObject.username = "hamza";
myObject.userage = 19;
myObject.hire = true;


// Interface Declaration


interface User{
  id: number,
  readonly username: string,
  country?: string
}

let user: User = {
  id: 1,
  username: "kamal",
  // country: "morocco"
}

function getinfo(data: User){
  console.log(`username is ${data.username}`);
  console.log(`id is ${data.id}`);
  console.log(`country is ${data.country}`);
  
}

getinfo({id: 2,username: "kamal",country: "germany"})
