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
import Header from './Header';

// 전체 CSS 적용
const MainBackground = styled.div`
  width: 100vw;
  height: 100%;
  margin-left: calc(-50vw + 50%);
  text-align: center;
  background: #e5e7eb;
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
  return (
    <MainBackground>
      <Header />
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
