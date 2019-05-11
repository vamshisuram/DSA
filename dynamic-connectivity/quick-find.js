// quick-find
// easier to find if they are connection
// just checking id[p] === id[q]
// to do this - while union, we find what all elements have id[p]. And change all of them to id[q]

class UnionFind {
    constructor(n) {
        this.data = (new Array(n)).fill(0).map((x, idx) => idx);
    }
    union(p, q) {
        // find all the elms with id of p
        // replace with id of q
        const data = this.data;
        const idq = data[q];
        const idp = data[p];
        for (let i = 0; i < data.length; i++) {
            if (data[i] === idp) {
                data[i] = idq;
            }
        }
        console.log(data);
    }
    connected(p, q) {
        // if idp same as idq, return true
        return this.data[p] === this.data[q];
    }
}

let uf = new UnionFind(10);
uf.union(2,3);
uf.union(4,3);
uf.union(5, 3);
console.log(uf.connected(2,5));

