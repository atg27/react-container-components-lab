import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;


export default class SearchableMovieReviewsContainer extends Component {
    state= {
        reviews= [],
        searchWord= ''
    }

    handleSubmit(e) {
        e.preventdefualt();

        fetch(`URL+${searchWord}`)
        .then(res => res.json())
        .then(res => this.setState({reviews: res.results}))
    }

    handleChange (e) {
        this.setState({searchword : e.target.value})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>search movie review</label>
                    <input type='text' onChange={this.handleChange}/>
                    <button type="submit"> submit </button>
                </form>
                
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}
