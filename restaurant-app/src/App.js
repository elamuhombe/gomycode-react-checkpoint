// Importing necessary libraries and styles
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav, Button, Card, Forms } from "react-bootstrap";
import './styles.css';

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
                  <div><div><img src="images/tofu-1.png" alt="Tofu" /></div></div>
                  A creamy, high protein, low-fat product made from soy milk.
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
                  <div><div><img src="images/egg-1.png" alt="Egg and Cucumber" /></div></div>
                This egg and salad cucumber is the perfect appetizer.
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
                <div><img src="images/fish-1.png" alt="Fish and Veggie" /></div>
                  Make the most of in-season veggie with this pan fried fish.
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
                  <div><div><img src="images/chicken-1.png" alt="Chiken-wings" /></div></div>
                  Crispy perfectly deep fried chicken wings.
                </p>
                <a href="#" className="btn btn-primary">
                  Order
                </a>
              </div>
            </div>
          </div>
        </div>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>

          {/* User login form */}
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

// Export the MyComponent as the default export of this module
export default MyComponent;
