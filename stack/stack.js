class Stack {
    constructor() {
        // type declarations
        this.dataStore = [];
    }
    push(data) {
        if (!data) {
            console.log("No data is passed");
            return;
        }

        this.dataStore.push(data);
        console.log("successfully added to Stack: ", data);
    }
    pop() {
        if (!this.dataStore.length) {
            console.log("ERROR - Trying pop from Empty Stack");
            return;
        }

        const data = this.dataStore.pop();
        console.log("Data popped from Stack successfully", data);
    }
    peek() {
        if (!this.dataStore.length) {
            console.log("WARNING - Stack is Empty");
            return;
        }
        return this.dataStore[this.dataStore.length - 1];
    }
    size() {
        return this.dataStore.length;
    }
}

const stack = new Stack();
stack.push(10);
stack.push();
stack.pop();
