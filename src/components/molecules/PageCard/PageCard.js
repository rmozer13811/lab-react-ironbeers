import React from 'react';
import Image from '../../atoms/Image/Image';
import Title from '../../atoms/Title/Title';
import Text from '../../atoms/Text/Text';

const PageCard = (props) => {
  return(
    <div>
      <Image src={props.image}/>
      <Title htmlType={props.type}>{ props.childrenTitle }</Title>
      <Text>{ props.childrenText }</Text>
    </div>
  )
}

export default PageCard;