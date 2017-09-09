/*
function Cat(name,color){
    this.name=name;
    this.color=color;

}
Cat.prototype.type="likeCat";
Cat.prototype.eat=function(){console.log("eat mouse");}

var cat1=new Cat("ding1","white");
var cat2=new Cat("ding2","red");

console.log(cat1.type);
cat1.eat();
cat2.eat();

console.log(cat1.hasOwnProperty("name"));
console.log(cat1.hasOwnProperty("type"));

console.log(("name" in cat1));*/

function Animals(){

}
Animals.prototype.species = "animal";

function Cat(name,color){
    this.color=color;
    this.name=name;
}


function extend(parent, child){
    var p=parent.prototype;
    var c=child.prototype;
    for(var i in p){
       c[i]=p[i];
    }
}

extend(Animals,Cat);
var cat1=new Cat("lala","green");
console.log(cat1.species);
console.log(cat1.color);
console.log(Cat.prototype);

/*
Cat.prototype=new Animals();
Cat.prototype.constructor=Cat;
var cat1=new Cat("huahua","green");
console.log(cat1.species);
console.dir(Cat.prototype.constructor);*/

