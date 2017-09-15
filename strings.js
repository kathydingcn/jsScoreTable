var myObj={};

myObj.name = "dingkai";
myObj.age=18;

for(key in myObj){
    // console.log(myObj[key]);
}

/*var myString="tyusde";



 Array.prototype.join.call(myString,"+");

console.log(myString);*/

var myArr=[2,3,4];



// console.log(myArr.join(" | "));

var a = [1, 2, 3, 4];

a.join(' ') // '1 2 3 4'
a.join(' | ') // "1 | 2 | 3 | 4"
// a.join() // "1,2,3,4"

// console.dir(a);

var arr1=[10,2,13,5,6];

var arr2 = Math.max.apply(null,arr1);

function sub() {
    
}