# Graph

- 연결이 중요하다

## Vertex

- A node

## Edge

- 간선

- 방향 그래프, 무방향 그래프
- 가중치 그래프, 비가중치 그래프

## Adjacency matrix

- 행렬로 표시?

```javascript
[
  [0,1,0,0,0],
  [...],
  [...],
  [...],
  [...]
]
```

## Adjacency list

```javascript
[
  [1, 5],
  [0, 2],
];

{
  A: ['b', 'c'],
  B: ['c', 'a'],
  ...
}
```

## Big_O

- |v| is number of vertices
- |E| is number of edges

### Adjacency matrix - 공간을 좀 더 차지한다

- Add Vertex: O(|v^2|)
- Add Edge: O(1)
- Remove Vertex: O(|V^2|)
- Remove Edge: O(1)
- Query: O(1)
- Storage: O(|V^2|)

### Adjacency list - 실제 연결만 저장한다, 모든 간선을 탐색하는 것은 빠르지만, 특정 간선이 있는지 확인하는 것은 좀 더 느리다

- Add Vertex: O(1)
- Add Edge: O(1)
- Remove Vertex: O(|v| + |E|)
- Remove Edge: O(|E|)
- Query: O(|v| + |E|)
- Storage: O(|v| + |E|)

# 그래프의 순회

- DFS VS BFS
