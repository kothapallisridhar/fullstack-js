function addTwo(num: number): number {
    return num + 2
}

function getUpper(val: string): string {
    return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean) {

}

signUpUser("Sridhar", "Sridhar@srk.com", true)

let loginUser = (name: string, email: string, isPaid: boolean = false) => {

}

loginUser("S", "s@s.com")

addTwo(5)
console.log(getUpper("Hello Sridhar"))

// function getValue(myVal: number) {
//     if(myVal > 5) {
//         return true
//     }
//     return "200 OK"
// }

const getHello = (s: string): string => {
    return ""
}

const heros = ['thor', 'spiderman', 'ironman']
//const heros = [1, 2, 3]

heros.map((hero): string => {
    return `hero is ${hero}`
})

function consoleError(errmsg: string): void {
    console.log(errmsg)
}

function handleError(errmsg: string): never {
    throw new Error(errmsg)
}

export {}