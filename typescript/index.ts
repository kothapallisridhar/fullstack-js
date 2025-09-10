let firstName = "SaiSarath";

//firstName = '';

const json = JSON.parse("55");
console.log(typeof json);

console.log(firstName);

let userName: any = "Deiter";
userName = 3;

let otherName: unknown;
let secondName: unknown;
otherName = 'Klaas';
//let sec = secondName as String;
let sec = <string>secondName;
sec = "Jane";

sec = "Stephane";
//otherName = 2;
//otherName = true; 

let x:never;

let w:undefined;
let y:undefined=undefined;
let z = y as unknown as any;
z = 3;

let n:null = null;

// arrays

const names:string[] = ["Klaas", "Lene", "Jane", "Kene"];

const morenames: readonly string[] = ["Kothapalli", "Sridhar"];
//morenames.push("Sridhar");

// tuple
// datatypes to be defined, length is fixed
let ourTuple: [numType:number, boolType:boolean, strType:string];
ourTuple = [3, true, "Codepro"];
console.log(ourTuple)

const [num, bool, str] = ourTuple;
console.log("destructured values: ", num, bool, str);

console.log(ourTuple)

//ourTuple.push("something"); // works without readonly
console.log(ourTuple);

console.log(names[0]);

// object type

// let car:{make:string, model:string, year:number} = {
//     make: 'Lamborghini',
//     model: 'Urus',
//     year: 2025,
// }

const car: { make: string, mileage?: number } = {
    make: 'Ferrari',
}

car.mileage = 7;

const nameAgeMap: {[index:string]: number} = {}

nameAgeMap.Jack = 25;

// enum
enum CardinalDirections {
    North = 1,
    East,
    South,
    West,
}

console.log('North', CardinalDirections.North)
console.log('East', CardinalDirections.East)
console.log('South', CardinalDirections.South)
console.log('West', CardinalDirections.West)

let currentDirection = CardinalDirections.North;
console.log(currentDirection);

enum StatusCodes {
    NotFound = 404, // '404' , 'some string' also accepted
    Success = 200,
    Accepted = 202,
    BadRequest = 400,
}

type Name = string; // type alias
type Id = number;
let sume: Name = 'Sunil'; 

type CarYear = number;
type CarModel = string;
type CarMake = string;

type Car = {
    year: CarYear,
    make: CarMake,
    mode: CarModel,
}

const carYear: CarYear = 2025;
const carMake: CarMake = 'Porsche';
const carModel: CarModel = 'Panamera';

const car2: Car = {
    year: carYear,
    make: carMake,
    mode: carModel,
};

interface Rectangle {
    height: number,
    width: number,
}

interface ColoredRectangle extends Rectangle {
    color: string,
}

const rectangle:ColoredRectangle = {
    height: 20,
    width: 10,
    color: 'golden',
}

let status:string|number = 404; // union 
status = "client error"; // union. either string or number type can be assigned

function getTime():number {
    return new Date().getTime();
}

console.log(getTime());

function multiply(a: number, b: number, c?: number):number {
    return a * b * (c||1);
}

console.log(multiply(3,5));

function divide({dividend, divisor}: {dividend:number, divisor: number}) {
    return dividend/divisor;
}

console.log(divide({dividend:10,divisor: 2}));

function add(a:number, b:number, ...rest: number[]) {
    console.log(rest);
    return a + b + rest.reduce((p, c) => p + c, 0); 
}

console.log(add(1,2,3,4,5,6,7));

class Person {
   protected name: string = '';
   protected id: string = '';
   private age: number = 0;
   public constructor(name: string) {
    this.name = name;
   }
   public getName(): string {
    return this.name;
   }
}

const person = new Person('Jane');
//person.name = 'Lene';
//person.age = 10;
console.log(person);
console.log(person.getName());

class Employee extends Person {
    constructor(name: string, public jobTitle: string) {
        super(name);
    }
    public getDetails(): string {
        return `${this.name} is a ${this.jobTitle}`;
    }
}

const employee = new Employee("Bob", "Developer");
console.log(employee.getDetails());
//console.log(person.name);
console.log(employee.getName());

// generics
function ty<T, S>(item: T, another: S): T {
    return item;
}

console.log(ty<string, number>("Sridhar", 10));

interface Person {
    namePerson: string;
    agePerson: number;
    address: string;
}

type PersonKeys = string | number | string