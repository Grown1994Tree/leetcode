//地址：https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/
//难易程度：简单

//1、暴力破解
var subtractProductAndSum = function(n) {
    var arr=[];
    var nStr=String(n);
    for(let i=0;i<nStr.length;i++){
        arr.push(Number(nStr[i]));
    }
    
    return arr.reduce((acc,cur)=>{return acc*cur},1)- arr.reduce((acc,cur)=>{return acc+cur},0);
    
};


//2、使用Array.from
var subtractProductAndSum = function(n) {
    var arr=Array.from(String(n),Number);
    return arr.reduce((acc,cur)=>acc*cur,1)-arr.reduce((acc,cur)=>acc+cur,0);
}