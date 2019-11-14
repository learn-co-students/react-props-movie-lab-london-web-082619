import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

console.log(movieData)

export default class MovieShowcase extends Component {
    
  // map over your movieData array and return the correct
    generateMovieCards = () => {
       return movieData.map((movie) => {
        return <MovieCard title={movie.title} IMDBRating={movie.IMDBRating} genres={movie.genres} poster={movie.poster} key={movie.title}/>
      })
    }

    render() {
              console.log(this.props)
              console.log(this)
      return (
        <div id="movie-showcase">
          {this.generateMovieCards()} 
          {this.props.title}
        </div>
      )
    }
}
