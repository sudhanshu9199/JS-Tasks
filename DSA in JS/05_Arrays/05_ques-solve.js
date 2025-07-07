/**Q. Move all the Nagative elements to left and positive to right sides. */

let arr = [-1, 2, -3, 4, -5, 6, -7, 8];
let i = 0, j = 0;
while (i < arr.length) {
    if (arr[i] < 0) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        j++;
    }
    i++;
}
console.log("Rearranged array:", arr);