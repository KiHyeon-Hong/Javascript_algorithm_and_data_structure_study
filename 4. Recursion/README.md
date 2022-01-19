# Recursion

- 스스로를 호출하는 함수
- JSON.parse/JSON.stringify도 재귀 함수

## Helper

- 외부 메소드가 내부에 정의되어 있는 재귀 함수를 호출

## Tip

- 배열을 사용해야 하고, 헬퍼 함수가 아니라 일반 재귀로 답을 내야 한다면, slice, spread operator, concat과 같은 메소드를 사용해서 배열을 복사하여, 원래 배열을 손상시키지 않고, 쌓아나갈 수 있음
- String은 복사가 불가능하므로, slice나 substring을 통해 사본을 만들어야 함
- 객체의 경우 object.assign, spread operator을 사용할 수 있음
