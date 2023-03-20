/**
 * 713. Subarray Product Less Than K
 * Given an array of integers nums and an integer k,
 * return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.
 * 
 * Example 1:
 *   Input: nums = [10,5,2,6], k = 100
 *   Output: 8
 *   Explanation: The 8 subarrays that have product less than 100 are:
 *   [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
 *   Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.
 */

function numSubarrayProductLessThanK(nums: number[], k: number): number {

    if(k <= 1) return 0;

    const n : number = nums.length;
    let ans : number = 0, left : number = 0, s : number = 1;

    for(let right: number = 0; right < n; right++){
        s *= nums[right];
        while(s >= k){
            s /= nums[left];
            left++
        }
        ans += right - left + 1;
    }

    return ans;
};