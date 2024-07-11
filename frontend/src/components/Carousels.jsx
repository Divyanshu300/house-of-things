import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import carousel1 from '../utils/images/carousel1.webp'
import carousel2 from '../utils/images/carousel2.webp'
import carousel3 from '../utils/images/carousel3.webp'
import CustomDots from "./common/CustomDots";



const Carousels = () => {
       
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
      
      };
        return (
        <Carousel
          className='w-full h-full '
          swipeable={false}
          draggable={false}
          showDots={true}
          // customButtonGroup={}
          responsive={responsive}
        //   slidesToSlide={2}
          // ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2500}
          // keyBoardControl={true}
          // customTransition="all .5"
          transitionDuration={500}
        //   containerClass="carousel-container"
          // removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={this.props.deviceType}
          customDot={<CustomDots/>}
          arrows = {false }
        //   dotListClass="custom-dot-list-style "
        //   itemClass="carousel-item-padding-40-px"
        >
    <Link>
      <img src={carousel1} alt="..."/>
    </Link>
    <Link>
      <img src={carousel2} alt="..."/>
    </Link>
    <Link>
      <img src={carousel3} alt="..."/>
    </Link>
  </Carousel>
  )
}

export default Carousels