/**
 * 209. Minimum Size Subarray Sum
 * Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray
 * whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.
 * 
 * Example 1:
 *   Input: target = 7, nums = [2,3,1,2,4,3]
 *   Output: 2
 *   Explanation: The subarray [4,3] has the minimal length under the problem constraint.
 */

// 方法1
function minSubArrayLen1(target: number, nums: number[]): number {
    const n : number = nums.length;
    let ans : number = n + 1, left: number = 0, s : number = 0;

    for(let right = 0; right < n; right++){
        s+= nums[right];
        while(s - nums[left] >= target){
            s -= nums[left];
            left += 1;
        }
        if(s >= target){
            ans = Math.min(ans, right - left + 1)
        }
    }

    return ans <= n ? ans : 0;
};

// 方法2
function minSubArrayLen2(target: number, nums: number[]): number {
    const n : number = nums.length;
    let ans : number = n + 1, left: number = 0, s : number = 0;

    for(let right = 0; right < n; right++){
        s+= nums[right];
        while(s >= target){
            ans = Math.min(ans, right - left + 1);
            s -= nums[left];
            left++;
        }
    }

    return ans <= n ? ans : 0;
};

