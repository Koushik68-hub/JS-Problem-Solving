  console.log("Hello Everyone");


//Number EVEN or ODD using if else....
const num = 99;

if(num % 2 === 0){
    console.log(num + " is even.");
} else{
    console.log(num + " is odd.");
}

//Grade Catagory.....

const grade = 78;
let Got = "You got "

if(grade > 100 || grade < 0){
    console.log("Grade is invalid");
}
else if(grade >= 80) {
    console.log(Got + "A+");
}else if(grade >= 70) {
    console.log(Got + "A-")
}else if(grade >= 45) {
    console.log(Got + "C")
}else if(grade >= 33) {
    console.log(Got + "D")
}else {
    console.log(Got + "fail")
}

//Using  Switch statement to check the day of the week......

const day = 6;

switch(day){
    case 1:
        console.log("It's Saturday");
        break;
    case 2:
        console.log("It's Sunday");
        break
    case 3:
        console.log("It's Monday");
        break;
    case 4:
        console.log("It's Tuesday");
        break;
    case 5:
        console.log("It's Wednesday");
        break;
    case 6:
        console.log("It's Thursday");
        break;
    case 7:
        console.log("It's Friday");
        break;
}

//Comparing 2 numbers which one greater or smaller or equal.

const num1 = 20;
const num2 = 10;

if(num1 > num2){
    console.log(num1 + " is greater than " + num2)
}else if(num1 < num2){
    console.log(num2 + " is greater than " + num1)
}else{
    console.log("Both are equal");
} 

//Created a program that defines which year is the leap year.........

const year = 2028 ;

if((year % 4 == 0 && year % 100 !== 0) || (year % 400 == 0 )) {
    console.log(year + " is leap year");
} else{
    console.log(year + " is not leap year");
};

// Created a program which defines positive, negative or zero numbers........

const number = 100;

if(number > 0){
    console.log(number + " is a positive number")
} else if(number < 0){
    console.log(number + " is a negative number");
}else{
    console.log(number + " is zero");
}

//Created a program that will show if someone is 18 or older, they can vote, and if they are under 18, they cannot.........

const voteAge = 17;
const text = "You can vote";
const text2 = "Your age must be 18+ than you can vote.";

if(voteAge < 18){
    console.log(text2);
}else{
    console.log(text);
}

//Created a program that is divisible by 2 & 3........ 

const number4 = 12;

if(number4 % 2 == 0 && number4 % 3 == 0){
    console.log(number4 + " is divisible by both 2 & 3")
}else{
    console.log(number4 + " is not divisible by both 2 & 3");
}


//Created a program that finds the largest of three numbers.......

const number5 = 40;
const number6 = 40;
const number7 = 30;
const result = " is largest number."

if(number5 > number6 && number5 > number7){
    console.log(number5 + result);
}
else if(number6 > number5 && number6 > number7){
    console.log(number6 + result);
}
else{
    console.log(number7 + result);
}

//Created a program that finds the smallest of three numbers.......

const num4 = 1;
const num5 = 30;
const num6 = 20;

if(num4 < num5 && num4 < num6){
    console.log(num4 + " is the smallest number");
}else if(num5 < num4 && num5 < num6){
    console.log(num5 + " is the smallest number")
}else{
    console.log(num6 + " is the smallest number")
}

//Created a program that converts CELCIUS to FAHRENHEIT........

const celcius = 50;

Fahrenheit = (celcius * 9/5) + 32;
console.log(Fahrenheit); 


