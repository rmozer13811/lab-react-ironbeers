import React from 'react';
import Title from '../../atoms/Title/Title';
import Image from '../../atoms/Image/Image';
import Text from '../../atoms/Text/Text';

const BeerCard = ({ image, name, tagline, by }) => {
  return(
    <div>
      <Image src={image}/>
      <Title htmlType="H2">{name}</Title>
      <Title htmlType="H4">{tagline}</Title>
      <Text>{by}</Text>
    </div>
  )
}

export default BeerCard
