function seq() {
    for(var i = 1; i<=5; i++) {
        setTimeout(function printNum() {
           console.log(i);     
        }, i * 1000);
    }
}

seq();