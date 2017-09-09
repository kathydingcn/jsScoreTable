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

 var myfun=new Function(
     'x',
     'y',
     'return x+y'
 );

 var s =myfun(3,4);
 console.log(s);

 function fun1() {
     var x = 5;
     return function fun2() {
         console.log(x);
     }

 }
 fun1()();

 console.dir({age:34}.valueOf().toString());

 console.log([2,3].toString());

 console.log(false==[]);