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


