// 1. Write a JavaScript for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is odd or even, and display a message in the terminal.
for (let i = 0; i <= 20; i++) {
    if (i === 0) {
        console.log(i + " is Even");
    }
    else if (i % 2 === 0) {
        console.log(i + " is Even");
    }
    else {
        console.log(i + " is Odd");
    }
}


// 2.Write a program that demonstrates global variables by creating a function, add(), that accesses the values of two global variables and returns the sum of these variables.
let a = 1;
let b = 2;
let sum = () => {
  return a + b;
}
console.log(sum());


// 3. Write a JavaScript program to sum the multiples of 3 and 5 under 1000 using loops and functions concept.
function Add(x,y)
{
    var sum =0;
    let number;
    for(number = 0; number <1000 ; number++){
    if(number % x=== 0 || number % y === 0)
    {
        sum = sum + number
    }
}
console.log(sum);
}
Add(3,5);

//4. Explore the startswith, endswith and includes function of a string.

let str = "This is Shivam panwar"
console.log(str.startsWith("This"))
console.log(str.endsWith("panwar"))

// 5. Display the number amount from the below sentence 👇
// "This house is sold for 2500000 this morning"

let str = "This house is sold for 2500000 this morning"
for (let i = 0; i < str.length; i++) {
    if (str[i] >= '0' && str[i] <= '9') {
        console.log(str[i]);
    }
}
console.log(str.length);


// 6.Try to change the 5th character in a given string 👉 "abcdefgh". Were you able to change it ?

let str = "abcdefgh";
console.log(str.replace('f',"S"));


// 7. Is the length of the escape sequence character counts when we counts the length of entire string? ( for example "abc\t" what will be the length of the given string ).
let str = "This is Shi\tvam"
console.log(str)

// 8. Explore why to use Array.from function and try to use it .
let arrFrom = 'Shivam';
let Ary = (Array.from(i));
console.log(Ary);

// 9.Add the values in the array when the user inputs at the run time.
// Please download npm package "npm i prompt-sync"
const prompt = require ("prompt-sync")({sigint:true});
let pArr = [5];
for(let i=0;i<5;i++)
{
    pArr[i]=prompt("Please enter the value upto 5 : ",+(i+1));
}
console.log(pArr);


// 10.If the array contains 0 , you need to delete it from the array else you need to push 3 different elements in the given array.


// 11. From the  array, display the multiples of 3 and display the values in new array?

let Arr = [1,2,3,4,5,6,7,8,9,10];
let arr = [];
for (let i = 0; i < Arr.length; i++) {
    if (Arr[i] % 3 === 0) {
        arr[i] = Arr[i];
    }
}
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// 12. Create an array of cube of 5 different numbers?
let Arr = [1, 2, 3, 4, 5];
for (var i = 0; i < Arr.length; i++) {
    Arr[i] = Arr[i] * Arr[i] * Arr[i];
}
console.log(Arr);


// 13. Use the array reduce function to calculate the height of a right angle triangle.

