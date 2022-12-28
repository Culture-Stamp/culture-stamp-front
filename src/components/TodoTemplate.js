import { useCallback, useRef, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'
import TodoInsert from './TodoInsert';
import TodoItemList from './TodoItemList';
import update from 'immutability-helper'

function TodoTemplate() {
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
      }),
    );
  };

  const moveCard = useCallback((dragIndex, hoverIndex) => {
    setTodos((preTodos) =>
      update(preTodos, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, preTodos[dragIndex]],
        ],
      }),
    );
  }, []);

  return (
    <div>
      <TodoInsert onSubmit={handleSubmit} />
      <DndProvider backend={HTML5Backend}>
        <TodoItemList todos={todos} onRemove={onRemove} onToggle={onToggle} moveCard={moveCard} />
      </DndProvider>
    </div>
  );
}

export default TodoTemplate;