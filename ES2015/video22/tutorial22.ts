class Person{
    name: string;
    constructor(name: string){
        this.name = name;
        console.log(this.name + "Constructor");

    }
}
let p = new Person("Atul");