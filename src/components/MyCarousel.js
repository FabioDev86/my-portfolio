import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MyCarousel(props) {
  let titles = [];
  let descriptions = [];
    switch(props.lang){
        case "english" : 
          titles = ["Project 1", "Project 2", "Project 3"]; 
          descriptions = ["This is my first project", "This is my second project", "This is my third project"]
          break;
        case "italiano" : 
          titles = ["Progetto 1", "Project 2", "Project 3"]; 
          descriptions = ["Questo è il mio primo progetto", "This is my second project", "This is my third project"]
          break;
        case "deutsch" :  
          titles = ["Project 1", "Project 2", "Project 3"]; 
          descriptions = ["This is my first project", "This is my second project", "This is my third project"]
          break;
    }
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-30"
          src="coming_soon.png"
          alt="First slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-30"
          src="coming_soon.png"
          alt="Second slide"
        />

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

