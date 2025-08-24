
document.querySelector("#grandparent")
.addEventListener("click", (e) => {
    console.log("Grand parent clicked!");
}, false) 

document.querySelector("#parent")
.addEventListener("click", (e) => {
    console.log("Parent clicked!");
    //e.stopPropagation();
}, false) 

document.querySelector("#child")
.addEventListener("click", (e) => {
    console.log("Child clicked!");
    e.stopPropagation();
}, false) 