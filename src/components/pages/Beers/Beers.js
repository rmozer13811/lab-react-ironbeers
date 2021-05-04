import React, { Component } from 'react';
import Navbar from '../../molecules/Navbar/Navbar';
import axios from 'axios';
import BeerCard from '../../molecules/BeerCard/BeerCard';
import { Link } from 'react-router-dom';

class Beers extends Component {
  state = {
    beers: [],
  }

  async componentDidMount() {
    const beers = await this.getBeers();

    this.setState({
      beers
    });
  }

  getBeers = async () => {
    const res = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
    return res.data
  }

  showBeers = () => {
    const { beers } = this.state
    return beers.map((beer, idx) => {
      return(
        <Link to={`beers/${beer._id}`}>
          <BeerCard key={idx} image={beer.image_url} name={beer.name} tagline={beer.tagline} by={beer.contributed_by} />
        </Link>
      )
    })
  }

  render() {
    console.log(this.state)
    return(
      <div>
        <Navbar />
        {this.showBeers()}
      </div>
    )
  }
}

export default Beers