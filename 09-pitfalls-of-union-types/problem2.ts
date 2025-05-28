// 문제2. 다음 조건을 만족하는 코드를 작성하세요.

// 1. 아래와 같은 두 개의 클래스를 정의합니다:
// Car 클래스: brand(브랜드 이름, 문자열) 속성을 가집니다.
// Bike 클래스: type(바이크 종류, 문자열) 속성을 가집니다.

// 2. 입력값이 Car 또는 Bike의 인스턴스일 수 있는 vehicle을 받아 다음 규칙에 따라 처리하는 함수를 작성하세요:
// Car이면 브랜드 이름을 대문자로 반환합니다.
// Bike이면 바이크 종류 앞에 "Bike: "를 추가하여 반환합니다.

// 클래스 정의
class Car {
  constructor(public brand: string) {}
}

class Bike {
  constructor(public type: string) {}
}

function processVehicle(vehicle: unknown): string {
  // 여기에 구현
  if (vehicle instanceof Car) {
    return vehicle.brand.toUpperCase();
  }

  if (vehicle instanceof Bike) {
    return `Bike: ${vehicle.type}`;
  }

  throw new Error("지원되지 않는 vehicle 타입입니다.");
}

// 테스트 코드
const myCar = new Car("Tesla");
const myBike = new Bike("Mountain");

console.log(processVehicle(myCar)); // "TESLA"
console.log(processVehicle(myBike)); // "Bike: Mountain"
console.log(processVehicle("unknown")); // 에러 발생
