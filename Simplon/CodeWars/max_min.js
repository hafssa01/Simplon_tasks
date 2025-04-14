var min = function(list){
    let m = list[0];
      for(let i=0; i<list.length; i++){
        if(m < list[i]){
          m = list[i];
        }
      }
      return m;
  }
  
var max = function(list){
      let n = list[0];
      for(let x=0; x<list.length; x++){
        if(list[x] < n){
          n = list[x];
        }
      }
      return n;
  }

console.log(max([10,70,30,50,-110]))
console.log(min([10,70,30,50]))