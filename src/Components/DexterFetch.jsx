import React, { Component } from "react";
import { Card, Row, Col } from "react-bootstrap";
import "../Components/DexterFetch.css";

class Dexterfetch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    fetch("http://www.omdbapi.com/?apikey=92e5b050&s=Dexter")
      .then((response) => response.json())
      .then((data) => {
        if (data.Search) {
          const moviesWithPoster = data.Search.slice(0, 7).filter(
            (movie) => movie.Poster !== "N/A"
          );

          this.setState({ movies: moviesWithPoster });
        }
      })
      .catch((error) => console.error("Errore nella fetch:", error));
  }

  render() {
    return (
      <Row className="px-4 py-3">
        {this.state.movies.map((movie, index) => (
          <Col key={index} sm={12} lg={2} className="mb-4">
            {" "}
            <Card className="bg-dark text-light h-100 card-square">
              {" "}
              <Card.Img
                variant="top"
                src={movie.Poster}
                alt={movie.Title}
                className="card-img-fixed"
              />
            </Card>
          </Col>
        ))}
      </Row>
    );
  }
}

export default Dexterfetch;
