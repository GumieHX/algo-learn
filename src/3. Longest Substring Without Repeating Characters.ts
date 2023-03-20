/**
 * 3. Longest Substring Without Repeating Characters
 * Given a string s, find the length of the longest substring without repeating characters.
 * 
 * Example 1: 
 *   Input: s = "abcabcbb"
 *   Output: 3
 *   Explanation: The answer is "abc", with the length of 3.
 */

function lengthOfLongestSubstring(s: string): number {
    if(s.length <= 1) return s.length;
    const n : number = s.length;
    const map : Map<string, number> = new Map<string, number>();
    let ans : number = 0, left : number = 0;

    for(let right =0; right < n; right++){
        map.set(s[right], (map.get(s[right]) || 0) + 1);
        while(map.get(s[right]) as number > 1){
            map.set(s[left], (map.get(s[left]) as number) - 1);
            left++;
        }

        ans = Math.max(ans, right - left + 1)
    }

    return ans
};