import React, { Component } from 'react';
import Title from '../../atoms/Title/Title';
import Image from '../../atoms/Image/Image';
import Text from '../../atoms/Text/Text';
import axios from 'axios';

class BeerDetail extends Component {
  state = {
    beer: {},
  }
  
  async componentDidMount() {
    const beer = await this.showDetail();
    this.setState({beer});
  }

  showDetail = async () => {
    const { beerId } = this.props.match.params
    const res = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
    return res.data;
  }
  

  render() {
    const { name, tagline, first_brewed, attenuation_level, description, contributed_by, image_url } = this.state.beer

    return(
      <div>
        <Image src={image_url}/>
        <Title htmlType="H2">{name}</Title>
        <Title htmlType="H4">{tagline}</Title>
        <Text>{first_brewed}</Text>
        <Text>{attenuation_level}</Text>
        <Text>{description}</Text>
        <Text>{contributed_by}</Text>
      </div>
    )
  }
}

export default BeerDetail;
