class Queue {
    constructor() {
        // type validation
        this.dataStore = [];
    }
    enqueue(data) {
        if (!data) {
            console.log("ERROR - data is not passed");
            return;
        }
        this.dataStore.push(data);
        console.log("SUCCESS - item queued: ", data);
    }
    dequeue() {
        if (!this.dataStore.length) {
            console.log("ERROR - queue is already empty");
            return;
        }
        const data = this.dataStore.shift();
        console.log("SUCCESS - item dequeued: ", data);
    }
    rear() {
        if (!this.dataStore.length) {
            console.log("ERROR - queue is empty");
            return;
        }
        console.log(this.dataStore[this.dataStore.length - 1]);
    }
    front() {
        if (!this.dataStore.length) {
            console.log("ERROR - queue is empty");
            return;
        }
        console.log(this.dataStore[0]);
    }
    print() {
        console.log("Queue: ", this.dataStore.toString());
    }
}

const q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.print();
q.dequeue();
q.print();
