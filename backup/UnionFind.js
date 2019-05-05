class UnionFind {
    constructor(n) {
        this.nodes = (new Array(n)).map((_, idx) => {
            return {rank: 0, };
        })
    }
}

x = (new Array(5)).map((_, idx) => {
    console.log("hi");
    return { rank: 0, };
})