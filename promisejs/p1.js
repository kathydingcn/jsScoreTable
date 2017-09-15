/**
 * Created by Kathy on 12/09/2017.
 */
// require("../jquery-3.2.1.min");
/*var imported = document.createElement('script');
imported.src = "../jquery-3.2.1.min";
document.head.appendChild(imported);*/

// document.write('<script type="application/javascript" src="jquery-3.2.1.min.js"></script>');

$("#box").on("click",f2);

var obox=document.getElementById("box");

/*obox.onclick=function(){
    f2();
}*/
// f1.on("done",f2);
function f1(){
    setTimeout(function(){
        // f1.trigger("done");
        console.log("time out...");
    },1000);
}
f1();
function f2(){
    console.log(f2);
}
var myfun=(function(){
    var var1=3;
    function fun1(){
        console.log("hello1");
    }
    function fun2(){
        console.log("hello2");
    }
    return {fun1:fun1,
            fun2:fun2,
            var1:var1}
})();

myfun.fun1();
myfun.fun2();
console.log(myfun.var1);

function out1(){
    var out1Var=4;
    return function in1(){
        out1Var++;
        console.log(out1Var);
    }
}
out1()();
out1()();