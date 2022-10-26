import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// head부분
const Head = styled.header`
  position: fixed;
  top: 0;
  padding-top: ${(props) => props.scrollActive || '15vh'};
  z-index: 999;
  background-color: #e5e7eb;
`;

const Title = styled.span`
  width: 100vw;
  font-size: 17px;
  font-weight: 600;
`;

// 카테고리 부분
const Category = styled.div`
  display: none;
  /* justify-content: center; */
  margin-top: 10px;
`;
const CategoryList = styled.div`
  margin-right: 15px;
`;

// 메뉴 부분
const Menu = styled.nav`
  display: flex;
  justify-content: center;
  width: 100vw;
  margin: 50px 0 30px 0;
`;

const MenuList = styled(Link)`
  margin: 0 15px;
  font-size: 11px;
  color: black;
  text-decoration: none;
  &:hover {
    font-weight: 700;
  }
  &:nth-child(1):hover {
    margin-right: -30px;
  }
  &:nth-child(1):hover ${Category} {
    display: flex;
    font-weight: 500;
  }
`;

// 글 추가 버튼 부분
const ButtonSection = styled.div`
  display: flex;
  justify-content: center;
`;

const AddButton = styled(Link)`
  margin-left: 80%;
  font-size: 32px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    font-size: 34px;
  }
`;

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollActive, setScrollActive] = useState(false);

  // 스크롤 움직임 확인하는 함수
  const scrollFixed = () => {
    if (scrollY > 10) {
      setScrollY(window.pageYOffset);
      setScrollActive(true);
    } else {
      setScrollY(window.pageYOffset);
      setScrollActive(false);
    }
  };

  // 스크롤 감지 시 scrollFixed 함수 실행
  useEffect(() => {
    const scrollListener = () => {
      window.addEventListener('scroll', scrollFixed);
    };
    scrollListener();
    return () => {
      window.removeEventListener('scroll', scrollFixed);
    };
  });
  return (
    <Head scrollActive={scrollActive ? '7vh' : ''}>
      <Title>C U L T U R E S T A M P</Title>
      <Menu>
        <MenuList>
          CATEGORY
          <Category className="category">
            <CategoryList>Movie</CategoryList>
            <CategoryList>Memo</CategoryList>
            <CategoryList>Book</CategoryList>
            <CategoryList>Music</CategoryList>
          </Category>
        </MenuList>
        <MenuList to="/date">DATE</MenuList>
        <MenuList to="/todo">TODO</MenuList>
        <MenuList to="/my-page">MYPAGE</MenuList>
        <MenuList to="/login">LOGIN</MenuList>
      </Menu>

      <ButtonSection>
        <AddButton>+</AddButton>
      </ButtonSection>
    </Head>
  );
};

export default Header;
