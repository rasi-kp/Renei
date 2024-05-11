import logo from './logo.svg';
import img1 from './pngtree-rainbow-curves-abstract-colorful-background-image_2164067.jpg'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
// import InfiniteScroll from "react-infinite-scroll-component";
// import Card from 'react-bootstrap/Card';
import { Card, Row, Col } from 'react-bootstrap';

import Carousel from 'react-bootstrap/Carousel';
import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {

  const cardsData = [
    { id: 1, title: 'Card 1', text: 'Text for card 1' },
    { id: 2, title: 'Card 2', text: 'Text for card 2' },
    { id: 3, title: 'Card 3', text: 'Text for card 3' },
    { id: 4, title: 'Card 4', text: 'Text for card 4' },
    { id: 5, title: 'Card 5', text: 'Text for card 5' },
    { id: 6, title: 'Card 6', text: 'Text for card 6' },
    // Add more cards as needed
    { id: 7, title: 'Card 7', text: 'Text for card 7' },
    { id: 8, title: 'Card 8', text: 'Text for card 8' },
    { id: 9, title: 'Card 9', text: 'Text for card 9' },
    // Add more cards as needed
  ];

  const pageSize = 3; // Number of cards per page

  // State to manage the current page number and the displayed cards
  const [currentPage, setCurrentPage] = useState(0);
  const [displayedCards, setDisplayedCards] = useState([]);

  // Reference to the last card element
  const lastCardRef = useRef();

  // Update displayed cards based on the current page
  useEffect(() => {
    const startIndex = currentPage * pageSize;
    const endIndex = startIndex + pageSize;

    const nextPageCards = cardsData.slice(startIndex, endIndex);
    setDisplayedCards((prevCards) => [...prevCards, ...nextPageCards]);
  }, [currentPage, cardsData, pageSize]);

  // IntersectionObserver callback
  const observerCallback = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting && (currentPage + 1) * pageSize < cardsData.length) {
      // Increment the current page number to load the next set of cards
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  // Set up the IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, { threshold: 1 });

    // Observe the last card element
    if (lastCardRef.current) {
      observer.observe(lastCardRef.current);
    }

    // Clean up the observer when the component is unmounted or the last card changes
    return () => {
      if (lastCardRef.current) {
        observer.unobserve(lastCardRef.current);
      }
    };
  }, [lastCardRef, currentPage, cardsData.length]);

  return (
    <div className="App">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Renie</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Carousel>
        <Carousel.Item>
          <div style={{ position: 'relative' }}>
            {/* Use img-fluid class for responsive resizing */}
            <img
              src={img1}
              alt='hello'
              className="img-fluid w-100" // Apply img-fluid and full width (w-100)
              style={{ height: 'auto' }} // Maintain aspect ratio
            />
            {/* Optional text overlay on top of the image */}
            <div className="carousel-text-overlay" style={{ position: 'absolute', bottom: '10%', left: '10%', color: 'white' }}>
            </div>
          </div>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ position: 'relative' }}>
            {/* Use img-fluid class for responsive resizing */}
            <img
              src={img1}
              alt='hello'
              className="img-fluid w-100" // Apply img-fluid and full width (w-100)
              style={{ height: 'auto' }} // Maintain aspect ratio
            />
            {/* Optional text overlay on top of the image */}
            <div className="carousel-text-overlay" style={{ position: 'absolute', bottom: '10%', left: '10%', color: 'white' }}>
            </div>
          </div>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item><Carousel.Item>
          <div style={{ position: 'relative' }}>
            {/* Use img-fluid class for responsive resizing */}
            <img
              src={img1}
              alt='hello'
              className="img-fluid w-100" // Apply img-fluid and full width (w-100)
              style={{ height: 'auto' }} // Maintain aspect ratio
            />
            {/* Optional text overlay on top of the image */}
            <div className="carousel-text-overlay" style={{ position: 'absolute', bottom: '10%', left: '10%', color: 'white' }}>
            </div>
          </div>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Row>
        {/* Map through the displayed cards and show each card in a column */}
        {displayedCards.map((card, index) => (
          <Col key={card.id} md={4} ref={index === displayedCards.length - 1 ? lastCardRef : null}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={img1} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

    </div>
  );
}

export default App;
