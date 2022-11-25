import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    margin: 10px 0 20px 0;
`

const TextInput = styled.input`
  width: 30vw;
  padding: 10px;
  margin: 0 5px;
  border: 0;
  border-bottom: 1px solid #ccc;
  font-size: 12px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #d8e3e7;
    font-style: italic;
  }
`;

const AddButton = styled.button`
  width: 60px;
  height: 32px;
  border: 0;
  border-radius: 5px;
  background-color: #9F8585;
  color: white;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;


function TodoInsert(props){
    
    const [content, setContent] = useState("");
    const ref = useRef();

    // 이벤트가 발생할 때마다(글자가 하나씩 입력될 때 마다) 변화를 감지
    const handleChange = (e) => {
      setContent(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
          handleSubmit();
        }
    };
    
    const handleSubmit = (e) => {
      e.preventDefault(); // onSubmit 이벤트는 브라우저를 새로고치기 때문에 막아주기
      if (!content) return;
      // 만약 input 창이 빈채로 submit을 하려고 할 땐 return시키기
      props.onSubmit(content);
      setContent("");
      // submit을 한 후에는 input 창을 비우기
    };

    useEffect(() => {
        ref.current.focus();
      }, []);

    return(
        <Container>
            <form onSubmit={handleSubmit}>
                <TextInput
                    type="text"
                    name="text"
                    ref={ref}
                    placeholder="할 일을 입력하세요"
                    value={content}
                    onChange={handleChange}
                    autoFocus
                />
                <AddButton type="submit" onClick={handleSubmit} onKeyPress={handleKeyPress}>
                    ADD
                </AddButton>
            </form>
        </Container>
    )
}

export default TodoInsert;