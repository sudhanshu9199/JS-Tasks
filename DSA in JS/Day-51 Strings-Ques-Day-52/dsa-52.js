/* 
Q 61.- Accept a string and print the frequency of each character present in the string */

// let s = 'helloed';
// let frqArr = new Array(123).fill(0);  // this logic is called bit map
// for (let i = 0; i < s.length; i++) {
//     let ascii = s.charCodeAt(i);
//     frqArr[ascii] = frqArr[ascii]+1;
// }
// console.log(frqArr);

// for(let i = 0; i < frqArr.length; i++) {
//     if (frqArr[i] > 0) {
//         console.log(String.fromCharCode(i)+ '-->', frqArr[i]);

//     }
// }

/* - Q 62. Check Two Strings are Anagram or Not Anagrams words have the same word length & same character count Examples of anagram words are arc and car, state and taste, night and thing etc. */

// let s1 = "adam";
// let s2 = "mada";
// let frqArr = new Array(123).fill(0);
// if (s1.length != s2.length) {
//   console.log("Given strings are not anagram.");
// } else {
//   let isAnagram = true;
//   for (let i = 0; i < s1.length; i++) {
//     let ascii = s2.charCodeAt(i);
//     frqArr[ascii] = frqArr[ascii] + 1;
//   }
//   for (let i = 0; i < s2.length; i++) {
//     let ascii = s2.charCodeAt(i);
//     frqArr[ascii] = frqArr[ascii] - 1;
//   }
//   for (let i = 0; i < frqArr.length; i++) {
//     if (frqArr[i] != 0) {
//         isAnagram = false;
//         break;
//     }
//   }
//   if (isAnagram) console.log('Give strings are anagram.');
//   else console.log('Given strings are not anagram.');
  
// }



/* set: like an array but not array. */

// let sets = new Set();
// sets.add(20);
// sets.add(10);
// sets.add(40);
// sets.add(50);
// sets.add(10); // duplicate elements are not allowed

// for (let a of sets) {
//     console.log(a + " ");
// }

// console.log(sets);
// sets.delete(40);
// console.log(sets);
// console.log(sets.has(100)); // fasle
// console.log(sets.has(10)); // true
// console.log(sets.size); // length of set


/*
 leetCode Q.


-Q 65. 202. Happy Number */

/* 1832.-Q 64.Check if the pangram or not */

// let s = 'thequickbrownfoxjumpsoverthelazydog';
// let sets = new Set();
// for (let i = 0; i < s.length; i++) {
//     let cha = s.charAt(i);
//     sets.add(cha);
// }
// console.log(sets.size === 26);
/*OR */
// let sets = new Set(s);
// console.log(sets);
// if (sets.size === 26) console.log(true);
// else false;


/*  771-Q 63.Jewels and Stones */

let jewels = "aA", stones = "aAAbbbb";

let sets = new Set(jewels);
let count = 0;
for (let i = 0; i < stones.length; i++) {
        if (sets.has(stones[i])) count++;
}
console.log(count);
