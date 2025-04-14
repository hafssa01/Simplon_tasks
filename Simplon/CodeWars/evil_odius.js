function evil(n) {
    const binary = n.toString(2);
    let count = 0;
    for(let i of binary){
      if(i == "1"){
        count++;
      }
    }
    return count%2 == 0 ? "It's Evil!" : "It's Odious!"
    
  }

console.log(evil(15))
let num = 15
let fast = num.toString(2)
console.log(fast)