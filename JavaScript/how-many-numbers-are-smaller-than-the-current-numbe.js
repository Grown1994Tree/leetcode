//地址：https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
//难易程度：简单


//1、暴力解决：for循环计算
var smallerNumbersThanCurrent = function(nums) {
    
    var arrs=new Array(nums.lenght);
    for(let i=0;i<nums.length;i++){
        var count=0;
        for(let j=0;j<nums.length;j++){
          
            if(nums[j]<nums[i]){
               count++;
            }
          
        }
        arrs[i]=count;
        
        
    }
    return arrs;
}

/**2、先排序，再获取数组值在sortArrs的索引 */
var smallerNumbersThanCurrent = function(nums) {
    
    var sortArrs=nums.slice().sort((a,b)=>a-b);
    var arrs=[];
    nums.forEach(element => {
        arrs.push(sortArrs.indexOf(element));
    });
    return arrs;
}


/**3、计数排序法 */
var min=nums[0];
var max=nums[0];
var sorts=[];
for(let i=1;i<nums.length;i++){
    if(nums[i]<min){
       min=nums[i];
    }
}

for(let i=1;i<nums.length;i++){ 
    if(nums[i]>max){
       max=nums[i];
    }  
}

let range=max-min+1;

let arrs=new Array(range).fill(0);

for(let i=0;i<nums.length;i++){
   arrs[nums[i]-min]++;
}


for(let i=1;i<arrs.length;i++){
    arrs[i]+=arrs[i-1];
}
for(var i=0;i<nums.length;i++){
    if(nums[i]==min){
       sorts.push(0);
    }else{
       sorts.push(arrs[nums[i]-min-1]);
    }
    
}

return sorts;
