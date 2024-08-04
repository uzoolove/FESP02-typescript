/**
 * 할일 한 건
 */
export interface TodoItemData {
  id: string,
  title: string,
  done: boolean,
}

/**
 * 할일 등록 시 title만 선택한 타입
 */
export type TodoRegistData = Omit<TodoItemData, 'id'>;

/**
 * 할일 수정 시 사용할 옵셔널 타입
 * 할일에서 id를 제외하고 모든 속성을 옵셔널로 지정
 */
export type TodoUpdateData = Partial<Omit<TodoItemData, 'id'>>;

/**
 * 할일 목록 조회시 API 서버의 응답 데이터 포맷
 */
export type TodoListResponse = TodoItemData[];