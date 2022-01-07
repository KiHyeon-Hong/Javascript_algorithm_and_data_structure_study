# Sort

- arr.sort의 기본 값은 유니코드 순서 -> string
- a - b: 오름차순
- b - a: 내림차순
- string1.length - string2.length: string 길이 오름차순 정렬

## Bubble sort

- 첫번째 루프가 끝나면 가장 큰 수가 맨뒤로 온다.
- 한칸씩 옮겨가며, n - i까지 비교 후 정렬

## Selection sort

- 가장 작은 값을 찾아서 맨 앞의 값과 자리를 바꾼다.

## Insert sort

- 한칸씩 옮겨가며 나오는 숫자가, 앞쪽의 어느 부분에 들어갈 지 탐색
- 데이터가 실시간으로 들어올때는 삽입정렬이 유리하다.

## Merge sort

- 분리, 정렬, 병합
- 배열이 비어 있거나, 1개만 있다면 정렬이 완료되었다는 것을 의미함
