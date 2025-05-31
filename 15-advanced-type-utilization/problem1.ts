// 문제은행 15. 타입 활용하기

// 문제 1. 함수의 반환 타입만 추출하는 유틸리티 타입을 작성하세요.

// 1. 요구사항:
// 타입 이름: ExtractReturnType<F>.
// 입력: 함수 타입 F.
// 출력: 함수의 반환 타입.

// 2. 테스트 코드:
// 함수 타입에 따라 반환 타입을 추출하세요.

type ExtractReturnType<F> = F extends (...args: any[]) => infer R ? R : never;

// 테스트 코드
type Test1 = ExtractReturnType<() => string>; // 기대 결과: string
type Test2 = ExtractReturnType<(x: number) => boolean>; // 기대 결과: boolean
type Test3 = ExtractReturnType<(x: number, y: string) => { id: number }>; // 기대 결과: { id: number }
