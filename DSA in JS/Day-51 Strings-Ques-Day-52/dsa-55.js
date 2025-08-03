/**Q 41.- Accept a string and print the frequency of each character present in the string */

// let s = "where is the dog";
// let map = new Map();
// for (let i = 0; i < s.length; i++) {
//   let ch = s.charAt(i);
//   if (ch !== " ") {
//     if (map.has(ch)) {
//       map.set(ch, map.get(ch) + 1);
//     } else map.set(ch, 1);
//   }
// }
// let key = [];
// //   for (let i = 0; i < map.length; i++) {
// //     key.push(map(i))
// //   }
// for (let a of map.keys()) {
//   key.push(a);
// }

// for (let i = 0; i < key.length - 1; i++) {
//     let minIdx = i;
//     for (let j = i + 1; j < key.length; j++) {
//         if (key[j] < key[minIdx]){
//             minIdx = j;
//         }
//     }
//     let temp = key[minIdx];
//     key[minIdx] = key[i];
//     key[i] = temp;
// }

// for (let i = 0; i < key.length; i++) {
//   let ch = key[i];
//   console.log(ch, "=>", map.get(ch));
// }

/**Q 42. Check Two Strings are Anagram or Not Anagrams words have the same word length & same character count Examples of anagram words are arc and car, state and taste, night and thing etc. */

// let s1 = 'thing';
// let s2 = 'night';

// let map = new Map();
// if (s1.length !== s2.length) {
//     console.log('Not Anagrams');
// }
// else {
//     for (let i = 0; i < s1.length; i++) {
//     let ch = s1.charAt(i);
//     if (ch !== ' '){
//         if (map.has(ch)) {
//         map.set(ch, map.get(ch) + 1);
//     }
//     else map.set(ch, 1);
//     }
// }
// for (let i = 0; i < s2.length; i++) {
//     let ch = s2.charAt(i);
//     if (ch !== ' ') {
//         if (map.has(ch)) {
//             map.set(ch, map.get(ch) - 1);
//         }
//         else map.set(ch, 1);
//     }
// }
// let isAnagram = true;
// for (let a of map.values()) {
//     if (a !== 0) {
//         isAnagram = false;
//         break;
//     }
// }

// if (isAnagram) console.log('Anagrams');
// else console.log('Not Anagrams');
// }


/* Q 37. Pallindromic String using method and Two pointer algorithm (hint: Array reverse algo) */

// let s = 'maam';
// let isPallindromic = true;
// let i = 0, j = s.length - 1;
// while (i < j) {
//     if (s.charAt(i) !== s[j]) {
//         isPallindromic = false;
//     }
//     i++; j--;
// }
// if (!isPallindromic) console.log('Not Pallindromic!');
// else console.log('its Pallindromic');


/* Q 38. Toggle each alphabet of String
In - AcgDfD Output - aCGdFd */

// let s = 'aCGdFd';
// let ans = '';
// for (let i = 0; i < s.length; i++) {
//     let ascii = s.charCodeAt(i);
//     if(ascii >= 65 && ascii <= 90) {
//         ans += String.fromCharCode(ascii + 32);
//     }
//     else if (ascii >=97 && ascii <= 122) {
//         ans += String.fromCharCode(ascii - 32);
//     }
// }
// console.log(ans);


/* Q 39. Take an array of strings words and a String Prefix. Print the number of strings in words that contain pref as a prefix.
Example - Input: words = ["pay","attention","practice","attend"], pref = "at"
Output: 2 */

// let words = ["pay","attention","practice","attend"], pref = "at";
// let count= 0;
// for (let i = 0; i < words.length; i++) {
//     if (words[i].startsWith(pref)){
//         count++;
//     }
// }
// console.log(count);



/* Q 40. Capitalize first & last character of each word in the sentence and print the new sentence
Ex - Hello bhai Kaise ho a
HellO BhaI KaisE HO A */

// let sentence = 'Hello bhai Kaise ho a';
// let ans = '';
// let sArr = sentence.split(' ');
// for (let i = 0; i < sArr.length; i++) {
//     let word = sArr[i];
//     if (word.length <= 2) {
//         ans += word.toUpperCase() + ' ';
//     }
//     else ans += word.charAt(0).toUpperCase() + word.slice(1, word.length - 1).toLowerCase() + word.charAt(word.length - 1) + ' ';
// }
// console.log(ans);




let nums = [2,7,11,15], target = 9;
let maps = new Map();
let ans = [-1, -1];
for (let i = 0; i < nums.length; i++) {
    if (maps.has(target - nums[i])) {
        ans[0] = i;
        asn[1] = maps.get()
    }
}