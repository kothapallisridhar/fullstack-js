
let user = {
    name: "Sridhar",
    address: {
        personal: {
            city: "Munich",
            country: "Germany"
        },
        office: {
            city: "Stuttgart",
            country: "Germany"
        }
    }
}

let finalObj = {};

let magic = (obj, parent) => {
    for( let key in obj) {
        if(typeof obj[key] === 'object') {
            magic(obj[key], parent+"_"+key);
        } else {
            finalObj[parent + "_" + key] = obj[key]
        }
    }
}

magic(user, "user");

console.log(finalObj);