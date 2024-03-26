// Question No.1


// let Name = "rehan"

// console.log("Hello" ,Name," would you like to learn some Python today?")


// Question No.2

//  let personName = "John Doe"
// console.log(personName.replace(/\b\w/g,(char)=>char.toUpperCase()));
// console.log (personName.toLowerCase);
// console.log(personName.toUpperCase);


// Question No.3

// console.log("Albert Einstein once said, \"A person who never made a mistake never tried anything new.\"");

//Question No.4

// let famous_person = "Albert Einstein once said,"
// let message = "“A person who never made a mistake never tried anything new.”"
// console.log( famous_person + message);


//Question No.5

// let whitespaceName ="\n\t zobia\n\t";
// console.log(whitespaceName);
// let withoutwhitespaceName = whitespaceName.trim();
// console.log(withoutwhitespaceName);


//Question no.6
// console.log(4+4);
// console.log(10-2);
// console.log(4*2);
// console.log(16/2);


// Question No.7
// let favName  = 4;
// let message ="mine favourite no.is";
// console.log( message   +"   "  +  favName );



//Question no.8
// zobia date 3/25/24 in this program we have ask one question from user
// let Name = "rehan"

// console.log("Hello" ,Name," would you like to learn some Python today?")


//zobia date 3/25/24 in this program we have  convert person name in capital smalal and title case
//  let personName = "John Doe"
// console.log(personName.replace(/\b\w/g,(char)=>char.toUpperCase()));
// console.log (personName.toLowerCase);
// console.log(personName.toUpperCase);


//Question no. 9

// let friends = ["hamza","sara", "musfira","lala", "zraa"];
// friends.forEach(names=> console.log(names));


//Question no.10
// let namesFri = ["hamza","sara", "musfira","lala", "zraa"];
// namesFri.forEach(girlsMix=> console.log(`Hello ${girlsMix}, how are you`));

// Question No. 11

// let transprtation = ["bus", "bike", "car"," bicycle", "truck"];
// transprtation.forEach(main=> console.log(` I would like to own a  ${main}`));

// Question No.12

// let guestName = ["hamza","sara", "musfira","lala", "zraa"]
// guestName.forEach(guest=> console.log (`hello ${guest}, would you like to dinner with me`));
// Question Node. 13 

// let makeFriend = ["hamza","sara", "musfira","lala", "zraa"];
// let dontCome = makeFriend[0];
// makeFriend.splice(0 , 1,"amna");
// makeFriend.forEach(mine=>console.log (`salam ${mine},would you like dinner with me`));


//Question no.14
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

// //Question no.15
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

let countries : string[] =["china", "australia ","brazil","iran"];
console.log("original order :",countries);

console.log("alphabetical order:",[...countries.sort()]);
console.log ("still in original order:",countries);