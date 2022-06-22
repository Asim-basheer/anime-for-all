import { Carousel } from "react-bootstrap";
import {
  HiOutlineArrowCircleLeft,
  HiOutlineArrowCircleRight,
} from "react-icons/hi";

function Slider({ variant = "dark", data = [] }) {
  return (
    <Carousel
      variant={variant}
      prevIcon={<HiOutlineArrowCircleLeft className="fs-2" />}
      nextIcon={<HiOutlineArrowCircleRight className="fs-2" />}
      indicators={false}
      interval={null}
    >
      {data.map(({ animePic, animeName, animeDes }, index) => {
        return (
          <Carousel.Item key={index}>
            <img
              className="d-block img-fluid rounded"
              src={animePic}
              alt="First slide"
            />
            <Carousel.Caption className="text-start">
              <h3>{animeName}</h3>
              <p>{animeDes}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default Slider;
