// 문제3. 다음 조건을 만족하는 조건부 타입과 함수를 작성하세요.

// 1. 조건부 타입 정의

// 타입 이름: IsArray<T>
// 입력 타입 T가 배열 타입이면 true를 반환합니다.
// 그렇지 않으면 false를 반환합니다.

// 2. 조건부 타입을 활용하는 함수

// 함수 이름: checkArrayType
// 입력: unknown 타입의 값.
// 출력: 입력값이 배열이면 "This is an array."를, 그렇지 않으면 "This is not an array."를 반환합니다.

// 조건부 타입 정의
type IsArray<T> = T extends any[] ? true : false;

// 조건부 타입을 활용한 함수
function checkArrayType<T>(value: T): string {
  // 여기에 작성
  return Array.isArray(value) ? "This is an array." : "This is not an array.";
}

// 테스트 코드
console.log(checkArrayType([1, 2, 3])); // "This is an array."
console.log(checkArrayType("Hello")); // "This is not an array."
console.log(checkArrayType({ key: "value" })); // "This is not an array."
