// 문제1. 상품(Product)과 할인(Discount) 정보를 병합하여 새로운 타입을 정의하고, 할인 적용 후의 가격을 계산하는 함수를 작성하세요.

// 1. Product 타입:
// id: 숫자
// name: 문자열
// price: 숫자

// 2. Discount 타입:
// discountPercentage: 숫자

// Product & Discount 타입을 기반으로 할인된 가격을 반환하는 함수를 작성하세요:

// 3. 함수 이름: calculateDiscountedPrice
// 입력: 교차 타입 객체
// 출력: 할인된 가격(숫자)

// Product 타입 정의
// 여기에 작성
type Product2 = {
  id: number;
  name: string;
  price: number;
};

// Discount 타입 정의
// 여기에 작성
type Discount = {
  discountPercentage: number;
};

type Combined = Product2 & Discount;

function calculateDiscountedPrice(item: Combined): number {
  // 여기에 구현
  const discountAmount = item.price * (item.discountPercentage / 100);
  return item.price - discountAmount;
}

// 테스트 코드
const discountedProduct2 = {
  id: 101,
  name: "Laptop",
  price: 1000,
  discountPercentage: 20,
};

console.log("result :", calculateDiscountedPrice(discountedProduct2)); // 800
