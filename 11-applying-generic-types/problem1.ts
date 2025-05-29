// 문제 1. 배열의 첫 번째 요소를 반환하는 함수를 작성하세요. 배열의 요소 타입에 관계없이 작동해야 합니다.

// 1.함수 이름: getFirstElement
// 2.입력: 제네릭 배열
// 3.출력: 배열의 첫 번째 요소

// 제너릭 : <T>
type ArrayType<T> = T[];

// 매개변수, 리턴타입 정의 필요
// function getFirstElement<T>(array: T[]): T | undefined {
function getFirstElement<T>(array: ArrayType<T>): T | undefined {
  // 여기에 구현
  return array[0];
}

// 테스트 코드
console.log(getFirstElement([1, 2, 3])); // 1
console.log(getFirstElement(["a", "b", "c"])); // "a"
console.log(getFirstElement([])); // undefined

// 랭쓰가 있으면 첫번째 요소 출력
