/**
 * Created by Kathy on 13/09/2017.
 */

var str="my name is{0}, my love is {1}, my home is {2}";

var arr=["dingkai","huangqc","beijing"];

var reg=/{(\d)}/g;

var res = reg.exec(str);

var res1 = str.match(reg);

console.log(res);
console.log(res1);

var res2=str.replace(reg,"*");

var res3=str.replace(reg,function(){
    console.log(arguments[1]);
    return arr[arguments[1]];
});

console.log(res3);

var str1= "20151230";
var arr = ["零","壹","贰","叁","肆","伍","陆","七","八","久"];

var reg=/(\d){1}/g;

var res4 = str1.replace(reg,function(){
    return arr[arguments[1]];
});

console.log(res4);


