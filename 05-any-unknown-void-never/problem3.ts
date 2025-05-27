// 문제 3. 아래 조건에 따라 코드를 작성하세요.

// 1. 로그 수준을 나타내는 enum을 작성하세요:
// Info
// Error
// Debug

// 2. 로그 함수 타입을 정의하세요. 이 함수는 다음 특징을 가집니다:
// message: 로그 메시지 (문자열)
// level: 로그 수준 (enum 값)
// 반환값이 없습니다. (void 타입)

// 3. 작성한 타입과 enum을 사용해 함수를 구현하세요:
// 로그 수준에 따라 다른 메시지를 출력합니다.
// - Info: [INFO] 메시지 앞에 [INFO] 출력
// - Error: 메시지 앞에 [ERROR] 출력
// - Debug: 메시지 앞에 [DEBUG] 출력

//

// 로그 수준을 나타내는 enum 작성
// 여기에 작성
enum LogLevel {
  Info = "Info",
  Error = "Error",
  Debug = "Debug",
}

// 로그 함수 타입을 정의하세요.
// 여기에 작성
type LogFunction = (message: string, level: LogLevel) => void;

// 로그 함수 구현
const logMessage: LogFunction = (message, level) => {
  // 여기에 구현
  switch (level) {
    case LogLevel.Info:
      console.log(`[INFO] ${message}`);
      break;
    case LogLevel.Error:
      console.error(`[ERROR] ${message}`);
      break;
    case LogLevel.Debug:
      console.debug(`[DEBUG] ${message}`);
    // no default
  }
};

// 테스트 코드
logMessage("시스템이 시작되었습니다.", LogLevel.Info);
logMessage("네트워크 연결 실패!", LogLevel.Error);
logMessage("디버깅 모드 활성화", LogLevel.Debug);
