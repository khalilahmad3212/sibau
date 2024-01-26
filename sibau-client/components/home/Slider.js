import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const Slider = () => {
  const [data, setData] = useState([]);
  useEffect(() => {}, []);
  return (
    <Carousel variant="dark" indicators={false}>
      <Carousel.Item>
        <img className="d-block w-100" src="slider-1.png" alt="First slide" />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="slider-2.webp" alt="Second slide" />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="slider-3.png" alt="Third slide" />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default Slider;
