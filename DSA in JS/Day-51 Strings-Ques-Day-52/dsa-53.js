/* Day-53 - Set & Map */
// let map = new Map();
// /*map.set(key, value) */
// map.set('name', 'amit');
// map.set('age', 23);
// map.set('isFail', false);
// console.log(map);
// Map.delete(/* key */);
// console.log(map.has('age')); // ans in true & false // and has -> always checking the kay is exists in the set or not
// console.log(map.get('name')); // get fetch the key values.

// map.clear() // to clean all items

// console.log(map.keys());
// console.log(map.values());
/* doing iteration */
// for (let a of map.keys()) {
//     console.log(a);
// }
// for (let a of map.values()) {
//     console.log(a);
// }

/* to iterate all together key & values */
// for (let a of map.entries()){
//     console.log(a);
// }

// for (let [key,value] of map){
//     console.log(key,'-->',value);
// }


/* Q. Find frequency of number, using Map. */
// let arr = [1, 10, 2, 4, 2, 2, 2, 6, 1, 1, 10];
// let map = new Map();

// for (let i = 0; i < arr.length; i++) {
//     if (map.has(arr[i])) {
//         map.set(arr[i], map.get(arr[i]) + 1)
//     }
//     else map.set(arr[i], 1);
// }
// console.log(map);


/* Q. Find frequency of strings, using Map. */
let s = 'malayalam';
let map = new Map();
for (let i = 0; i < s.length; i++) {
    let ch = s.charAt(i);
    if (map.has(ch)) {
        map.set(ch, map.get(ch) + 1)
    }
    else map.set(ch, 1);
}
console.log(map);
