class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    // 무방향 그래프
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacencyVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacencyVertex);
    }

    delete this.adjacencyList[vertex];
  }
}

let graph = new Graph();

graph.addVertex('Dallas');
graph.addVertex('Tokyo');
graph.addVertex('Aspen');

graph.addEdge('Tokyo', 'Dallas');
graph.addEdge('Tokyo', 'Aspen');
console.log(graph.adjacencyList);

graph.removeEdge('Tokyo', 'Aspen');
console.log(graph.adjacencyList);

graph.addEdge('Tokyo', 'Aspen');
console.log(graph.adjacencyList);

graph.removeVertex('Dallas');
console.log(graph.adjacencyList);
