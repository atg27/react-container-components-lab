import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;



export default class LatestMovieReviewsContainer extends Component {

    constructor() {
    super()

    this.state = {
        reviews: []
    }
    }

    componentDidMount() {
        fetch(URL)
        .then(res => res.json())
        .then(data => this.setState({reviews : data.results}))
    }

    render() {
        return (
            <div classname="latest-movie-reviews">
                <h2> Reviews:</h2>
                <MovieReviews> {this.state.reviews} </MovieReviews>
            </div>
        )
    }
}
