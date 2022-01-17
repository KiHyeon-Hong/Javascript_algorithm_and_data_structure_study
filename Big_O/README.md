# Big_O

- 더 좋은 코드라는 것은? 시간? 메모리?
- 동작의 횟수가 적은 코드

1. 숫자를 더하거나 빼거나 곱하거나 나누는 작업은 차이가 없음
2. 변수를 만드는 시간에도 차이가 없음
3. 인덱스를 찾는 시간은 일정함
4. 루프 안에서 발생하는 일은 N이 커짐에 따라 늘어남

## 공간복잡도 규칙

- Boolean, Number, undefined, null과 같은 기본형 타입은 모두 같은 저장공간을 갖는다.
- string은 길이와 같은 공간을 갖는다.
- 배열이나 참조형도 길이와 같은 공간을 갖는다.

- 삽입, 삭제, 검색에는 상수 시간을 갖는다.

## 배열 Big_O

- push: 1
- pop: 1
- shift: N
- unshift: N
- concat: N
- slice: N
- splice: N
- sort: NlogN
- forEach/map/filter/reduce: N

- 배열은 끝부분에서 삽입, 삭제가 가장 이상적이다.
