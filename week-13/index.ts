interface People {
    name: string,
    age: number,
    // greet: () => string
}

let person: People = {
name: "parbhat",
age:23,
// greet: () => {
//     return "Hi"
// }
}

class Manager implements People{
        name: string;
        age: number;
            constructor(name: string,  age: number){
                    this.name = name,
                    this.age = age
            }
}
let user = new Manager("Parbhat", 20);
console.log(user.age)