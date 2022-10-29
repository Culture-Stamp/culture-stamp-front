import { useState } from 'react';
import TodoTitle from './TodoTitle';
import TodoItemList from './TodoItemList';

function TodoPrevTemplate() {

    const [todos, setTodos] = useState([]);

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

    return (
      <div>
        <TodoTitle>TODO</TodoTitle>
        <TodoItemList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
      </div>
    );
  }

export default TodoPrevTemplate;