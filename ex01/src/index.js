//only change code below this line
var myPet = {
    species: "cat",
    name: "Zucko",
    legs: "4",
    friends: ["Marko", "Janko"]
}
function myFunction (myObj) {
    return myObj;
}

//only change code above this line
console.log(myFunction(myPet)); // change this line
module.exports = {myPet, myFunction};