function reverseString(str){
   return str.split('').reverse().join('');
}
console.log(reverseString('hello'))

function arraySum(arr){
    let sum = 0
    for(let i=0; i<arr.length; i++){
        sum += arr[i]
    }
    return sum
}
console.log(arraySum([1,2,3,4,5]))