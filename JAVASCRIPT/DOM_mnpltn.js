let name = document.getElementById("name");
let hobby = document.getElementById("hobby");
let color = document.getElementById("color");
let button = document.getElementById("Update");
let button1 = document.getElementById("Reset");

button.addEventListener("click", () => {
    name.textContent = "Name: " + prompt("Enter your name:");
    hobby.textContent = "Hobby: " + prompt("Enter your hobby:");
    color.textContent = "Favorite Color: " + prompt("Enter your favorite color:");
    document.body.style.backgroundColor = color.textContent.split(": ")[1];
    // document.body.style.color ="white";
    

});

button1.addEventListener("click",() =>{
    name.textContent ="Name:";
    hobby.textContent ="Hobby:";        
    color.textContent ="Favorite Color:";
    document.body.style.backgroundColor = "white";


});

const storedName = localStorage.getItem("name");
const storedHobby = localStorage.getItem("hobby");
const storedColor = localStorage.getItem("color");

if (storedName) name.textContent = storedName;
if (storedHobby) hobby.textContent = storedHobby;
if (storedColor) color.textContent = storedColor;

// Save data
localStorage.setItem("name", name.textContent);
localStorage.setItem("hobby", hobby.textContent);
localStorage.setItem("color", color.textContent);

// document.body.style.backgroundColor = color.textContent.split(": ")[1];
// document.body.style.color ="white";


