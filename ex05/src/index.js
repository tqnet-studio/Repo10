//Create school object here
var school = {
    name: "Arena",
    location: "Sarajevo",
    established : "2020"
}
//end of school object

//create a function below this line
function myFunction(name){
    school.name = name;
    return school;
}
console.log(myFunction("Paragon"));

//end of function
module.exports = {school, myFunction};