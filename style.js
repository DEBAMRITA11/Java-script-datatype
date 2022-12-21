
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
//let item = 10+5;
//console.log(item);

//let x=15;
//x+=10; //x = x+10
//console.log(x);

//let y=20;
//y-=15;  //y=y-15; 
//console.log(y);

//let z=5;
//z*=5;   //z = z*5;
        //z = 5*5;
//console.log(z);

//let w=15;
//w/=3;   //w = w/3; 
//console.log(w);

//3.Comparison Operators:

//'==' (define equal value)
//'===' (define equal value and also datatypes)
//console.log(9==9);
//console.log(9=="9");
//console.log(9==="9"); //9 is number and "9" is string

// '!=' (Not equal)
//console.log(9 != 9);

// !== (Not equal value or not equal datatypes)
//console.log(9 !== 9);

// '>'
//console.log(9 > 10);
// "<"
//console.log(9 < 10);
//'>='
//console.log( 9 >= 9);
//'<='
//console.log( 9<=10 );

//'?' ternary operator (learn later)

//4.Logical Operators:

//'&&'(logical &)
//'!' (logical not)
// ।। (logical or)
// data && data (compare between two sides of data are true or false?) 
//let x=6;
//let y=5;
//console.log(x<9);
//console.log(y>3);
//console.log( x<9 && y>3);
//console.log ( x<4 && y>4);

//'।।' (if one condition fulfilled it will be true)
//console.log( x<9 || y>3 );

//'!' (logical not operator used to change the value result)
//console.log(x==y);
//console.log(!(x==y));

// operator precedencs: 
// B O D M A S 
// B (brackets)
// O (orders or power x2)
// D (divition)
// M (multification)
// A (addition)
// S (subtraction)
console.log((36/6)*3+2**2-(3+5));
// 6*3+2**2-8
// 6*3+4-8
// 18+4-8
// 22-8
// 14

//4. Template Literals:
//const firstName ="Amrita";
//const lastName ="Deb";
//let age = 29;
//let job = "student";
//const country = "Bangladesh";
//console.log (firstName + " " + lastName);
//console.log ("I'm Amrita Deb, 29 years old student!");
//console.log ( "I'm "+ firstName+ " "+ lastName+ ", " + age + " years old " + job + "!");
//console.log(`I'm ${firstName} ${lastName}, ${age} years old ${job}!`);
// `` it's called backtick, left quote, or an open quote, it is a punctuation mark (`) which here used as template literals to wrap up whole sentence. 
// example:
//console.log(`I love ${country}`);
//console.log (`first line
//second line
//third line
//fourth line`);

//console.log (`Bangladesh win ${2+1} series`);

//5. If/ Else statements:
//if(condition){ }
// else { }

// 'if' condition is true then if's data will show otherwise else data will show in console. 

//if (5>6){
//        console.log("5");
//} else {
//       console.log("something else!");
// }

//if (10<9) {
//       console.log('display 10');
// }  else {
//        console.log("somthing else!");
// }

let mistyAge = 6;
if (mistyAge>=6) {
        console,log('misty can start school');
} else {
        console,log("misty can't start school");
}