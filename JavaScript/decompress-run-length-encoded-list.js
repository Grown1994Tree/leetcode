//地址：https://leetcode.com/problems/decompress-run-length-encoded-list/
//难易程度：简单

//1、fill()和splice()或者push()
var decompressRLElist = function(nums) {
    var numArr=[];
    for(var i=0;i<nums.length;i+=2){
        var arr=new Array(nums[i]).fill(nums[i+1]);
        numArr.push(...arr);
        //numArr.splice(numArr.length,0,...arr);
    }
    return numArr;
};