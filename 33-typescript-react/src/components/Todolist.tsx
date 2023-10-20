import React, { useState, useRef } from 'react';
import { ToDoItem } from '../types/types';
import TodoItem from './TodoItem';

export default function Todolist() {
  const [todos, setTodos] = useState<ToDoItem[]>([]); // 전체 투두 목록
  const [newTodo, setNewTodo] = useState<string>(''); // 새로 추가될 투두 하나
  const inputRef = useRef<HTMLInputElement>(null);

  const addTodo = () => {
    // 배열에 새로운 todo 추가
    const updatedTodos = [
      ...todos,
      { id: Date.now(), text: newTodo, completed: false },
    ];

    setTodos(updatedTodos); // 전체 투두에 새로운 투두 추가
    setNewTodo(''); // input 초기화
  };

  // 투두 아이템 완료 상태 변경 함수
  const toggleComplete = (targetId: number) => {
    // console.log(`${targetId}번 투두 완료 상태 수정됨!!`);
    // 전체 todo를 돌아 일치하는 id의 completed를 반대로 변경
    const updatedTodos = todos.map((todo) => {
      return todo.id === targetId
        ? { ...todo, completed: !todo.completed }
        : todo;
    });
    setTodos(updatedTodos);
  };

  // useRef로 생성한 inputRef를 사용해 입력창에 포커싱
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // key down event 입력 시 투두 추가
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (event.nativeEvent.isComposing) {
        return;
      }
      addTodo();
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="add new todo!"
          ref={inputRef} // ref 연결
        />
        <button onClick={addTodo}>ADD</button>
        <button onClick={focusInput}>Focus</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={() => toggleComplete(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
}
