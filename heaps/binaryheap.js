
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryHeap {
    constructor() {
        this.root = null;
    }

    insert(data) {
        // we place data at the last place and do heapify?

    }

    insertOld(data) {
        const initialData = data;

        const insert = (data, node) => {
            if (!this.root) {
                this.root = new Node(data);
                console.log("SUCCESS - data added: ", initialData);
            }
            if (!node) {
                node = this.root;
            }
            if (data > node.data) {
                [data, node.data] = [node.data, data];
            }
            // now data is less.
            if (!node.left) {
                node.left = new Node(data);
                console.log("SUCCESS - data added: ", initialData);
                return;
            }

            if (!node.right) {
                node.right = new Node(data);
                return;
            }
            // FIX - how to identify if I am overloading left side of the heap?
            insert(data, node.left);
        };
        insert(data);
    }

    printlist(node) {
        if (!this.root) {
            console.log("ERROR - Trying to print empty heap");
        }
        if (!node) {
            node = this.root;
        }
        console.log(node.data);
    }
}

const bh = new BinaryHeap();
bh.insert(50);
bh.insert(20);
bh.insert(10);
bh.insert(200);
bh.insert(30);
bh.insert(10);

