// 문제 4. 아래 조건에 따라 type을 확장하세요.
// 기본적으로 상품 정보를 나타내는 Product 타입을 만드세요. (id, name, price)
// 할인 정보를 나타내는 DiscountedProduct 타입을 만드세요. Product를 확장하되, 추가적으로 discount 속성을 가집니다. (discount: 숫자, 퍼센트 값)
// 작성한 뒤, 일반 상품과 할인 상품 객체를 만드세요.

// Product 타입 작성
// 여기에 작성
type Product = {
  id: number;
  name: string;
  price: number;
};

// DiscountedProduct 타입 작성 (Product 확장)
// 여기에 작성
type DiscountedProduct = Product & { discount: number };

const normalProduct: Product = {
  id: 1,
  name: "Laptop",
  price: 1000,
};

const discountedProduct: DiscountedProduct = {
  id: 2,
  name: "Smartphone",
  price: 800,
  discount: 10,
};
