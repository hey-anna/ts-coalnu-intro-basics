// 문제5. 유니온 타입의 문제점과 해결 방법

// 1. 유니온 타입의 문제점
// 아래와 같은 두 가지 유니온 타입을 처리하는 함수가 있습니다:
// - Square: { type: "square"; side: number }
// - Circle: { type: "circle"; radius: number }
// - calculateArea라는 함수는 두 타입의 넓이를 계산하려고 하지만, 유니온 타입을 제대로 처리하지 않고 사용할 경우 런타임 에러가 발생할 가능성이 생길 수 있다. 이를 해결 방법을 작성하세요.

// 2. 해결 방법:
// 식별 가능한 유니온(type 속성)을 사용하여 타입을 안전하게 좁히는 코드를 작성하세요.
// exhaustiveness check를 추가하여, 새로운 타입이 추가되더라도 타입 안정성을 유지하도록 구현하세요.

// type Square = { type: "square"; side: number };
// type Circle = { type: "circle"; radius: number };

// type Shape = Square | Circle;

type Shape = { type: "square"; side: number } | { type: "circle"; radius: number };

// 넓이를 계산하는 함수
function calculateArea(shape: Shape): number {
  // 여기에 구현
  switch (shape.type) {
    case "square":
      return shape.side * shape.side;
    case "circle":
      return Math.PI * shape.radius ** 2;
    default:
      // 타입이 누락됐을 때 컴파일 에러를 발생시킴
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}

// 테스트 코드
console.log(calculateArea({ type: "square", side: 5 })); // 기대 출력: 25
console.log(calculateArea({ type: "circle", radius: 7 })); // 기대 출력: 153.93804002589985
