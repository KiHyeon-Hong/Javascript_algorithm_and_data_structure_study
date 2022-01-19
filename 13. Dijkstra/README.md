# Dijkstra's Algorithm

- 다익스트리 최단거리 알고리즘
- 그래프의 두 정점 사이의 최단거리를 찾는 알고리즘

## Dijkstra's Algorithm 설명

- 가중 그래프

1. 시작점까지의 거리는 0, 그 외의 노드는 Infinity
2. 시작점과 인접한 모드의 거리를 측정하고, 현재 거리(infinity)와 비교
3. 더 짧은 거리를 저장
   1. 만약, 현재 측정한 거리가 더 짧다면, 이전 노드 목록에 해당 노드로 변경 (기본값은 null)
4. 시작점은 측정이 끝났으므로, 완료 목록에 추가
5. 완료 목록에 없는 노드 중 거리가 가장 짧은 노드를 선택
6. 해당 노드까지 오기 위한 최단 거리 + 노드와 인접한 노드까지의 거리
   1. 만약 계산한 값이 저장되어 있는 거리보다 짧다면 해당 노드를 이전 노드로 변경 후 거리 저장
7. 해당 노드는 완료 목록에 추가
8. 5 ~ 7까지의 프로세스를 반복
9. 모든 노드에 대해 완료 했다면, 종료