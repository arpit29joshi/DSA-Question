//You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the ith customer has in the jth bank. Return the wealth that the richest customer has.
//A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.
var maximumWealth = function(arr) {
       let max=0;
for(i=0;i<arr.length;i++){
    let sum=0;
    for(j=0;j<arr[i].length;j++){
        if(i===0){
            max=max+arr[i][j];
        }else{
            sum=sum+arr[i][j];
            if(j===arr[i].length-1&&sum>max){
                max=sum;
            }
        }
        
    }
}
return max
};
