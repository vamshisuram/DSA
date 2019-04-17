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

const list = new LinkedList();  // type of data assertions
list.add(10);
list.add(20);
list.add(30);
list.add();
list.printList();
list.remove(20);
list.printList();