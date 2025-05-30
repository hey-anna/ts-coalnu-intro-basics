// 문제 4. 팀 관리 시스템을 설계하세요. 각 팀은 여러 멤버로 구성되며, 관리자는 특정 역할에 따라 데이터를 조작할 수 있습니다.

// 1. 기본 타입 정의:
// type TeamMember = {
//   id: number;
//   name: string;
//   email: string;
//   role: "developer" | "designer" | "manager";
//   isActive: boolean;
// };

// 2. 함수 요구사항:
// createTeamMember:
// 새 팀원을 생성하는 함수.
// Partial을 활용하여 입력 데이터 중 일부만 제공되더라도 기본값으로 초기화합니다.
// 기본값:
// role: "developer".
// isActive: true.

// filterTeamMembers:
// 특정 조건에 맞는 팀원만 필터링하는 함수.
// Pick을 사용해 필터링 기준을 정의합니다.
// 예: role: "designer" 또는 isActive: false.

// removeSensitiveInfo:
// 팀원 목록에서 민감한 정보를 제거하는 함수.
// Omit을 사용해 이메일 주소를 제외한 데이터를 반환합니다.

type TeamMember = {
  id: number;
  name: string;
  email: string;
  role: "developer" | "designer" | "manager";
  isActive: boolean;
};

// 1. `createTeamMember` 함수 작성
function createTeamMember(data: Partial<TeamMember> & Pick<TeamMember, "id" | "name">): TeamMember {
  // 여기에 구현
  return {
    id: data.id,
    name: data.name,
    email: data.email ?? "",
    role: data.role ?? "developer",
    isActive: data.isActive ?? true,
  };
}

// 2. `filterTeamMembers` 함수 작성
function filterTeamMembers(members: TeamMember[], filter: Pick<TeamMember, "role" | "isActive">): TeamMember[] {
  return members.filter((member) => member.role === filter.role && member.isActive === filter.isActive);
}

// 3. `removeSensitiveInfo` 함수 작성
function removeSensitiveInfo(members: TeamMember[]): Omit<TeamMember, "email">[] {
  // 여기에 구현
  return members.map(({ email, ...rest }) => rest);
}

// 테스트 코드
const members: TeamMember[] = [
  { id: 1, name: "Alice", email: "alice@example.com", role: "developer", isActive: true },
  { id: 2, name: "Bob", email: "bob@example.com", role: "designer", isActive: false },
  { id: 3, name: "Charlie", email: "charlie@example.com", role: "manager", isActive: true },
];

// 1. 새 팀원 생성
const newMember = createTeamMember({ id: 4, name: "Diana" });
console.log(newMember);
// 기대 출력: { id: 4, name: "Diana", email: "", role: "developer", isActive: true }

// 2. 필터링된 팀원 목록
const activeDesigners = filterTeamMembers(members, { role: "designer", isActive: true });
console.log(activeDesigners);
// 기대 출력: []

// 3. 민감한 정보 제거
const sanitizedMembers = removeSensitiveInfo(members);
console.log(sanitizedMembers);
// 기대 출력: [{ id: 1, name: "Alice", role: "developer", isActive: true }, ...]
