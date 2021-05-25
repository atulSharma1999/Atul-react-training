let firstname = "Atul";
let lastname = "Sharma";

let person = {
    firstname,
    lastname
};

function createPerson(firstname: string, lastname: string){
    let fullname = firstname + " " + lastname;
    return {firstname, lastname, fullname}
}

let p = createPerson("Shreya", "Sharma");
console.log(p.firstname);
console.log(p.lastname);
console.log(p.fullname);