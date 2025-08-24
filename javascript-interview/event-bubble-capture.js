
document.querySelector("#grandparent")
.addEventListener("click", (e) => {
    console.log("Grand parent clicked!");
    e.stopPropagation();
}, true) 

document.querySelector("#parent")
.addEventListener("click", (e) => {
    console.log("Parent clicked!");
    //e.stopPropagation();
}, true) 

document.querySelector("#child")
.addEventListener("click", (e) => {
    console.log("Child clicked!");
    //e.stopPropagation();
}, true) 