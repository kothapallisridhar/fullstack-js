type WithName = {
    name: String
}

function printName(arg: WithName) {
    console.log(arg.name);
}

printName({name: 'John'});