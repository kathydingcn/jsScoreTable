/**
 * Created by Kathy on 12/09/2017.
 */
/*
function fun1(arg1,callback){
    console.log("infun1");
    setInterval(function(){callback();},1000);
}

var callback1= function(){
    console.log(callback1);}

    fun1(1,callback1);*/

var myPro = new Promise((resolve,reject)=>{

    setTimeout(function(){
        reject("failed");},2000);
});

myPro.catch((msg)=>{
    console.log("fffff" + msg);
}) ;