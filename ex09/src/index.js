function myFunction(myObj, checkProp){
        //only change code below this line
if(myObj.hasOwnProperty(checkProp)){
    return myObj[checkProp];
}
    return "Not Found"; 
}
{
console.log(myFunction({title: "Titanic", song: "My Heart Will Go On", genre: "drama"}, "title"));
console.log(myFunction({title: "Titanic", song: "My Heart Will Go On", genre: "drama"}, "song"));
console.log(myFunction({title: "Titanic", song: "My Heart Will Go On", genre: "drama"}, "genre"));
console.log(myFunction({title: "Titanic", song: "My Heart Will Go On", genre: "drama"}, "actor"));
    //only change code above this line
}
module.exports = myFunction;