let x:number = 1 ;
let y:number = 2;
const sum:number = x+y; 
const result:string  = `Sum of ${x} and ${y} is ${sum} `;
console.log(result);
const array : number[]= [1,2,3,4,5,6];
let display = array.map((a:number)=> a * a).forEach((res)=>console.log(res));

//object


let obj:{id:number , name: string} ={
    id : 1,
    name : "murali"
}

// More detail with obj
type objType ={
    id:number , 
    name: string
}

let obj1: objType={
    id : 1,
    name : "murali"
}


//type asser

let z:any = 5;
let z2 = z  as string ; // here we modify
//or
let z3 = <number>z; // both work

//function

 function Add(a:number , b: number) : number  {
    let sum= a +b ;
    return sum
 }
 
 console.log(`addtion value :${Add(13,14)}`)

 function Displaytext(a:number | string ) : void  {
    if(typeof a ==="number")  console.log(`value passed ${a} is number`)
    if(typeof a ==="string")  console.log(`value passed ${a} is string`)
 }

 Displaytext(21);
 Displaytext("april");

 //Interface

 interface IType  {
     id:number , 
    name: string,
    address? : string
 }
    

let obj121: IType = {
    id : 1,
    name : 'murali'
    
}

console.log(obj121)

//Hi