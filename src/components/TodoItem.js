import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 3px 0;
  overflow: auto;
`

const DoneButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border: 0.1px solid #ccc;
  border-radius: 50%;
  background-color: transparent;
  font-size: 7px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const Topic = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 300px;
  height: 30px;
  padding: 0 10px;
  margin: 0 10px;
  font-size: 14px;
`;

const DeleteButton = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;


function TodoItem({todo, onRemove, onToggle }) {
    const { id, text, checked } = todo;
  return (
    <Container>
      <DoneButton onClick={() => onToggle(id)}>
        {checked ? "ok" : null}
      </DoneButton>
      <Topic
        style={{
          textDecoration: checked ? "line-through" : null,
          color: checked ? "#ccc" : "#000",
        }}
      >
        {text}
      </Topic>
      <DeleteButton onClick={() => onRemove(id)}>
        x
      </DeleteButton>
    </Container>
  );
}

export default TodoItem;