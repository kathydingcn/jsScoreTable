 var count=function myfun(array){
    return array.length;
 }
 var method = {
     numbers:[1,2,3],
     sum:function(){
         return this.numbers.reduce(function(acc,num){
             console.log(acc+num);
             return acc+num;
         })
     }
 }
 // method.sum();
 console.log(count([1, 2, 3]));
