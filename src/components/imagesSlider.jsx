import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "../assets/icons/NextArrow.svg";
import PrevArrow from "../assets/icons/PrevArrow.svg";
import { ReactSVG } from "react-svg";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={
        "group bg-nin_slider hover:bg-nin_sliderhover flex content-center items-center"
      }
      style={{
        position: "absolute",
        top: "0px",
        margin: "0px",
        height: "90%",
        transition: "all 200ms ease-in-out 25ms",
        color: "{rgb(218, 218, 218)}",
        border: "none",
        cursor: "pointer",
        padding: "1rem",
        outlineOffset: "-2px",
        opacity: "1",
        transform: "translateZ(0px)",
        zIndex: "9",
        right: "0px",
        borderRadius: "0.75rem",
        boxSizing: "border-box",
      }}
      onClick={onClick}
    >
      <ReactSVG
        src={NextArrow}
        alt=""
        className="group-hover:scale-110 ease-in-out duration-200 text-white"
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={
        "group bg-nin_slider hover:bg-nin_sliderhover flex content-center items-center"
      }
      style={{
        position: "absolute",
        top: "0px",
        margin: "0px",
        height: "90%",
        transition: "all 200ms ease-in-out 25ms",
        color: "{rgb(218, 218, 218)}",
        border: "none",
        cursor: "pointer",
        padding: "1rem",
        outlineOffset: "-2px",
        opacity: "1",
        transform: "translateZ(0px)",
        zIndex: "9",
        left: "0px",
        borderRadius: "0.75rem",
        boxSizing: "border-box",
      }}
      onClick={onClick}
    >
      <ReactSVG
        src={PrevArrow}
        alt=""
        className="group-hover:scale-110 ease-in-out duration-200 text-white"
      />
    </div>
  );
}

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 6.6,
  slidesToScroll: 2,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 2,
      },
    },
  ],
};

const ImagesSlider = ({ data }) => {
  return (
    <Slider {...settings}>
      {data.map((item) => (
        <div key={item._id}>
          <img
            src={item.big_image}
            alt=""
            width={90}
            height={50}
            className="m-2 rounded-xl"
          />
        </div>
      ))}
    </Slider>
  );
};

export default ImagesSlider;
