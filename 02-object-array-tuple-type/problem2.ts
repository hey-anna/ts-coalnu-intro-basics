// 문제2. 읽기 전용(readonly) 배열을 생성하고, 배열에 직접 값을 추가하거나 변경하려고 하면 오류가 발생해야 합니다.

// 숫자만 담을 수 있는 읽기 전용 배열을 작성하세요.

let numbers: readonly number[] = [1, 2, 3];

// 아래 코드는 오류가 발생해야 합니다.
// numbers.push(4);
// numbers[0] = 42;

// [참고코드]
// let numbers: number[] = [1, 2, 3, 4];
// let b: { readonly name: string; age?: number } = { name: "noona" };
