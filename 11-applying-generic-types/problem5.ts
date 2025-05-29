// 문제 5. 키와 값을 받아 객체를 생성하는 함수를 작성하세요.
// 1. 함수 이름: createObject
// 2. 입력:
// - key: 키 (제네릭 타입 K)
// - alue: 값 (제네릭 타입 V)
// - 출력: { key: value } 형태의 객체

function createObject<K extends PropertyKey, V>(key: K, value: V): { [P in K]: V } {
  // 여기에 구현
  return { [key]: value } as { [P in K]: V };
}

// 테스트 코드
console.log(createObject("id", 123)); // { id: 123 }
console.log(createObject("name", "Alice")); // { name: "Alice" }
