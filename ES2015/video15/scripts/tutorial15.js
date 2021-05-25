var firstname = "Atul";
var lastname = "Sharma";
var person = {
    firstname: firstname,
    lastname: lastname
};
function createPerson(firstname, lastname) {
    var fullname = firstname + " " + lastname;
    return { firstname: firstname, lastname: lastname, fullname: fullname };
}
var p = createPerson("Shreya", "Sharma");
console.log(p.firstname);
console.log(p.lastname);
console.log(p.fullname);
//# sourceMappingURL=tutorial15.js.map