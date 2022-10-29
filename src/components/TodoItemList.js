import React from "react";
import styled from "styled-components";

import TodoItem from "./TodoItem";

function TodoItemList({todos, onRemove, onToggle}) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default TodoItemList;