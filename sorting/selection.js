// every iteration we pick the smallest and place it left
// left side becomes sorted incrementally

function swap(i, j, arr) {
    [arr[j], arr[i]] = [arr[i], arr[j]];
}

function sort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let smallValIdx = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[smallValIdx]) {
                smallValIdx = j;
            }
        }
        swap(i, smallValIdx, arr);
    }
    console.log(arr);
}

let sortedArr = (new Array(10)).fill(0).map((_, idx) => idx);
let unsortedArr = sortedArr.sort(val => Math.random() - 0.5);
sort(unsortedArr);