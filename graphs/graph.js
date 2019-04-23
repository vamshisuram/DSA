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
    }
    addEdge(p, q) {
        this.adj[p].push(q);
        this.adj[q].push(p);
        this.edges++;
    }
    toString() {
        // loop
        // - sub loop - append string
        // str reset

        let str = "";
        for (let i = 0; i < this.verticesCount; i++) {
            str += (i + " ->");
            let neighborsCount = this.adj[i].length;
            for (let j = 0; j < neighborsCount; j++) {
                str += (" " + this.adj[i][j]);
            }
            console.log(str + "\n");
            str = "";
        }
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
        for (let i = 0; i < this.adj[v].length; i++) {
            this.dfs(this.adj[v][i]);
        }
    }

    bfs(s) {
        // update visited
        // push to queue
        // while queue length, extract one
            // mark visited
            // find children and add to queue

        let q = [s];

        while (q.length) {
            let v = q.shift();
            this.visited[v] = true;
            console.log("vertex: ", v);
            let neighborsCount = this.adj[v].length;
            for (let i = 0; i < neighborsCount; i++) {
                let elm = this.adj[v][i];
                if (!this.visited[elm]) {
                    this.edgeTo[elm] = v;
                    q.push(elm);
                }
            }
        }
    }

    pathTo(v) {
        // we should have already traversed the graph. Then only we can tell if some node is reachable
        if (!this.visited[v]) {    
            return;
        }
        let source = 0;
        let path = [];

        /* add edge - (0, 1), (0, 2), (1, 3), (2, 4)
            [- 0 0 1 2] (parent nodes)
            [0 1 2 3 4] (nodes) - indexes
            for 4, parent node is 2. Now see for node index 2, which is parent? 0.
            so the path to 4 is 0 - 2 - 4.
        */

        for (let i = v; i !== source; i = this.edgeTo[i]) {
            path.push(i);
        }
        path.push(source);
        console.log(path.reverse().join(" -> "));
        return path;
    }
}

let g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);

g.toString();
// g.dfs();
g.bfs(0);
g.pathTo(4);