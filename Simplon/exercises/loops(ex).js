// //Ex1:
// for (i=1;i<=10;i++){
//     console.log(i);
// }
// //Ex2:
// for (i=1;i<=5;i++){
//     console.log(i**2)
// }
//Ex3:
// let n = 5
// while(n>0){
//     console.log(n)
//     n--
// }
// //Ex4:
// let colors = ["red", "green", "blue"]
// colors.forEach(function(color){
//     console.log(color)
// })
Ex5:
for(i=1;i<=15;i++){
    if(i%2==0){
        console.log(i)
    }else{
        continue
    }

}
//Ex6{seached}:
product = 1
for(let i=1;i<=5;i++){
    product*=i
}
console.log(product)
//Ex7:
fruits = ["apple", "banana", "cherry"]
fruits.forEach(function(fruit){
    console.log(fruit.toUpperCase())
})
//Ex8:
let person = {
    name: "Alice",
    age: 25
}
for(let k in person) {
    console.log(k,person[k])
}
//Ex9:
//Ex10:
console.log("Ex10")
nums = [10, 20, 30, 40]
for(i=0;i<=nums.length;i++){
    if(nums[i]==30){
        console.log("Found 30")
    }
}
//Ex11:
console.log("Ex11")
even_sum = 0
for(let i=1; i<=20; i++){
    if(i%2 == 0){
        even_sum += i
        console.log(i)
    }
}
console.log(even_sum)
//Ex12:
console.log("Ex12")
for(c of "Hello"){
    console.log(c)
}
//Ex13:
console.log("Ex13")
names = ["Jean", "Jeanne", "Dupont"]
for(let n of names){
    console.log(n)
}
//Ex14:
console.log("Ex14")
for(let d=1; d<= 15; d++){
    if(d%3==0){
        continue
    }else{
        console.log(d)
    }
}
//Ex15:
console.log("Ex15")
let n=1
while(n<10){
    console.log("5 x "+ n + "= " + (5*n))
    n++
}
//Ex16:
console.log("Ex16")
let numms = [4, 8, 15, 16, 23, 42]
for(i=0;i<numms.length;i++){
    if(numms[i]<20){
        console.log(numms[i])
    }else{
        continue
    }
}
//Ex17:
console.log("Ex17")
w = 1
do{
    if(w==4){
        break
    }else{
        console.log(w)
    }
    w++ 
}while(w<=5){

}

const array = [1, 2, 3, 4, 5];
 array.forEach(element => {
     console.log(element); 
    });