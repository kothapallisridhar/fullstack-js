setTimeout(function() {
    console.log("timer");
}, 3000);

function x(y) {
    console.log("x");
    y();
}
x(y);
function y() {
    console.log("y");
}
