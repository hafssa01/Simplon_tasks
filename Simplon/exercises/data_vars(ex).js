//Excercise 1:
name = "hafssa"
console.log(name)
//Excercise 2:
age = 21
height = 1.6
console.log(age + height)
//Exercise 3:
isStudent = true
console.log(isStudent)
//Exercise 4:
let greeting = "Hello"
console.log(greeting + "there")
//Exercise 5:
const PI = 3.14159
// PI = 3.14

//Exercise 6:
let firstName = "hafssa"
let lastName = "lozzi"
let fullName = firstName + " " + lastName
console.log(fullName)
//Exercise 7: <?>
let score = 70
let doubleScore = score*2
console.log(doubleScore)

//Exercise 8:
let x = undefined
console.log(x + " " + typeof(x))
//Exercise 9:
let colors = ["white","green","pink"]
console.log(colors[1])
//Exercise 10:
person = {
    name: "hafssa",
    age: 21,
    isEmployed: false
}
console.log(person.age)
//Exercise 11:
let num = "100"
let converted = Number(num)
console.log(converted, typeof(converted))
//Exercise 12:
let isComplete = null
console.log(isComplete, typeof(isComplete))
//Exercise 13:
let total = `10 + 5 + "10"` //Because we have the sum between back ticks
console.log(total)
//Exercise 14:
let bigNumber = `2n ** 53n`
console.log(typeof(bigNumber))
//Exercise 15:
let temp = "50" / `2`
console.log(temp)
//Exercise 16:
let numbers = [1,2,3]
numbers.push(4)
console.log(numbers)
//Exercise 17:
book = {
    title: "The Compound Effect",
    author: "The Compound Effect",
    pages: 176
}
book.pages = 350
console.log(book)
//Exercise 18:
let result = `5 + "5"`
console.log(result, typeof(result))
//Exercise 19:
let boolString = Boolean("false")
console.log(boolString)

//Ex20:
let clrs = ["red", "green", "blue", "yellow"]
clrs.pop()
let updated = clrs
console.log(updated)
//Ex21:
let sentence = "Learning JavaScript is fun!"
words = sentence.split(' ')
console.log(words)
//Ex22:
let days = ["Tuesday", "Wednesday"]
days.unshift("Sunday","Monday")
console.log(days)
//Ex23:
let email = "user@example.com"
domain = email.substring(4, 16)
console.log(domain)
//Ex24:
let tasks = ["wake up", "brush teeth", "have breakfast"]
tasks.shift()
tasks_up = tasks
console.log(tasks)
//Ex25:
info = "The quick brown fox"
last_word = info.substring(16, 20)
console.log(last_word)
//Ex26:
let nums = [1, 2, 3]
nums.push(4,5,6)
console.log(nums)
//Ex27:
fileName = "document.pdf"
extension = fileName.substring(8, 12)
console.log(extension)
//fdg
let letters = ["a", "b", "d", "e"]
letters.splice(2,0,"c")
console.log(letters)