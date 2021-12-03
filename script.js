/*const age = 18
if (age >= 18) {
    console.log("the citizen can vote");
} else {
    console.log("the citizen cannot vote");
}
if (age >=21) {
    console.log("citizen can drink");
} else {
    console.log("citizen can not drink");
}

const box = document.getElementById("box");
box.innerText="change to this";

let person1 = {
    "name": "israel", "age": "21", "sex": "male", "hobbies": ["football", "coding","music"]

}
let person2 = {
    "name": "eli", "age": "15", "sex": "female", "hobbies":["tik-tok","singing","fashion"]
}

function multiply(num1, num2, num3) {
    const total = num1*num2*num3
    return total
    
}

function welcome(name) {
    return `Hello there ${name}`;

}
israel = welcome("israel")
window.onload = function () {
    alert ("The page is loaded");
}*/

/*window.onbeforeunload = function () {
console.log("before unload ") ;
return "You are leaving the site!";
}
const names = ["john", "mary", "esther", "debs", "mark"]
for (const name of names) {
    console.log(name)
    
}

function addnumbers (username,...numbers) {
    let total = 0;
    for (index in numbers) {
        total = total + numbers [index];      
        }
        return `${username}: total is ${total}`;
    }

    sum = addnumbers ("israel", 1,2,3,5,6,8,6,9);
    console.log(sum);*/

   /* "use strict";
    var x = "i want a macbook"
    x = "u cant have a macbook"

    let count = 0
    console.log("Welcome to intervals")
    const Thisinterval = setInterval(function(){
        console.log("checking something......")
        count ++;

        if ( count === 10){
            console.log("End of interval")
            clearInterval(Thisinterval)
        }
    },3000)*/

    while (true){
        let favoriteSeries = prompt("Which sitcom series do i consider the greatest series of all time");
        if (favoriteSeries === "the office"){
            alert("congratatulations, you guessed right")
            break;
        }
        console.log("wrong name try again")
    }