// 문제 2. 아래 조건에 따라 함수를 작성하세요.
// 1. 작업 상태를 나타내는 enum:

// Pending: 작업 대기 중
// InProgress: 작업 진행 중
// Completed: 작업 완료
// Failed: 작업 실패

// 2. 함수의 요구사항:

// - 함수는 작업 상태(TaskStatus)와 입력값(unknown)을 받습니다.
// - input은 문자열이어야 합니다.
// - 문자열을 작업 상태에 따라 가공합니다:
// L Pending: 문자열을 모두 대문자로 변환.
// L InProgress: 문자열을 소문자로 변환.
// L Completed: 문자열 앞에 "완료: "를 추가.
// L Failed: 에러를 발생시킵니다.
// - 작업 상태가 Failed면 에러를 발생시켜야 합니다.
// - 최종 결과로 가공된 문자열 배열을 반환합니다.
// > 힌트 : typeof를 사용하면 타입을 알 수 있다.

// 작업 상태를 나타내는 enum 작성
enum TaskStatus2 {
  Pending = "Pending",
  InProgress = "InProgress",
  Completed = "Completed",
  Failed = "Failed",
}

// 여기에 작성
function processTask(status: TaskStatus2, input: unknown): string {
  if (typeof input !== "string") {
    throw new Error("input은 문자열이어야 합니다.");
  }

  switch (status) {
    case TaskStatus2.Pending:
      return input.toUpperCase();

    case TaskStatus2.InProgress:
      return input.toLowerCase();

    case TaskStatus2.Completed:
      return `완료: ${input}`;

    case TaskStatus2.Failed:
      throw new Error("작업이 실패했습니다.");

    default:
      throw new Error("알 수 없는 작업 상태입니다.");
  }
}

// 테스트 코드
console.log(processTask(TaskStatus2.Pending, "task1"));
// 기대 출력: "TASK1"

console.log(processTask(TaskStatus2.InProgress, "TaskA"));
// 기대 출력: "taska"

console.log(processTask(TaskStatus2.Completed, "Report1"));
// 기대 출력: "완료: Report1"

console.log(processTask(TaskStatus2.Failed, "TaskX"));
// 에러: 작업이 실패했습니다.

console.log(processTask(TaskStatus2.Pending, 42));
// 에러: 입력값은 문자열이어야 합니다.
