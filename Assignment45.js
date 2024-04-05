// Question No.2
// let Name = "rehan"
// console.log("Hello" ,Name," would you like to learn some Python today?")
// Question No.3
//  let personName = "John Doe"
// console.log(personName.replace(/\b\w/g,(char)=>char.toUpperCase()));
// console.log (personName.toLowerCase);
// console.log(personName.toUpperCase);
// Question No.4
// console.log("Albert Einstein once said, \"A person who never made a mistake never tried anything new.\"");
//Question No.5
// let famous_person = "Albert Einstein once said,"
// let message = "“A person who never made a mistake never tried anything new.”"
// console.log( famous_person + message);
//Question No.6
// let whitespaceName ="\n\t zobia\n\t";
// console.log(whitespaceName);
// let withoutwhitespaceName = whitespaceName.trim();
// console.log(withoutwhitespaceName);
//Question no.7
// console.log(4+4);
// console.log(10-2);
// console.log(4*2);
// console.log(16/2);
// Question No.8
// let favName  = 4;
// let message ="mine favourite no.is";
// console.log( message   +"   "  +  favName );
//Question no.9
// zobia date 3/25/24 in this program we have ask one question from user
// let Name = "rehan"
// console.log("Hello" ,Name," would you like to learn some Python today?")
//zobia date 3/25/24 in this program we have  convert person name in capital smalal and title case
//  let personName = "John Doe"
// console.log(personName.replace(/\b\w/g,(char)=>char.toUpperCase()));
// console.log (personName.toLowerCase);
// console.log(personName.toUpperCase);
//Question no. 10
// let friends = ["hamza","sara", "musfira","lala", "zraa"];
// friends.forEach(names=> console.log(names));
//Question no.11
// let namesFri = ["hamza","sara", "musfira","lala", "zraa"];
// namesFri.forEach(girlsMix=> console.log(`Hello ${girlsMix}, how are you`));
// Question No. 12
// let transprtation = ["bus", "bike", "car"," bicycle", "truck"];
// transprtation.forEach(main=> console.log(` I would like to own a  ${main}`));
// Question No.13
// let guestName = ["hamza","sara", "musfira","lala", "zraa"]
// guestName.forEach(guest=> console.log (`hello ${guest}, would you like to dinner with me`));
// Question Node. 14
// let makeFriend = ["hamza","sara", "musfira","lala", "zraa"];
// let dontCome = makeFriend[0];
// makeFriend.splice(0 , 1,"amna");
// makeFriend.forEach(mine=>console.log (`salam ${mine},would you like dinner with me`));
//Question no.15
// //creating guest list array
// let guestList = ["hamza","sara", "musfira","lala", "zraa"];
// // making variable for those guest who cant come
// let dontCome = guestList[0];
// //print the name who dont come
// console.log(dontCome,"not coming");
// //add or remove values from guest list array
// guestList.splice(0,1,"aara");
// //message print for bigger table
// console.log("Good new ! we have found a bigger table");
// //Adding a new val""ue at starting index of array
// guestList.unshift("ali");
// //Adding a new val""ue at ending index of array
// guestList.push("zain");
// //add one new guest on middle;
// let middleIndex :number = Math.floor(guestList.length /2 );
// guestList.splice( middleIndex ,0,"usama");
// console.log("updated list of guest")
// guestList.forEach(mega=>console.log(`salam ${mega }, would you like to dinner with me`));
// //Question no.16
// while (guestList.length>2){
//     let removedGuest = guestList.pop()
//     console.log(`sorry ${removedGuest}we are not allowed in dinner`);
// }
// //sending invitation for last two guest
// console.log ("invitation to the last two guest "),
// guestList.forEach(lastTwo=>console.log(`${lastTwo}, you are still invited to dinner`));
// //removing last two guest 
// guestList.pop()
//     guestList.pop()
// console.log("empty list: guest list");
//Question no.17
// let countries : string[] =["china", "australia ","brazil","iran"];
// console.log("original order :",countries);
// console.log("alphabetical order:",[...countries.sort()]);
// console.log ("still in original order:",countries);
// console.log("reverse order :", [...countries.reverse()]);
// console.log ("still in original order:",countries);
// console.log ("original array reverse", countries.reverse());
// console.log ("Back to original order", countries.reverse());
// console.log("sorted in alphabetical order", countries.sort());
// console .log("original array reverse again ",countries.reverse());
//Question No. 18
// let mineFriend = ["hamza","sara", "musfira","lala", "zraa"];
// // mineFriend.forEach(make=>console.log(`salam ${make}, would you like to dinner with me`));
// let guest :number=(mineFriend.length);
// console.log(`wev are inviting total ${guest} guest`);
//Question 20
// let placeMy: string[]=["us","uk","australia","france"];
// console.log("list of places");
// placeMy.forEach(place=>console.log(place));
//Question 21
// interface cars {
// car :string;
// model : number;
// color:string;
// price :number;
// }
// let cars = {
//     car :"toyota",
//     model:2348,
//     color:"black",
//     price:400000,
// }
// console.log(cars);
//Question 22
//creating an array
// let errorArray :string[]= ["a","b","c","d"];
// //producing error!by accessing invalid index of array
// // console.log(errorArray[10]);
// console.log(errorArray[1]);
//Question No.23
// let five = 5;
// let ten =10;
// //test 1
// console.log(`test 1 :,is five is equal to five?`);
// console.log(five==5);
// //test 2
// console.log(`test 2 : , is ten is equal to ten?`)
// console.log(ten==10)
// //test 3
// console.log ("\n test 3 :5 is not equal to 10");
// console.log(five!= 10);
// //test 4
// console.log("/n test 4: ten is greater than five");
// console.log(ten>5);
// //test 5
// console.log("/n test 5: five is smaller than ten");
// console.log(five < ten);
// //test 6
// console.log("/n test 6: 10 is smaller than 5");
// console.log(ten<five);
// //test 7
// console.log("/n test 7: 5 is equal to 10");
// console.log(five==ten);
// //test 8
// console.log("/n test 8: 10 is not equal to 10");
// console.log(ten!=ten);
// //test 9
// console.log("/n test 9: 5 is greater than 10");
// console.log(five >ten);
// //test 10
// console.log("/n test 10: 100 is smaller than 50");
// console.log(100<50);
// Question Node.24
// let name1 ="apple";
// let num =2;
// let fruit: string[] = ["apple", "banana", "orange"]
// //Tests for equality and inequality with strings
// console.log ("is num is equal tob to?");
// console.log(num==2);
// console.log("is num is not equal to 2");
// console.log(num!=2);
// //test using lower case function
// console.log("is apple is equal to apple after converting to lowercase");
// console.log(name1.toLowerCase()=="apple");
// console.log("is apple is not equal to apple after converting to lowercase");
// console.log(name1.toLowerCase()!="apple");
// console.log("is num is equal to 2");
// console.log (num == 2);
// console.log("is num is not equal to 2");
// console.log (num != 2);
// console.log("is num is greater than 1");
// console.log (num > 1);
// console.log (" is num is less than 10")
// console.log (num < 10);
// //greater than and equal to 
// console.log ("is num is grater or equal to 1");
// console.log (num >= 1);
// console.log ("is num is grater or equal to 1");
// console.log (num <= 0);
// //using and or operator
// console.log("is num is greater than 10 & num is equal 2");
// console.log (num>10 && num ==2);
// console.log("is num is greater than 10 & num is equal 2");
// console.log (num>10 || num ==2);
// //Test whether an item is in a array
// console.log("is orange include in my fruit erray?");
// console.log(fruit.includes("orange"));
// //Test whether an item is not in a array
// console.log("is papaya include in my fruit erray?");
// console.log(fruit.includes("papaya"));
//Question Node.25
// let alienColor = "Black";
// if (alienColor=== "Black"){
//     console.log("alien color is black player just earned 5 points")
// }
// if (alienColor=== "White"){
//     console.log("alien color is white")
// }
//Question no.26
// let alienColor="green"
// if(alienColor==="green"){
//     console.log("player just earned 5 points for shooting the alien")
// }
// else{
//     console.log("player just earned 10 points");
// }
// //2 version
// if(alienColor==="blue"){
//     console.log("player just earned 5 points for shooting the alien")
// }
// else{
//     console.log("player just earned 10 points");
// }
// let color = "red"
// if (color==="green"){
//     console.log("you shot dowmn green color you have earned 5 points")
// }
// else if(color==="yellow"){
//     console.log("you shot dowmn yellow color you have earned 5 points")
// }
// else if(color==="red"){
//     console.log("you shot dowmn red color you have earned 5 points")
// }
//version 2
// let color2 = "green"
// if (color2==="green"){
//     console.log("you shot dowmn green color you have earned 5 points")
// }
// else if(color2==="yellow"){
//     console.log("you shot dowmn yellow color you have earned 5 points")
// }
// else if(color2==="red"){
//     console.log("you shot dowmn red color you have earned 5 points")
// }
// //version 3
// let color3 = "yellow"
// if (color3==="green"){
//     console.log("you shot dowmn green color you have earned 5 points")
// }
// else if(color3==="yellow"){
//     console.log("you shot dowmn yellow color you have earned 5 points")
// }
// else if(color3==="red"){
//     console.log("you shot dowmn red color you have earned 5 points")
// }
//Question no.28
// let age = 22;
// if (age< 2){
//     console.log("the person is a baby");
// }
// else if (age>=2 && age < 4 ){
//     console.log("you are a toddler")
// }
// else if (age>=4 && age < 13 ){
//     console.log("you are a kid")
// }
// else if (age>=13 && age < 20 ){
//     console.log("you are a teenager")
// }
// else if (age>=20 && age < 65){
//     console.log("you are a adult")
// }
// else if (age>=65){
//     console.log("you are a elder")
// }
//Question no.29
// let fruit: string[] = ["apple", "banana", "orange"];
// if (fruit.includes("mango")){
//     console.log("i really like mango")
// }
// if (fruit.includes("banana")){
//     console.log("i really like banana")
// }
// if (fruit.includes("grapes")){
//     console.log("i really like  grapes")
// }
// if (fruit.includes("apple")){
//     console.log("i really like apple")
// }
// if (fruit.includes("watermelon")){
//     console.log("i really like watermelon")
// }
//Question 30:
// creating an erray
// let username :string[]=["hamza", "admin","raja","osama"];
// username.forEach(myName=>{
//     if (myName === "admin"){
//         console.log(`hello ${myName}would you like to see a status report?`)
//     }
//     else{
//         console.log(`hello${myName}, thankyou for logging in again`)
//     }
// })
//Question 31:
// let userMake :string[]=[];
// if (userMake.length===0){
//     console.log("your erray is empty we need to find some users");
// }else{
//     userMake.forEach(myMame=>{
//             if (myMame === "admin"){
//                 console.log(`hello ${myMame}would you like to see a status report?`)
//              }
//         else{
//                 console.log(`hello${myMame}, thankyou for logging in again`)
//             }
//          })
//}
//Question no.32
//current user
// let currentUser:string[]=["hamza","osama","moiz","muzammil","farhan"];
// let newUser:string[]=["hamza","osama","abdullah","sami","sara"];
// newUser.forEach(newoneUser=>{
// let condition = currentUser.some(currentUser1=>currentUser1.toLocaleUpperCase() === newoneUser.toLocaleLowerCase());
// if(condition){
//     console.log(`sorry ${newoneUser}is already taken`);
//     }
//     else{
//         console.log(`this ${newoneUser}is available`)
//     }
// }
// )
//Question no. 33
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
number.forEach(function (number1) {
    var ordinalNumber;
    if (number1 === 1) {
        ordinalNumber = "st";
    }
    else if (number1 === 2) {
        ordinalNumber = "nd";
    }
    else if (number1 === 3) {
        ordinalNumber = "rd";
    }
    else {
        ordinalNumber = "th";
    }
    console.log("".concat(number1).concat(ordinalNumber));
});
//Question no.34
var pizza = ["chickentikka", "malaifajita", "cheese"];
for (var _i = 0, pizza_1 = pizza; _i < pizza_1.length; _i++) {
    var pizza1 = pizza_1[_i];
    console.log("i like ".concat(pizza1, "pizza"));
}
console.log("pizza is love");
console.log("i eat pizza");
//Question no.35;
var animal = ["cat", "dog", "rabbit"];
for (var _a = 0, animal_1 = animal; _a < animal_1.length; _a++) {
    var pet = animal_1[_a];
    console.log("a ".concat(pet, " would make a great pet"));
}
//print a msg out of the for bloop
console.log("Any of these animals would make a great pet!");
//Question no.36
// function shirt( size:string,printmessage:string){
//     console.log(`you selected ${size}size shirt wih ${printmessage}prints on shirt`)
// }
// shirt("large","mera pakistan");
//Question no. 37;
// function shirtName( size:string = "large", printMessage:string ="I love TypeScript."){
//     console.log(`you selected ${size},size shirt wih ${printMessage},prints on shirt`)
// }
// shirtName();
// // shirt of any size with different message
// shirtName("medium","this shirt is beautiful")
//Question no.38
function describe_city(city, country) {
    if (country === void 0) { country = "pakistan"; }
    console.log("".concat(city, ",is in ").concat(country));
}
describe_city("karachi");
describe_city("lahore");
describe_city("london", "uk");
//Question no.39
var city_country = function (city, country) {
    return "".concat(city, ",").concat(country);
};
console.log(city_country("karachi", "pakistan"));
console.log(city_country("uk", "london"));
console.log(city_country("tokoyo", "japan"));
function makeAlbum(artistName, albumTitle, numTracks) {
    var album = { artist: artistName, title: albumTitle };
    if (numTracks !== undefined) {
        album.tracks = numTracks;
    }
    return album;
}
// Creating three objects representing different albums
var album1 = makeAlbum('Artist 1', 'Album 1');
var album2 = makeAlbum('Artist 2', 'Album 2');
var album3 = makeAlbum('Artist 3', 'Album 3', 12);
// Printing each object to show that they store the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);
//question no.41
// function show_magician (magicians:string[]){
//     magicians.forEach(name=>console.log(`${name}`))
// };
// let magiciansName=["nadia", "harry","naira"];
// show_magician(magiciansName);
//Question no.42
// function showMagicians(magicians: string[]): void {
//     console.log("List of Magicians:");
//     magicians.forEach(magician => {
//         console.log("- " + magician);
//     });
// }
// function makeGreat(magicians: string[]): void {
//     for (let i = 0; i < magicians.length; i++) {
//         magicians[i] += " the Great";
//     }
// }
// // Initial list of magicians
// let magicians: string[] = ['Harry Houdini', 'David Copperfield', 'Penn Jillette'];
// // Show the initial list of magicians
// showMagicians(magicians);
// // Modify the list of magicians to include 'the Great'
// makeGreat(magicians);
// // Show the modified list of magicians
// showMagicians(magicians);
// //
//Question no.43
function showMagicians(magicians) {
    console.log("List of Magicians:");
    magicians.forEach(function (magician) {
        console.log("- " + magician);
    });
}
function makeGreat(magicians) {
    // Create a copy of the magicians array
    var newMagicians = magicians.slice();
    // Modify the copy to include 'the Great'
    for (var i = 0; i < newMagicians.length; i++) {
        newMagicians[i] += " the Great";
    }
    // Return the modified array
    return newMagicians;
}
// Initial list of magicians
var magicians = ['Harry Houdini', 'David Copperfield', 'Penn Jillette'];
// Create a copy of the array with 'the Great' added to each magician's name
var greatMagicians = makeGreat(magicians);
// Show the original list of magicians
console.log("Original list of magicians:");
showMagicians(magicians);
// Show the modified list of magicians
console.log("\nModified list of magicians:");
showMagicians(greatMagicians);
//Question no.44
function makeSandwich() {
    var ingredients = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ingredients[_i] = arguments[_i];
    }
    console.log("Making a sandwich with the following ingredients:");
    ingredients.forEach(function (ingredient) {
        console.log("- " + ingredient);
    });
    console.log("Enjoy your sandwich!");
}
// Call the function three times with different numbers of arguments
makeSandwich('Ham', 'Cheese', 'Lettuce', 'Tomato');
makeSandwich('Turkey', 'Swiss cheese', 'Bacon');
makeSandwich('Peanut butter', 'Jelly');

//question 45
function createCar(manufacturer, model) {
    var additionalInfo = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        additionalInfo[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    // Add additional key-value pairs to the car object
    additionalInfo.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        car[key] = value;
    });
    return car;
}
// Call the function with required information and additional key-value pairs
var myCar = createCar('Toyota', 'Camry', ['color', 'red'], ['year', 2022]);
// Print the object to make sure all the information was stored correctly
console.log(myCar);
