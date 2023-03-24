/**
 * 42. Trapping Rain Water
 * Given n non-negative integers representing an elevation map where the width of each bar is 1,
 * compute how much water it can trap after raining.
 * 
 * Example 1:
 *   Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
 *   Output: 6
 *   Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1].
 *     In this case, 6 units of rain water (blue section) are being trapped.
 */

function trap1(height: number[]): number {
    const n : number = height.length;
    const pre_max : number[] = new Array(n),
          suf_max : number[] = new Array(n);

    pre_max[0] = height[0];
    suf_max[n - 1] = height[n -1];

    let ans : number = 0;

    for(let i=1; i<n; i++){
        pre_max[i] = Math.max(height[i], pre_max[i - 1]);
        suf_max[n - 1 - i] = Math.max(height[n - 1 - i], suf_max[n - i]);
    }

    for(let i=0; i<n; i++){
        ans += Math.min(pre_max[i], suf_max[i]) - height[i];
    }

    return ans;
};

function trap2(height: number[]) : number {
    const n : number = height.length;
    let ans : number = 0;
    let pre_max : number = 0, suf_max : number = 0;
    let left : number = 0, right : number = n -1;
    while(left <= right){
        pre_max = Math.max(pre_max, height[left]);
        suf_max = Math.max(suf_max, height[right]);

        if(pre_max < suf_max){
            ans += pre_max - height[left];
            left++;
        }else{
            ans += suf_max - height[right];
            right--;
        }
    }

    return ans;
}