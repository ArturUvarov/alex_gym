import gymCarousell from "../assets/gym_carousell.jpeg";
import gymCarousell2 from "../assets/gym_carousell2.jpg";
import gymCarousell3 from "../assets/gym_carousell3.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GoogleMapReact from "google-map-react";

function Main() {
  const AnyReactComponent = ({ text }) => (
    <div className="text-5xl">{text}</div>
  );
  const defaultProps = {
    center: {
      lat: 55.6638944,
      lng: 21.1921132,
    },
    zoom: 11,
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <main className="mb-32">
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent lat={55.6638944} lng={21.1921132} text="AlexGym" />
        </GoogleMapReact>
      </div>
      <div className="py-2 w-full">
        <Slider {...settings}>
          <div>
            <img
              src={gymCarousell}
              alt="Gym Carousel"
              className="w-full h-[600px] object-cover"
            />
          </div>
          <div>
            <img
              src={gymCarousell2}
              alt="Gym Carousel"
              className="w-full h-[600px] object-cover"
            />
          </div>
          <div>
            <img
              src={gymCarousell3}
              alt="Gym Carousel"
              className="w-full h-[600px] object-cover"
            />
          </div>
        </Slider>
      </div>
      <div className="bg-gray-900/75 text-white text-center py-16 mt-16">
        <h1 className="text-4xl font-bold mb-4">Welcome to Alex's Gym</h1>
        <p className="text-lg">example</p>
      </div>

      <div className="bg-gray-900/75 text-white text-center py-16 mt-16">
        <h1 className="text-4xl font-bold mb-4">Kainos box</h1>
      </div>
    </main>
  );
}

export default Main;
