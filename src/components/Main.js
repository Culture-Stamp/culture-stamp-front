import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// 임시 이미지 import
import Img1 from '../assets/images/1.jpg';
import Img2 from '../assets/images/2.jpg';
import Img3 from '../assets/images/3.jpg';
import Img4 from '../assets/images/4.jpg';
import Img5 from '../assets/images/5.jpg';
import Img6 from '../assets/images/6.jpg';
import Img7 from '../assets/images/7.jpg';
import Img8 from '../assets/images/8.jpg';
import Img9 from '../assets/images/9.jpg';

// 전체 CSS 적용
const MainBackground = styled.div`
  width: 100vw;
  height: 100%;
  margin-left: calc(-50vw + 50%);
  text-align: center;
  background: #e5e7eb;
`;

// header부분
const Head = styled.header`
  position: fixed;
  top: 0;
  padding-top: ${(props) => props.scrollActive || '15vh'};
  z-index: 999;
  background-color: #e5e7eb;
`;

const Title = styled.span`
  width: 100vw;
  font-size: 20px;
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
  font-size: 14px;
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
  &:nth-child(5) {
    font-weight: 600;
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

// 메인 부분
const MainSection = styled.section`
  position: relative;
  top: 310px;
  //top: 50px;
  max-width: 93.5rem;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Container = styled.div`
  max-width: 93.5rem;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Thumbnail = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -1rem -1rem;
  padding-bottom: 3rem;

  @supports (display: grid) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
    width: auto;
    margin: 0;
  }
`;

const ThumbnailItem = styled.div`
  position: relative;
  flex: 1 0 22rem;
  margin: 1rem;
  color: #fff;
  cursor: pointer;
`;

const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

function Main() {
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
    <MainBackground>
      {/* 스크롤 감지 시 padding 조절 */}
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
      <MainSection>
        <Container>
          <Thumbnail>
            <ThumbnailItem>
              <ThumbnailImage src={Img1} alt="image1" />
            </ThumbnailItem>
            <ThumbnailItem>
              <ThumbnailImage src={Img2} alt="image2" />
            </ThumbnailItem>
            <ThumbnailItem>
              <ThumbnailImage src={Img3} alt="image3" />
            </ThumbnailItem>
            <ThumbnailItem>
              <ThumbnailImage src={Img4} alt="image4" />
            </ThumbnailItem>
            <ThumbnailItem>
              <ThumbnailImage src={Img5} alt="image5" />
            </ThumbnailItem>
            <ThumbnailItem>
              <ThumbnailImage src={Img6} alt="image6" />
            </ThumbnailItem>
            <ThumbnailItem>
              <ThumbnailImage src={Img7} alt="image7" />
            </ThumbnailItem>
            <ThumbnailItem>
              <ThumbnailImage src={Img8} alt="image8" />
            </ThumbnailItem>
            <ThumbnailItem>
              <ThumbnailImage src={Img9} alt="image9" />
            </ThumbnailItem>
          </Thumbnail>
        </Container>
      </MainSection>
    </MainBackground>
  );
}

export default Main;
