class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    add(data) {
        // failure
        if (!data) {
            console.log("ERROR - No data passed");
            return;
        }

        // success
        const node = new Node(data, this.head);
        this.head = node;
        console.log(data, " added to list");
    }
    printList() {
        // failure
        if (this.head === null) {
            console.log("List is empty");
        }
        // success
        let currHead = this.head;
        while (currHead !== null) {
            console.log(currHead.data);
            currHead = currHead.next;
        }
    }
    remove(data) {
        let currNode = this.head;
        let prevNode = this.head;
        let found = false;
        while (currNode !== null) {
            if (currNode.data === data) {
                found = true;
                break;
            } else {
                prevNode = currNode;
                currNode = currNode.next;
            }
        }

        // error
        if (!found) {
            console.log("Data not found on the list");
        } else {
            // success
            prevNode.next = currNode.next;
            currNode.next = null;
            console.log("Data removed from list successfully: ", data);
        }
    }
}

class Stack {
    constructor() {
        this.dataStore = new LinkedList();
        this.length = 0;
    }
    push(data) {
        if (!data) {
            console.log("ERROR - data is not passed");
            return;
        }
        const node = new Node(data, this.dataStore.head);
        this.dataStore.head = node;
        this.length++;
    }
    pop() {
        if (!this.dataStore.head) {
            console.log("WARNING - Trying to remove from empty stack");
            return;
        }
        const topNode = this.dataStore.head;
        this.dataStore.head = topNode.next;
        topNode.next = null;
        this.length--;
        console.log("SUCCESS - Data popped", topNode.data);
    }
    size() {
        return this.size;
    }
    print() {
        this.dataStore.printList();
    }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.print();
stack.pop();
stack.print();
