import React, { Component } from 'react';
import * as API from '../../services/MovieDBService';
import MovieList from '../MovieList/MovieList';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: []
    }

    this.discoverMovies();
  }

  discoverMovies = () => {
    API.discoverMovies().then(movies => {
      this.setState({
        movies
      })
    });
  }

  search = (e) => {
    const query = e.target.value;

    if (query && query.trim().length) {
      API.searchMovies(query).then(movies => this.setState({ movies }))
    } else {
      this.discoverMovies();
    }
  };

  render() {
    const { movies } = this.state;

    return (
      <React.Fragment>
        <input className="form-control text-center" type="text" onKeyUp={this.search}/>
        
        {
          movies
          &&
          movies.length
          &&
          <MovieList movies={movies} />
        }
        
      </React.Fragment>
    );
  }
}