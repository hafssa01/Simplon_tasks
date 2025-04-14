// //Ex1:
// function greetings(){
//     return "Hello, World!";
// }
// console.log(greetings());
// //Ex2:
// function add(a,b){
//     return a+b
// }
// console.log(add(5,10))
// //Ex3:
// function lengthOfstring(str){
//     return str.length
// }
// console.log(lengthOfstring("Simplon"))
// //Ex4:
// console.log("Ex4")
// function firstLetter(string){
//     let chars = string.split('')
//     return chars[0]
// }
// console.log(firstLetter("Sas_Hackeuse"));
// //Ex5:
// function reverseString(revStr){
//     return revStr.split('').reverse().join('')
// }
// console.log(reverseString("Test"))
// //Ex6:
// function upperString(str){
//     return str.toUpperCase()
// }
// console.log(upperString("test"))
// //Ex7:
// function splitArray(strToarr){
//     return strToarr.split(',')
// }
// console.log(splitArray("These are exercices that concern application in functions"))
// //Ex8:
// function evenOrodd(num){
//     return num%2 == 0 ? "Even" : "Odd"
// }
// console.log(4)
// //Ex9:
// function largestNuminArray(arr){
//     // Math,max(...arr)
//     let comparison = 0
//     for(i=0;i<=arr.length;i++){
//         comparison >=
//     }
// }

// arr = [60,100,30,140,50]

// function maxNumber(arr){
//     let x = arr[0]
//     for(let i = 1;i < arr.length ;i++){
//         if(x<arr[i]){
//             x = arr[i]

//         }else{
//             continue
//         }
//     }
//     return x    
// }
// console.log(maxNumber([60,100,30,140,50,100000,3000]))
//Ex9{repeted}
function largestNumber(arr){
    let x = arr[0]
    for(let i = 1; i<arr.length; i++){
        if(x<arr[i]){
            x=arr[i]
        }
    }
    return x
}
console.log(largestNumber([10,1000,200,500]))

//Ex10:
function sumOfarrElement(array){
    sum = 0
    for(let i=0; i<array.length; i++){
        sum += array[i]
    }
    return sum
}
console.log(sumOfarrElement([3000,20,30]))
//Ex11:
function vowelsCount(str){
    let c = 0
    for(v of str){
        switch(v){
            case 'a':
            case 'o':
            case 'i':
            case 'e':
            case 'u':
                c++ 
        }
    }
    return c
    
}
console.log(vowelsCount("onu kitab okursunuz"))
//Ex12:
function primeNumber(num){
    if(num<=1){
        return false
    }
    for(let i=2; i<=Math.sqrt(num); i++){
        if(num%i===0 || num<=1){
            return num + " is not a prime!"
        }
    }
    return num + " is a prime!"

}

console.log(primeNumber(4))
//Ex13:
function factorialOfNumber(n){
    let fact = 1
    for(let i=n; i>=1; i--){
        fact *= i
    }
    return `The factorial of ${n} is ${fact}`
}
console.log(factorialOfNumber(5))
//Ex14:
function reversedWord(str){
    let splited = str.split(' ')
    let word = ""
    for(let i=0; i<splited.length; i++){
        var reversed = splited[i].split('').reverse().join('')
        word += reversed
        if(i!==splited.length-1){//#Searched
            word += " "
        }
    }
    return word
}
console.log(reversedWord("Hi I'm self_learner"))
//Ex15:
function isPalindrome(word){
    return word.split('').reverse().join('')===word ? `${word} is a palindrome` : `${word} is not a palindrome!`
}
console.log(isPalindrome("madam"))
//Ex16:
function removeDuplication(arr){
    // let x=arr[0]
    // for(let i=0; i<arr.length; i++){
    //     if(arr[i]==arr[i+1]){
    //         arr.splice(i,arr[i])
    //     }
    // }
    //return arr
    return [...new Set(arr)];
}

console.log(removeDuplication([1,2,2,3,3]))
//Ex17:
function average(arr){
    let sum=0
    for(let i=0; i<arr.length; i++){
        sum+=arr[i]
    }
    let avrg = sum/(arr.length)
    return avrg
}
console.log(average([10,20,30]))
//Ex18:
function countOccurrences(str,char){
    let c=0
    for(x of str){
        if(x===char){
            c++
        }
        
    }
    return c
}
console.log(countOccurrences("hello everyone","e"))
//Ex19:
function firstCapitalize(sentence){
    let spliting = sentence.split(" ")
    let all_words = ""
    for(let i=0; i<spliting.length; i++){
        word = spliting[i].charAt(0).toUpperCase() + spliting[i].slice(1)
        all_words += word
        if(i!==spliting.length-1){
            all_words += " "
        }
    }
    return all_words
}
console.log(firstCapitalize("hello i'm learning js"))
//Ex20:
function swappedCharacters(str){
    let swaped = ""
    let chars = str.split('')
    swaped = chars[0]
    chars[0] = chars[chars.length-1]
    chars[chars.length-1] = swaped
    return chars.join('')
}
console.log(swappedCharacters("hello"))
//Ex21:
function mergeWithoutDuplicate(arr1,arr2){
    return [...new Set([...arr1, ...arr2])]
}

//Ex22:
function isNumric(str){
    let devided = str.split('')
    let c=0
    for(let i=0; i<devided.length; i++){
        //It attempts to convert the string to a number before checking if it's "not a number."
        if(!isNaN(devided[i]) && devided[i] !== ' '){
            c++
        }
        
    }
    if(c===devided.length){
        return "The string contains only numeric characters"
    }else{
        return "The string doesn't contain only numeric characters!"
    }
    
}
console.log(isNumric("12345677"))
//Ex23:
function longestWord(sentence){
    let to_split = sentence.split(' ')
    let long = to_split[0]
    for(let i=1; i<to_split.length; i++){
        if(to_split[i].length>long.length){
            long = to_split[i]
        }
    }
    return long
}
console.log(longestWord("hi I'm a student at simplon maghreb"))
//Ex24:
function arrayOfnumbers(num1,num2){
    let array = []
    for(let i=num1+1; i<num2; i++){
        array.push(i)
    }
    return array
}
console.log(arrayOfnumbers(1,10))
//Ex25:
function evenSum(arr){
    let sum = 0
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2==0){
            sum+=arr[i]
        }
    }
    return sum
}
console.log(evenSum([1,2,3,4,5,6]))




