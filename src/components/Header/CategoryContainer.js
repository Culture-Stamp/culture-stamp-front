import Slider from "react-slick"; 
import "../../styles/slick.css";
import "../../styles/slick-theme.css";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AddCategoryModal from "./AddCategoryModal";
import DeleteCategoryModal from './DeleteCategoryModal';

function CategoryContainer ({category}) {
  
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
        <div>
            <StyledSlider {...settings}>
                {category.map((category) => (
                    <CategoryList to={{
                      pathname: `/${category.categoryName}`}}
                      key={category.id}>
                        {category.categoryName}
                    </CategoryList>
                ))}
                <AddCategoryModal text="카테고리 등록" />
                <DeleteCategoryModal text="카테고리 삭제" category={category}/>
            </StyledSlider>
        </div>
    );
}

const StyledSlider = styled(Slider)`
  height: 90%; //슬라이드 컨테이너 영역

  .slick-list {
    //슬라이드 스크린
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
`


export default CategoryContainer;
