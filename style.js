//let firstName ="Asif";
//let age=33;
//console.log(firstName);
//console.log(age);

// java script has two types of data
//1. object
//2. primitive ("Asif" it's a primitive data example)

// 'primitive data' divided into seven parts...
//1. Number
//2. String
//3. Boolean
//-----------
//4. Undefined
//5. Null
//6. Symble // learn later
//7. BigInt // learn later

//Number data type:
//let age = 30.33;
//console.log(age);

//String data type:
//let firstName = "Asif 10";
//console.log(firstName);

//Boolean data type:
//let isSinger = true; 
//console.log(isSinger);

//Undefined data type:
//let homecity; 
//console.log(homecity);

//Null data type:
//let income = null;
//console.log(income);

//how to know which type of operator it is...
//console.log(age);
//console.log(typeof age);
//console.log(typeof homecity);
//console.log(typeof isSinger);


//console.log(homecity);
//homecity="Dhaka"
//console.log(homecity);

//console.log(typeof isSinger);
//isSinger="Bngladeshi Singer";

//if we search null datatype. then it will show us object data type...it's a java script bug
//console.log(typeof income);

// 'let' define our variable as like 'firstName' and 
// variables 'firstName' select a value as like "Asif".
//let firstName = "Asif";
// Beside 'let' we can also use 'const' and 'var' to define variables. 
//But we use 'let' and 'const' more because it's modern way.

//1. let (modern way)
//2. const (modern way)
//3. var (old way)

//'let':
// if we want to change or reassign any variable data later. Then we can use 'let'. 
//let myAge =33;
//console.log(myAge);
//myAge=35;
//console.log(myAge);

//'const':
//const birthYear = 1993; 
//console.log(birthYear);
//birthYear=1996;  (we can't change const variable's value or data.)

//'var': (we never use 'var')
//var job = "Teacher";
//console.log(job);  


// javascript Operators Basic :
//There are different types of JavaScript operators:

//1.Arithmetic Operators
//2.Assignment Operators
//3.Comparison Operators
//4.Logical Operators
//5.Conditional Operators
//6.Type Operators

//1.Arithmetic Operators:
// ('=.+./.*.-.**.%.++.--) those are arithmatic operators.

//console.log(18-12);
//let profit=32-23;
//console.log(profit);

//let currenYear=2022;
//let myAge = currenYear - 1993;
//console.log(myAge);

//let ronyAge = currenYear - 1985;
//console.log (ronyAge);
//console.log(myAge, ronyAge);

//let ageDiff = myAge - ronyAge;
//console.log(ageDiff);

//console.log(10+5);
//console.log(25-9);
//console.log(5*5);
//console.log(30/5);
//console.log(3**3); //(3*3*3)

//console.log(25 % 3); //(3*8=24)(25-24=1) so, quotient is 1.
// so, '%' define as quotient.

//"++" increment operator:
//let x=10;
//x++; 
//console.log(x);   //(10+1=11) 1 step increase. 

//"--" decrement operator:
//let y=20;
//y--;
//console.log(y);  //(20-1=19) 1 step decrease. 

//console.log(100 -50 + (40*20) /2);

//let firstName ='Asif';
//let lastName ="Akbar";

//console.log(firstName+ " " + lastName); 
// If we want to space in between two string " " we use space in this way. 

//2.Assignment Operators:
// =
// +=
// -=
// *=
// /=
let item = 10+5;
console.log(item);

let x=15;
x+=10; //x = x+10
console.log(x);

let y=20;
y-=15;  //y=y-15; 
console.log(y);

let z=5;
z*=5;   //z = z*5;
        //z = 5*5;
console.log(z);

let w=15;
w/=3;   //w = w/3; 
console.log(w);

