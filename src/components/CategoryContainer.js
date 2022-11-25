import Slider from "react-slick"; 
import "../styles/slick.css";
import "../styles/slick-theme.css";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledSlider = styled(Slider)`
    height: 90%; //슬라이드 컨테이너 영역

    .slick-list {  //슬라이드 스크린
        width: 10%;
        height: 100%;
        margin: 0 auto;
        overflow-x: hidden;
        @media (max-width: 720px) {
            width: 20%;
        }
    }

    .slick-slide div { 
    /* cursor: pointer; */
    }

    .slick-dots { 
        bottom: 20px;
        margin-top: 200px;
    }

    .slick-track { 
        width: 100%;
    }

    .slick-prev {
        left: 42% !important;
        z-index: 1;
        @media (max-width: 720px) {
            left: 32% !important;
        }
    }
    .slick-next {
        right: 42% !important;
        z-index: 1;
        @media (max-width: 720px) {
            right: 32% !important;
        }
    }
`;

const CategoryList = styled(Link)`
  margin-right: 15px;
  text-decoration: none;
  color: #000;
`;
  

function CategoryContainer () {
  
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };

    return (
        <div>
            <StyledSlider {...settings}>
                <CategoryList to="/movie">Movie</CategoryList>
                <CategoryList to="/memo">Memo</CategoryList>
                <CategoryList to="/book">Book</CategoryList>
                <CategoryList to="/music">Music</CategoryList>
            </StyledSlider>
        </div>
    );
}

export default CategoryContainer;
