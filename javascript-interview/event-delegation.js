// Event Delegation
// is based upon Event bubbling

document.querySelector("#category")
.addEventListener("click", (e) => {
    console.log("Category parent clicked");
    console.log(e.target.id);
    if(e.target.tagName == 'li') {
        window.location.href = "/" + e.target.id
    }
})

document.querySelector("#form").addEventListener('keyup', (e) => {
    console.log(e);
    if(e.target.dataset.uppercase != undefined) {
        e.target.value = e.target.value.toUpperCase();
    }
})