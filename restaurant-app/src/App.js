// Importing necessary libraries and styles
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav, Button, Card } from "react-bootstrap";

// React component

const MyComponent = () => {
  return (
    // Using a fragment to group multiple elements
    <>
      {/* The main container for the entire component */}
      <div className="App">
        {/* Navigation bar with dark theme */}
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            {/* Brand/logo linking to the home page */}
            <Navbar.Brand href="#home">Sereno's restuarant</Navbar.Brand>
            {/* Navigation links */}
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#contacts">Contacts</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        {/* Welcome message */}
        <h1>Welcome to Sereno's website</h1>

        {/* Grid of cards displaying different food items */}
        <div className="row">
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                {/* Card component for Tofu */}
                <h5 className="card-title">Tofu</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" className="btn btn-primary">
                  Order
                </a>
              </div>
            </div>
          </div>
          {/* Card component for Egg and Cucumber */}
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Egg and Cucumber</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" className="btn btn-primary">
                  Order
                </a>
              </div>
            </div>
          </div>
          {/* Card component for Fish and Veggie*/}
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Fish and Veggie</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" className="btn btn-primary">
                  Order
                </a>
              </div>
            </div>
          </div>
          {/* Card component for Chicken Wings */}
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Chicken Wings</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" className="btn btn-primary">
                  Order
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Export the MyComponent as the default export of this module
export default MyComponent;
