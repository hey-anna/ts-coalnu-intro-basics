// 문제 2. 숫자 배열인지 문자열 배열인지 확인하는 함수를 작성하세요.

// 1. 함수 이름: isNumberArray
// 2. 입력: 제네릭 배열
// 3. 출력:
// 배열이 숫자 배열이면 true.
// 그렇지 않으면 false.

type ArrayType2<T> = T[];

// 매개변수, 리턴타입 정의 필요
function isNumberArray<T>(array: ArrayType2<T>): boolean {
  // 여기에 구현
  return array.every((item) => typeof item === "number");
}

// 테스트 코드
console.log(isNumberArray([1, 2, 3])); // true
console.log(isNumberArray(["a", "b", "c"])); // false
console.log(isNumberArray([])); // true (빈 배열은 숫자 배열로 간주)
