/* Largest gap in an array:
Given an unsorted array of length N, and we have to find the largest gap between any two elements of the array. In simple words, find max(|Ai-Aj|) where 1 ≤ i ≤ N and 1 ≤ j ≤ N.


Examples:  

Input : arr = {3, 10, 6, 7}
Output : 7
Explanation :
Here, we can see largest gap can be
found between 3 and 10 which is 7
Input : arr = {-3, -1, 6, 7, 0}
Output : 10
Explanation :
Here, we can see largest gap can be 
found between -3 and 7 which is 10  */

function findGap(array){
    let sortedArr = array.sort(function(a,b){return a-b});
    console.log(sortedArr[sortedArr.length-1] - sortedArr[0]);
}

let arr = [3, 10, 6, 7];
findGap(arr);
arr = [-3, -1, 6, 7, 0];
findGap(arr);
