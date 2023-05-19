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
          src="horseman.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{ titles[0] }</h3>
          <p>{ descriptions[0] }</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-30"
          src="horseman.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-30"
          src="horseman.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

