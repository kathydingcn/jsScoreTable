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

