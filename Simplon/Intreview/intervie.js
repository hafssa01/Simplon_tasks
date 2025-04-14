for(let i=1; i<=30; i+=3){
    console.log(i)
}
//3lines...-1line
let fruites = ["banana","fraise","poivre"].map(fruit => fruit.toUpperCase())
// let new_arr = []
// for(let i=0; i<fruites.length; i++){
//     // var updated = fruites[i].toUpperCase()
//     // new_arr.push(updated)
//     fruites[i] = fruites[i].toUpperCase()
// }

fruites.forEach((fruit,index,arr) => arr[index] = fruit.toUpperCase())
console.log(fruites)

