
// on what basis data should be added as a child to any node.?

class Node {
    constructor(data) {
        // data type validations
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST {

    constructor() {
        this.root = null;
    }

    insert(data) {
        // data validations
        let currNode = this.root;
        if (!currNode) {
            this.root = new Node(data);
            console.log("SUCCESS - data added: ", data);
            return;
        } else {
            while (currNode) {
                if (data <= currNode.data) {
                    if (currNode.left) {
                        currNode = currNode.left;
                    } else {
                        currNode.left = new Node(data);
                        console.log("SUCCESS - data added: ", data);
                        break;
                    }
                } else if (currNode.right) {
                    currNode = currNode.right;
                } else {
                    currNode.right = new Node(data);
                    console.log("SUCCESS - data added: ", data);
                    break;
                }
            }
        }
    }

    inOrder(node) {
        if (!this.root) {
            console.log("Tree is empty");
            return;
        }
        if (!node) {
            node = this.root;
        }
        if (node.left) {
            this.inOrder(node.left);
        }
        console.log(node.data);
        if (node.right) {
            this.inOrder(node.right);
        }
    }

    preOrder(node) {
        if (!this.root) {
            console.log("Tree is empty");
        }
        if (!node) {
            node = this.root;
        }
        console.log(node.data);
        if (node.left) {
            this.preOrder(node.left);
        }
        if (node.right) {
            this.preOrder(node.right);
        }
    }
    postOrder() {
        // FIX - what's wrong with this? repeating traversal output.
        const postOrder = (node, str) => {
            if (!this.root) {
                console.log("Tree is empty");
            }
            if (!node) {
                node = this.root;
                str = "";
            }
            if (node.left) {
                str += postOrder(node.left, str);
            }
            if (node.right) {
                str += postOrder(node.right, str);
            }
            str += ` --> ${node.data}`;
            return str;
        };
        console.log(postOrder());
    }
    getMin() {
        if (!this.root) {
            console.log("ERROR - tree is empty");
            return;
        }
        let currNode = this.root;
        while (currNode) {
            if (currNode.left) {
                currNode = currNode.left;
            } else {
                return currNode.data;
            }
        }
    }
    getMax() {
        if (!this.root) {
            console.log("ERROR - tree is empty");
            return;
        }
        let currNode = this.root;
        while (currNode) {
            if (currNode.right) {
                currNode = currNode.right;
            } else {
                return currNode.data;
            }
        }
    }
    find(data, node) {
        if (!node) {
            node = this.root;
        }
        if (data === node.data) {
            return node;
        } else if (data < node.data) {
            if (node.left) {
                return this.find(data, node.left);
            } else {
                console.log("Value doesn't exist in tree");
                return;
            }
        } else if (node.right) {
            return this.find(data, node.right);
        } else {
            console.log("Value doesn't exist in tree");
            return;
        }
    }
}

const bst = new BST();
bst.insert(4);
bst.insert(1);
bst.insert(2);
bst.insert(3);
bst.insert(5);

console.log("IN-ORDER");
bst.inOrder();

console.log("PRE-ORDER");
bst.preOrder();

console.log("POST-ORDER");
bst.postOrder();

console.log(bst.getMin());
console.log(bst.getMax());
console.log(bst.find(3));
