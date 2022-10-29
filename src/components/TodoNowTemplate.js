import { useRef, useState } from 'react';
import styled from 'styled-components';
import TodoTitle from './TodoTitle';
import TodoInsert from './TodoInsert';
import TodoItemList from './TodoItemList';

function TodoNowTemplate() {
    const [todos, setTodos] = useState([]);

    const nextId = useRef(0);

    const handleSubmit = (text) => {
        const todo = {
        id: nextId.current,
        text,
        checked: false,
        };
        setTodos(todos.concat(todo));
        nextId.current += 1; // nextId를 1씩 더하기
    };

    const onRemove = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const onToggle = (id) => {
        setTodos(
          todos.map((todo) => {
           return todo.id === id ? { ...todo, checked: !todo.checked } : todo;
           })
        );
    };
    
    const handleBoxSubmit = () => {
      // axios post 로 todos 보내서 저장
      console.log(todos)
      // 성공하면 담긴 todos 초기화 하기
      setTodos([])
    }

    return (
      <div>
        <TodoTitle onSubmit={handleBoxSubmit}>&nbsp;SAVE</TodoTitle>
        <TodoInsert onSubmit={handleSubmit}/>
        <TodoItemList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
      </div>
    );
  }

export default TodoNowTemplate;