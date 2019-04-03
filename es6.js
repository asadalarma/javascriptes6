/********************** LET **********************************/


/*
 * 1) use of let instead of var doing the same job
 */

var name = 'Max';
console.log(name);

let name2 = 'Max2';
console.log(name2);


/*
 * 2) use of let instead of var in condition statements
 *  var statement will run correctly but let give you the error
 *  Let defined in if scope it will not run outside of the scope
 */

if(true){
    var name3 = 'Max3';
}
console.log(name3);


if(true){
    let name4 = 'Max4';
}
console.log(name4);


/*
*  Let is more powerful it allow us in block scoping in offcourse in addition of es6
*   In case it will print 30 and not print 27
*   outside let is in global scope and inner let is local scope
*
 */

let age=30;
 if(true){
 let age=27;
 }
 console.log(age);



/*
 *  In below case 27 print first and 30 print afterwards
 *
 */



let age2=30;
if(true){
    let age2=27;
    console.log(age2);
}
console.log(age2);


/*
 *  In this below case 30 will be override and 27 and 29 will print
 *  Important difference is block scope
 *
 */


let age2=30;
if(true){
    let age2=27;
    console.log(age2);
}
age2=29;
console.log(age2);




/********************** CONST **********************************/

/*
*  Below example
*  It will give error constant doesnot change
*  It is not a variable
*
*/

const age =27;
age=29;
console.log(age);


/*
 *  Below example
 * Runs successfully and print 27
 *
 */

const age =27;
console.log(age);


/*
 *  Below example
 * mostly constant variables write in Upper Case
 *
 */

const AGE =27;
console.log(AGE);



/*
 *  Below example will print
 *  [27, 29, 30]
 *  [27, 29, 30, 25]
 *
 *  how const values are changed
 *  const values hold ref pointers
 *  Its not changing the values
 *  Pointer holds the values , it only changing the pointer value
 */




const AGES =[27,29,30];
console.log(AGES);
AGES.push(25);
console.log(AGES);

/*
 *  Below example will print
 *  look like this its not changing the values it only changing the object
 */

const OBJ ={
    age:27
};

console.log(OBJ);
OBJ.age=29;
console.log(OBJ);


/********* hoisting with let and const ************************/