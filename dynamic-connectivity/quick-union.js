// quick union
// - union is faster here
// p's root is now a child of q's root
// - connected?
// if root of p and q is same, they are connected

class UnionFind {
    constructor(n) {
        this.data = (new Array(n)).fill(0).map((x, idx) => idx);
        this.size = (new Array(n)).fill(1);
    }
    root(p) {
        while (p !== this.data[p]) {
            /* Path compression - every other node jump shorting */
            this.data[p] = this.data[this.data[p]];
            
            p = this.data[p];
        }
        return p;
    }
    union(p, q) {
        // make p's root, a child of q's root
        let rootP = this.root(p);
        let rootQ = this.root(q);

        /* Adding weightage to have shorter trees */
        if (this.size[rootP] <= this.size[rootQ]) {
            this.data[rootP] = rootQ;
            this.size[rootQ] += this.size[rootP];
        } else {
            this.data[rootQ] = rootP;
            this.size[rootP] += this.size[rootQ];
        }

        /* Base logic */
        // this.data[rootP] = rootQ;
        console.log(this.data);
    }
    connected(p, q) {
        return (this.root(p) === this.root(q));
    }
}

let uf = new UnionFind(5);
uf.union(2, 3);
uf.union(4, 2);
uf.union(4, 3);
uf.union(3, 1);
console.log(uf.connected(2, 4));

