// set of vertices and edges

class Graph {
    constructor(verticesCount) {
        this.verticesCount = verticesCount;
        this.edges = 0;
        this.edgeTo = [];
        this.adj = [];
        for (let i = 0; i < this.verticesCount; i++) {
            this.adj[i] = [];
        }
        this.visited = (new Array(5)).fill(false);
        this.bfsq = [];
        this.courses = ["CS1", "CS2", "Assem", "DS", "OperSys", "Algos"];
    }
    addEdge(p, q) {
        this.adj[p].push(q);
        this.edges++;
    }

    dfs(v) {
        if (!v) {
            v = 0;
        }
        if (this.visited[v]) {    // if graphs have cycles
            return;
        }
        this.visited[v] = true;
        console.log("vertex visited: ", v);
        console.log("course: ", this.courses[v]);
        const neighborsCount = this.adj[v] ? this.adj[v].length : 0;
        for (let i = 0; i < neighborsCount; i++) {
            this.dfs(this.adj[v][i]);
        }
    }
}

let g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(1, 2);
g.addEdge(1, 3);
g.addEdge(3, 4);
g.addEdge(3, 5);
g.dfs();