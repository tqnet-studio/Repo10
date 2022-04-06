//only change code below this line
var myClothes = {
    hat: "Fedora",
    shirt: "Nike",
    shoes: "Converse"
}
function myFunction(myObj){
    var hatValue = myClothes.hat;
    var shirtValue = myClothes.shirt;
    var shoesValue = myClothes.shoes;
    return{
        hatValue, shirtValue, shoesValue
    };
}

//only change code above this line
console.log(myFunction(myClothes)); // change this line
module.exports = myFunction(myClothes);