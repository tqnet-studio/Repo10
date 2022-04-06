//only change code below this line
var myFood = {
    vegetable: "carrot",
    fruit: "orange",
    drink: "water"
};
function myFunction(myObj){
    var vegetableValue = myObj["vegetable"];
    var fruitValue = myObj["fruit"];
    var drinkValue = myObj["drink"];
    return{
       vegetableValue, fruitValue, drinkValue
    };
}

//only change code above this line
console.log(myFunction(myFood)); // change this line
module.exports = myFunction(myFood);