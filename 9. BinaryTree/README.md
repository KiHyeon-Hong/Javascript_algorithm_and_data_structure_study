# Binary Search Tree

- 각 노드가 최대 2개의 자식을 가져야 함(0, 1, 2)
- 데이터가 순서대로 정렬이되어 있음

- insert: o(log n)
- searching: o(log n)

# BFS

- 큐를 이용
- 큐에 값이 존재한다면, 루프를 돌리기

# DFS

- 전위 탐색: 루트 -> 왼쪽 -> 오른쪽
- 중위 탐색:왼쪽 -> 루트 -> 오른쪽
- 후위 탐색: 왼쪽 -> 오른쪽 -> 루트

# BFS VS DFS

- 너비 우선탐색은 큐를 이용한다. 100레벨이면? 큐에는 엄청많은 데이터가 사용된다.
- 언제 어떤 탐색을 사용하는 지는 상황에 따라 다르다.