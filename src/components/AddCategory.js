import { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

function AddCategory () {  
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    return(
        <div>
            <div onClick={openModal}>+</div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <Title>Add Category</Title>
                <Form>
                    <Input placeholder='카테고리를 입력하세요'/>
                    <Submitbutton onClick={closeModal}>등록</Submitbutton>
                </Form>
            </Modal>
        </div>
    )
}

// CSS
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Title = styled.h2`
  margin-top: 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #d8e3e7;
    font-style: italic;
  }
`;

const Submitbutton = styled.button`
  width: 50px;
  margin-top: 15px;
  border: none;
`;

export default AddCategory;