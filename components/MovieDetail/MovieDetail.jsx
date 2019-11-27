import React, { Component } from "react";
import Movie from "../Movie/Movie";
import { getMovie }  from "../../services/MovieDBService";
import { withRouter } from "react-router-dom";

class MovieDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    
    const movieID = this.props.match.params.id;

    getMovie(movieID).then(movie => {
      if (movie.status_code) {
        this.props.history.push("/404");
      } else {
        this.setState({ movie });
      }
    });
  }

  render() {
    const { movie } = this.state;

    return (
      <div className="container">
        {
          movie
          &&
          <div>
            <h1>{movie.title}</h1>
          </div>
        }

        {
          !movie
          &&
          <h1>Loading...</h1>
        }
      </div>
    );
  }
}

export default withRouter(MovieDetail);