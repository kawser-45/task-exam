// 1.

let name = "John";
let age = 25;
console.log(`My name is ${'name'} and I am ${age} years old.`);


// 2=
let num = 7;
if (num % 2 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}

// 3
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// 4
function addNumbers(a, b) {
    return a + b;
}
let result = addNumbers(3, 7);
console.log(result);

// 5.
let fruits = ["apple", "banana", "cherry"];
fruits.push("orange");
console.log("First fruit:", fruits[0]);
console.log("Total number of fruits:", fruits.length);

// 6. ----
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(number => {
    console.log(number * 2);
});

// 7====



const h1Element = document.querySelector("h1");
const button = document.getElementById("changeText");
button.addEventListener("click", () => {
    h1Element.textContent = "You clicked the button!";
});

// 8. 
let text = "hello world";
console.log(text.toUpperCase());

// 9. 
const person = {
    name: "Alice",
    age: 30,
    greet: function () {
       ` return Hello, my name is ${this.name}.`;
    }
};
console.log(person.greet());
