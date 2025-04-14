// if conditions

// let age = 20
// if(age > 65){
//    console.log("you're too old to drive") 
// }else if(age > 18 && age < 65){
//     console.log("you can drive")
// }else{
//     console.log("you can't drive")
// }

// let note = 4
// if(note >= 10){
//     console.log(Validate)
// }else if(note >= 5 && note < 10){
//     console.log("Ratrrapage")
// }else if(not >= 1 && note < 5){
//     console.log("Not validated!")
// }else{
//     console.log("Eliminated")
// }

//Switch
let day = "Sunday"

switch(day){
    case "Sunday":
    case "Saturday":
        console.log("It's a weekend")
        break;
    default:
        console.log("It's a weekDay")
        break;
}

//Turnary operator
let age = 20
//? => true if
//: => false else
age > 65 ? console.log("you're too old to drive") : age > 18 && age < 65 ? 
console.log("you can drive") : console.log("you can drive")