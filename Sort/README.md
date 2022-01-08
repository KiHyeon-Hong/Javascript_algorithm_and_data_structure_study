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
- NlogN

## Quick sort

- 데이터를 재귀로 쪼개고, 0, 1개면 정렬이 되어 있음을 가지고 시작
- 기준보다 작은 것은 왼쪽, 큰 것은 오른쪽으로 이동
- 재귀

## Comparison sort

- 기수정렬: 2진수를 대상으로 한다. 자리수가 크면 숫자가 더 크다는 것을 이용한다.
- 끝 자리만 본다, 그 후 다시 배열로 묶으면, 끝자리가 정렬되어 있다.
- 그 다음 십의자리를 정렬한다.
- 점점 올라가면서 반복한다.
- 4자리 수가 있으면, 4번 반복한다.
- 중요한점은 그릇의 순서는 지켜야 한다.