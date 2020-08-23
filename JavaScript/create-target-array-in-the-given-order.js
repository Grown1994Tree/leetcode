//https://leetcode.com/problems/create-target-array-in-the-given-order/
//难易程度：简单

//1、常规：splice
var createTargetArray = function(nums, index) {
    var arrs=[]; 
    for(let i=0;i<nums.length;i++){
        arrs.splice(index[i],0,nums[i]);
    }
    return arrs;
    
    
};

//看不懂
var createTargetArray = function(nums, index) {
    let target = []
    for(let i = 0; i < index.length; i++){
        for(let j = 0; j < i; j++){
            if(index[i] <= index[j])
                index[j]++;
        }
    }
    console.log(index);
    for(const i in nums)target[index[i]] = nums[i]
    return target
}