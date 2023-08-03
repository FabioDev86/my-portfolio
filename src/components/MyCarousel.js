import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MyCarousel(props) {
  
  return (
    <Carousel>
      <Carousel.Item>
        <a href='https://github.com/FabioDev86/front-end-mentor/tree/master/body-fat-calculator'>
        <img
          className="d-block w-30"
          src="/projects/body-fat-calculator.png"
          alt="Body Fat Calculator"
        />
        </a>
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <a href='https://github.com/FabioDev86/front-end-mentor/tree/master/result-summary-component'>
        <img
          className="d-block w-30"
          src="/projects/result-summary-component.png"
          alt="Result Summary Component"
        />
        </a>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-30"
          src="coming_soon.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

