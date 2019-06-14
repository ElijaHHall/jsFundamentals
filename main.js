/* xxxxx Semi-colons xxxxx

alert('all fine now!'); there will be an error if the semi-colon is removed
[1, 2].forEach(alert); 

*/

//xxxxx variables xxxxxx

/* let message;

message = "Hello"; stores the string with data. in this case, "Hello"
alert(message); shows the variable content
 */

/*

let message = "Hello!"; a more concise version of the code above
alert(message);



let user = "John",      
    age = 25,
    message = "Hello";

    var is ALMOST the same as let


let message;

    message = "Hello!";
    message="Hewwo!! :3"; // message changed because when the value is changed, the old data is moved from the variable

    alert(message);


let hello = "hello world!"
let message;
    message = hello;

alert(hello);
alert(message);

this code copies the data from one variable to another 

xxxxx Constants xxxxx


const myBirthday = '19.05.1997'; //constants' values cant be changed and doing so would cause an error

const COLOR_RED = "#F00";
const COLOR_GREEN = "0F0";
const COLOR_BLUE = "00F";
const COLOR_ORANGE = "FF7F00";

let color = COLOR_ORANGE;
alert(color);

xxxxx Variables Practice xxxxx



let name = "John";

let admin;
    admin = "John";

alert(admin);

copied the value of the name variable to admin


let planetName = "Earth";

let currentUser = "John";



xxxx Data Types xxxx


// alert(1/0); //gives infinity
alert("not a number" * 2+5) //returns NaN

let str = "Hello";
let str2 = "single quotes are ok too"
let phrase = `can embed ${str}`
*/

let name = "Elijah"

alert(`Hello, ${name}!`); //single and double quotes do the same thing. backticks embed variables and expressions
alert(`the result is ${1+2}`);