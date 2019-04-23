
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryHeap {
    constructor() {
        this.dataStore = [];
        // If a given node is located at index 'x' in the array, its left child exists at
        // index = 2x, and its right child exists at index = 2x + 1.  Each node's parent exists
        // at index = x / 2(rounded down).
    }
    insert(data) {
        this.dataStore.push(data);
        this.heapify();
    }
    heapify() {
        if (this.dataStore.length <= 1) {
            return;
        }
        let currIndex = this.dataStore.length - 1;
        while (currIndex >= 1) {
            let parentIndex = Math.floor(currIndex / 2);
            if (this.dataStore[currIndex] > this.dataStore[parentIndex]) {
                [this.dataStore[currIndex], this.dataStore[parentIndex]] = [this.dataStore[parentIndex], this.dataStore[currIndex]];
                [currIndex, parentIndex] = [parentIndex, currIndex];
            } else {
                break;
            }
        }
    }
    print() {
        console.log(this.dataStore.toString());
    }
    pop() {
        this.remove(this.dataStore[0]);
    }
    remove(data) {
        // find index
        // replace last, shrink array

        // that index is parentIndex, childIndexes = 2(i), 2(i)+1
        // as long as 2i+1 less than array index, compare parentIndex val, childIndex val and swap.
        let position = this.dataStore.indexOf(data);
        this.dataStore[position] = this.dataStore[this.dataStore.length - 1];
        this.dataStore = this.dataStore.slice(0, this.dataStore.length - 1);

        let parentIndex = position;
        let getLeftChildIndex = () => 2 * parentIndex;
        let getRightChildIndex = () => 2 * parentIndex + 1;
        while (getRightChildIndex() <= this.dataStore.length - 1) {
            if (this.dataStore[parentIndex] < this.dataStore[getLeftChildIndex()]) {
                [this.dataStore[parentIndex], this.dataStore[getLeftChildIndex()]] = [this.dataStore[getLeftChildIndex()], this.dataStore[parentIndex]];
                parentIndex = getLeftChildIndex();
            }
            if (this.dataStore[parentIndex] < this.dataStore[getRightChildIndex()]) {
                [this.dataStore[parentIndex], this.dataStore[getRightChildIndex()]] = [this.dataStore[getRightChildIndex()], this.dataStore[parentIndex]];
                parentIndex = getRightChildIndex();
            }
        }
    }
}

const bh = new BinaryHeap();
bh.insert(2);
bh.insert(3);
bh.insert(6);
bh.insert(4);
bh.insert(7);
bh.insert(9);

bh.print();  // Expected - 9 7 6 4 2 3

bh.pop();
bh.print();

