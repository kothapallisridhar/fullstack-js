const User = {
    name: "Sridhar",
    email: "sri@srk.com",
    isActive: true,
}

function createUser({name: string, isPaid: boolean}) {

}

createUser({name: "hitesh", isPaid: false})

let newUser = {name: "hitesh", isPaid: false, email: "hitesh@h.com"}

function createCourse():{name: string, price: number} {
    return {name: "reactjs", price: 399}
}

export {}