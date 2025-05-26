// 문제 6. 주어진 값이 원시 타입인지 아닌지 확인하는 함수를 작성하세요.
// 힌트: unknown타입은 무슨 타입이던 다 받을 수 있는 타입이다. (뒤에서 배울 예정)
// 힌트: Object() 를 공부해보세요

function isPrimitive(value: unknown): boolean {
  // 여기에 구현
  if (value === null) {
    return true;
  } else {
    return Object(value) !== value;
  }
}

// 함수 호출 예시
console.log(isPrimitive("Hello")); // true
console.log(isPrimitive(42)); // true
console.log(isPrimitive(false)); // true
console.log(isPrimitive(null)); // true
console.log(isPrimitive(undefined)); // true
console.log(isPrimitive({})); // false
console.log(isPrimitive([])); // false
