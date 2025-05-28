// 문제 1. 다양한 데이터 타입을 입력받아, 입력에 따라 다른 처리를 수행하는 함수를 작성하세요.

// 1.입력은 다음 세 가지 형태 중 하나입니다:
// 숫자 배열: 배열의 합계를 반환합니다.
// 문자열 배열: 배열의 모든 문자열을 연결한 결과를 반환합니다.
// 객체 { message: string }: message 속성을 대문자로 변환한 문자열을 반환합니다.

type InputType = number[] | string[] | { message: string };

// 매개변수, 리턴타입 정의필요
function processInput(input: InputType): number | string {
  // 여기에 작성
  const isArray = Array.isArray(input);
  const isNumberArray = isArray && (input as unknown[]).every((item) => typeof item === "number");
  const isStringArray = isArray && (input as unknown[]).every((item) => typeof item === "string");

  if (isNumberArray) {
    return (input as number[]).reduce((sum, num) => sum + num, 0);
  }

  if (isStringArray) {
    return (input as string[]).join("");
  }

  if (!isArray && typeof input === "object" && "message" in input && typeof input.message === "string") {
    return input.message.toUpperCase();
  }

  throw new Error("지원되지 않는 입력 형식입니다.");
}

// 테스트 코드
console.log(processInput([1, 2, 3])); // 6
console.log(processInput(["hello", "world"])); // "helloworld"
console.log(processInput({ message: "TypeScript" })); // "TYPESCRIPT"
console.log(processInput(42)); // 에러 발생
