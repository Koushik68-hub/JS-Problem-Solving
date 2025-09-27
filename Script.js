console.log("Hello Everyone");

// Check if a Number is Positive, Negative, or Zero

 function number(num = 20){
   if (num > 0) //true
    return `${num} The number is Positive`;
   else if(num < 0){
    return `${num} The number is Negative`;
   }
   else 
    return `${num} The number is Zero`;
}
console.log(number());  //The number is Positive

//Check if a Number is Even or Odd

function number2(num){
    if (num % 2 === 0)
        return "The number is Even." 
    else //true
        return "The number is Odd." 
}
console.log(number2(99)); //The number is Odd. 

function checkEvenOdd(num){
    return num % 2 === 0 ? "The number is Even" :"The number is Odd"
}
console.log(checkEvenOdd(680));

//Find the Largest of Three Numbers

 function numbers(num1,num2,num3){
    if(num1 > num2 && num1 > num3)
        return `${num1} is the largest number`
    else if(num2 > num1 && num2 > num3)
        return `${num2} is the largest number`
    else //true
        return `${num3} is the largest number` 
}
console.log(numbers(145,256,432));

 function numberOfThree(a,b,c){
    return Math.max(10,40,50);
}
console.log(numberOfThree()); 

//Check if a Person is an Adult

 function personAge(age){
    return age >= 18 ? "The person is Adult" : "The person is Minor"
}
console.log(personAge(17)); 

//Check if a Year is a Leap Year
 
 function leapYear(year){
    return ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) ? `${year} is leap year` : `${year} is not a leap year`
}
console.log(leapYear(2022)); 

//Find the Smaller of Two Numbers

 function smallNumber1(a,b,c){
    if(a < b && a < c)
        return `${a} is the smallest number`;
    else if(b < a && b < c)
        return `${b} is the smallest number`;
    else
        return `${c} is the smallest number`;
}
console.log(smallNumber1(2,30,40));


 function smallNumber2(a,b,c){
    return Math.min(10,20,30);
}

console.log(smallNumber2());  

//Check if a Number is Divisible by 5 and 10

 function divisibleNum(a){
    return a % 5 === 0 && a % 10 === 0 ? `${a} is divisible by 5 and 10` : `${a} is not divisible by 5 and 10`  
}
console.log(divisibleNum(22)); 

// Sum of Two Numbers

 function addTwoNum(a, b){
    return sum = 40 + 30;
}
console.log(addTwoNum()); 

//Find the Length of a String

  function strLength(name) {
    return name.length;
}
console.log(strLength("Koushik Modak"));  

//Find the First Character of a String

 function firstChar(str){
    return str.slice(0,1);
}
console.log(firstChar("Koushik"));

function firstChar2(str2){
    return str2.index();
}
console.log(firstChar("Koushik"));

function firstChar3(str3){
    return str3.charAt();
}
console.log(firstChar("Koushik"));  

//Check if an Object has a Specific Property

const obj = {
    name: "Koushik Modak",
    age: 20,
    address: "Narsingdi",
    phone: "018XXXXXXXX",
}

//Find the Square of a Number

function sqrt(num){
    return num * num;
}
console.log(sqrt(10)); 

//Reverse the Order of Words in a String

 function reverseString(str){
    return str.split("").reverse().join("");
}
console.log(reverseString("Koushik"));  

//Convert a String to Uppercase

 function uppercaseStr(str){
    return str.toUpperCase();
}
console.log(uppercaseStr("i love my country."));