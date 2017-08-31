function add(x){
    return function(y){
        return x+y;
    }
}

var add5 = add(5); //return value is function(y)
var sum = add5(6); //so that y is 6, x is same as before.
var sum2 = add5(8);
console.log(sum);
console.log(sum2);

var person=function(){
    var name="Robert";
    return {
        getname:function(){
            return name;
        },
        setname:function(newName){
            name=newName;
        }
    }
}();
    console.log(person.name);
    console.log(person.getname());
    person.setname("dingkai");
console.log(person.getname());
