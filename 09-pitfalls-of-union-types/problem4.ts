// 문제 4. 아래와 같은 유니온 타입을 처리하는 함수를 작성하세요:

// Rectangle 객체: { width: number; height: number }
// Circle 객체: { radius: number }

// 함수는 다음 규칙에 따라 동작합니다:
// Rectangle이면 넓이를 반환합니다. (가로 × 세로)
// Circle이면 넓이를 반환합니다. (π × 반지름²)

type Rectangle = { width: number; height: number };
type Circle = { radius: number };

// 사용자 정의 타입 가드
function isRectangle(shape: unknown): shape is Rectangle {
  // 여기에 작성
  return (
    typeof shape === "object" &&
    shape !== null &&
    "width" in shape &&
    "height" in shape &&
    typeof (shape as any).width === "number" &&
    typeof (shape as any).height === "number"
  );
}

function calculateArea(shape: Rectangle | Circle): number {
  // 여기에 작성
  if (isRectangle(shape)) {
    return shape.width * shape.height;
  }

  return Math.PI * Math.pow(shape.radius, 2);
}

// 테스트 코드
console.log(calculateArea({ width: 10, height: 5 })); // 50
console.log(calculateArea({ radius: 7 })); // 153.93804002589985 (대략 π * 7²)
