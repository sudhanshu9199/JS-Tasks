/**Day-54: Map Questions & Bitwise Operators  */
/* Q.1. Two Sum */
// let nums = [2,7,11,15], target = 9;
// let maps = new Map();
// let ans = [-1, -1];
// for (let i = 0; i < nums.length; i++) {
//     if (maps.has(target - nums[i])) {
//         ans[0] = i;
//         ans[1] = maps.get(target - nums[i]);
//         console.log([maps.get(target - nums[i]), i]);
//         break;
//     }
//     else maps.set(nums[i], i);
// }


/* Q.2351. First Letter to Appear Twice */
// let s = "abccbaacz";
// let maps = new Map();
//     for (let i = 0; i < s.length; i++) {
//         let ch = s.charAt(i);
//         if (maps.has(ch)) {
//             maps.set(ch, maps.get(ch) + 1);
//             if (maps.get(ch) === 2) {
//                 console.log(ch);
//                 break;
//             }
//         }
//         else maps.set(ch, 1);
//     }


/* Q.2418. Sort the People */
    // let maps = new Map()
    // for (let i = 0; i < names.length; i++) {
    //     maps.set(heights[i], names[i])
    // }
    // heights.sort((a,b) => b - a)
    // let ans = new Array(names.length);
    // for (let i = 0; i < heights.length; i++) {
    //     ans[i] = maps.get(heights[i])
    // }
    // return ans;


/**Bitwise operator */
/**-Q 70.Swap two integers without using third variable
-Q 71.check even or odd
-Q 72.check if the is power of 2 */