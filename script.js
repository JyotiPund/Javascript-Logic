//Shadowing
//scope
//in this test overlap the Hello 


function test(){
    let a="Hello";

    if(true){
        let a="test";
        console.log(a);
    }
    console.log(a);
}
// test();
//============================================================================================================
//imp=We can shadow var variable by using let but cannot do the opposit
//if we try to shadow let variable by using var variable is known as eligle shadowing it gives an errror like already define
// function  test1(){
//     var a="Hello";
//     let b="bye";

//     if(true){
//         let a="Hi";
//         var b="Goodbye"
//         console.log(a);
//         console.log(b)
//     }
    
// }
// test1();

//============================================================================
//===========================================================================
//var,let & const
//Declaration

//we can redeclare var variable in the same scope
// var a;
// var a

//we cannot redeclare let variable in the same scope
// let a;
// let a;

//we cannot redecalre const variable in the same scope
// const a;
// const a;

//we can do in below shadowing

// let a;
// {
//     let a;
// }

//=================================================================================
//================================================================================
//var,let,const
//Declaration without initialization

//var and let we can declare without initialization
// var a;
// let a;  

//But const we cannot declare without initialization
// const a; it will through an error

// const a=5; so put  some value while declaring it

//======================================================================================
//======================================================================================
//Re-Initialization

//We can  do Re-Initialization with var and let
// var a=6;
// a=9;

// let a=5;
// a=4;

//But we cannot do Re-Initialization with const 
// const a=7
// a=9;

//====================================================================================
//=======================================================================================

//Hoisting
//In javascript it declares function and variable at top at the creation phase
// and then execution happens and check the variable already exist during creation phase or not
// console.log(count) //we will get undefined
// var count=1;

//let and const hoisted in a temparal dead zone means they are in the scope but they are not yet declared
// console.log(conut); //we will get error cannot access before initialization
// let count=1;

//===========================================================================================
//===========================================================================================
//map,filter,reduce=These are array methods to iterate over an array
//What is map()?
//map method is used to creating new array from existing one 
//by applying the function to each one of the first element of the array
//it contains three paramets num,i,arr

// const nums=[1,2,3,4];

// const multiplythree=nums.map((num,i,arr)=>{
//     return num*3;
// })

// console.log(multiplythree);
//..................................................................................................
//what is filter()?
//filter method takes each element in an array and it applies a conditional statement aganst it
//if the condition return true the element gets push into the output array 
//if the condition returns false the element does not get pushed into output  the array
//filter returns those elements from the array which fullfills provided crateria
//itcontains three parameters num,i,arr

// const nums=[1,2,3,4];
// const morethantwo=nums.filter((num)=>{
//     return num>2;
// })

// console.log(morethantwo);

//.................................................................................................
//what is reduce()?
//reduce method reducec an array of value down to just one value 
//it reciveas two things canback fun and initial value
//it have different parameters accumulator,current value,index ,arr
//accumulator=the result of the previous computaion, if there is no initial  value, 
//it takes first element of array as value for accumulator
///curr=current  element of the array

// const nums=[1,2,3,4];

// const sum=nums.reduce((acc,curr,i,arr)=>{
//     return acc+curr;

// },0)


// console.log(sum);

//.....................................................................................................
//Polyphill for map()

//Array.map((num,i,arr)=>{})=>taking refference of this

// Array.prototype.myMap=function(cb){
// let temp=[];
// for(let i=0; i<this.length; i++){
//     temp.push(cb(this[i],i,this))
// }
// return temp;
// }

// const nums=[1,2,3,4,5];
// const multiplythree=nums.myMap((num)=>{
// return num*3
// })

// console.log(multiplythree)

//.........................................................................................................
//Polyfill for filter

// Array.prototype.myFilter=function(cb){
//     let temp=[];
//     for(let i=0; i<this.length; i++){
//         if(cb(this[i],i,this)) temp.push(this[i])
//     }
// return temp;
// }

// const nums=[1,2,3,4,5];
// const morethantwo=nums.myFilter((num)=>{
//     return num>2;
     
// })

// console.log(morethantwo);