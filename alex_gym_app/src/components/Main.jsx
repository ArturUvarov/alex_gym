import gymCarousell from "../assets/gym_carousell.jpeg";
import gymCarousell2 from "../assets/gym_carousell2.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Main() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <main>
      <div className="text-white py-32 w-full">
        <Slider {...settings}>
          <div>
            <img
              src={gymCarousell}
              alt="Gym Carousel"
              className="w-full h-120"
            />
          </div>
          <div>
            <img
              src={gymCarousell2}
              alt="Gym Carousel"
              className="w-full h-120"
            />
          </div>
        </Slider>
      </div>
    </main>
  );
}
export default Main;
