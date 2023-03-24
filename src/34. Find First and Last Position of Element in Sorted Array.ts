/**
 * 34. Find First and Last Position of Element in Sorted Array
 * Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
 * If target is not found in the array, return [-1, -1].
 * You must write an algorithm with O(log n) runtime complexity.
 * Example 1:
 *   Input: nums = [5,7,7,8,8,10], target = 8
 *   Output: [3,4]
 */

function searchRange(nums: number[], target: number): number[] {
    const start : number = binary_search(nums, target);
    if(start === nums.length || nums[start] !== target) return [-1, -1];
    const end : number = binary_search(nums, target + 1) - 1;

    return [start, end]; 
};

const binary_search = (nums: number[], target: number) : number => {
    let left : number = 0, right : number = nums.length - 1;
    let middle : number = 0;
    while(left <= right){
        middle = left + Math.floor((right - left) / 2);
        if(nums[middle] < target){
            left = middle + 1;
        }else{
            right = middle -1;
        }
    }
    return left;
}

const binary_search2 = (nums : number[], target: number) : number => {
    let left : number = 0, right : number = nums.length;
    while(left < right){
        const middle = left + Math.floor((right - left) / 2);
        if(nums[middle] < target){
            left = middle + 1;
        }else{
            right = middle;
        }
    }
    return left // right is also ok.
}

const binary_search3 = (nums : number[], target : number) : number => {
    let left : number = -1, right : number = nums.length;
    while(left + 1 < right){
        const middle = left + Math.floor((right - left) / 2);
        if(nums[middle] < target){
            left = middle;
        }else{
            right = middle;
        }
    }
    return right;
}