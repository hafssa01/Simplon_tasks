//Ex1:
let number = 5
if(number > 0){
    console.log("Positive")
}
// number > 0 ? console.log("Positive")
//Ex2:
let num = 7
if(num % 2 == 0){
    console.log("Even")
}else{
    console.log("Odd")
}
// num % 2 == 0 ? console.log("Even") : console.log("Odd")
//Ex3:
let a = 10
let b = 30
if(a > b){
    console.log("a")
}else{
    console.log("b")
}
// a > b ? console.log("a") : a < b ? console.log("b") : console.log("a = b")
//Ex4:
let temp = 60
if(temp > 30){
    console.log("Hot")
}else if(temp > 30 && temp < 15){
    console.log("Warm")
}else{
    console.log("Cold")
}
//Ex5:
let password = "letmein"
if(password == "letmein"){
    console.log("Access Granted")
}else{
    console.log("Access Denied")
}
//Ex6:
let day = 2
switch(day){
    case 1:
        console.log("Monday")
    case 2:
        console.log("Tuesday") 
}
//Ex7:
let age = 15
if(age < 13){
    console.log("Child")
}else if(age < 13 && age > 18){
    console.log("Teen")
}else{
    console.log("Adult")
}
//Ex8:
let light = "red"
switch(light){
    case "red":
        console.log("stop")
        break
    case "yellow":
        console.log("slow down")
        break
    case "green":
        console.log("go")
        break
    default:
        console.log("Invalid light color")
}
//Ex9:
let year = 2024
if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
    console.log("Leap year")
}else{
    console.log("not a leap year!")
}
//Ex10:
let agee = 18
agee >= 18 ? console.log("Can drive") : console.log("Cannot drive")
//Ex11:
let grade = 'A'
switch(grade){
    case "A":
        console.log("weak")
    case "B":
        console.log("Medium")
    case "C":
        console.log("super")
}
//Ex12:
let numm = 10
if(numm >= 1 && numm <= 100){
    console.log(numm)
}else{
    console.log("Out of range")
}
//Ex13:
let weather = "rainy"
if (weather == "rainy"){
    console.log("rainy")
}else if(weather == "sunny"){
    console.log("sunny")
}else if(weather == "cloudy"){
    console.log("cloudy")
}
//Ex14:
let marks = 60
if(marks > 50 || marks == 50){
    console.log("Pass")
}else{
    console.log("Fail")
}

//Ex15:
let total = 20
if(total > 100){
    discount = total * 0.1
    console.log(discount)
}else{
    console.log("Required above of 100")
}
//Ex16:
let role = 'admin'
role == 'admin' ? console.log("administration") : role == "editor" ? console.log("edition") : role == "viewer" ? console.log("vision") : console.log("enter the selected roles!")
//Ex17:
let score = 100
let bonus = true
if(score > 80 && bonus==true){
    console.log("High score")
}else{
    console.log("Low score")
}
//Ex18:
let hour = 7
hour >= 6 && hour <= 18 ? console.log("Day") : hour > 18 || hour == 23 ? console.log("Night") : console.log("Unvalidated")
//Ex19:
let cartTotal = 600
let discount
if(cartTotal > 500){
    discount = cartTotal * 0.2
    console.log(discount)
}else{
    console.log("No discount")
}
//Ex20
let mounth = 11
switch (mounth){
    case 3:
    case 4:
    case 5:
        console.log("spring")
    case 6:
    case 7:
    case 8:
        console.log("summer")
    case 9:
    case 10:
    case 11:
        console.log("autumn")
    case 12:
    case 1:
    case 2:
        console.log("winter")
}



