/* 



Q 41.- Accept a string and print the frequency of each character present in the string
Q 42. Check Two Strings are Anagram or Not
Anagrams words have the same word length & same character count Examples of anagram words are arc and car, state and taste, night and thing etc. */


/* Q 37. Pallindromic String using method and Two pointer algorithm (hint: Array reverse algo) */

// let s = 'mam';
// let copy = s;
// let reverse = '';
// for (let i = s.length - 1; i >= 0; i--) {
//     reverse += s[i];
// }
// console.log(reverse);
// if (copy === reverse) console.log(`${copy}, is pallindromic String.`);
// else console.log(`${copy}, is not Pallindromic String.`);
/* OR */
// let s = 'malayalam';
// let isPallindromic = true;
// let i = 0, j = s.length- 1;
// while (i < j) {
//     if(s[i] !== s[j]) {
//         isPallindromic = false;
//         break;
//     }
//     i++; j--;
// }
// if (!isPallindromic) console.log('its not Pallindromic.');
// else console.log(s, 'is Pallindromic.');




/* Q 38. Toggle each alphabet of String
In - AcgDfD Output - aCGdFd */

// let s = 'aCGdFd';
// let st = '';
// for(let i = 0; i < s.length; i++) {
//     if (s.charAt(i) === s[i].toUpperCase()) st += s[i].toLowerCase();
//     if (s[i] === s.charAt(i).toLowerCase()) st += s[i].toUpperCase();
// }
// console.log(st);
/*OR */
// let s = 'aCGdFd';
// let ans = '';
// for (let i = 0; i < s.length; i++) {
//     let asci = s.charCodeAt(i);
//     if (asci >= 65 && asci <= 90) {
//         ans += String.fromCharCode(asci + 32);
//     }
//     else if (asci >= 97 && asci <= 122) {
//         ans += String.fromCharCode(asci - 32);
//     }
// }
// console.log(ans);




/* Q 39. Take an array of strings words and a String Prefix. Print the number of strings in words that contain pref as a prefix.
Example - Input: words = ["pay","attention","practice","attend"], pref = "at"
Output: 2 */

// let word = ['later', 'late', 'latter', 'lamon'];
// let perf = 't';
// let count = 0;
// for (let i = 0; i < word.length; i++) {
//     if (word[i].startsWith(perf)) count++;
// }
// console.log(count);



/* Q 40. Capitalize first & last character of each word in the sentence and print the new sentence
Ex - Hello bhai Kaise ho a
HellO BhaI KaisE HO A */

// let word = 'Hello welcome to world';
// let arr = word.split(' ');
// let ans = '';
// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//     let word = arr[i];
//     if (word.length <= 2) {
//         ans += word.toUpperCase() + " ";
//     }
//     else {
//         ans += word.charAt(0).toUpperCase() + word.substring(1, word.length - 1) + word.charAt(word.length - 1).toUpperCase() + " ";
//     }
// }
// console.log(ans);


// let s = 'javaScript hello';
// console.log(s.replace('a', 'o')); // replace first letter only | if use `s.replaceAll('','')` then replaced all letters


// let s = 'javaScript hello';
// console.log(s.split('').reverse().join('')); // olleh tpircSavaj