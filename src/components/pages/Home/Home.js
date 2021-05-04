import React from 'react';
import PageCard from '../../molecules/PageCard/PageCard';
import beersImage from '../../../assets/images/beers.png';
import newBeerImage from '../../../assets/images/new-beer.png';
import randomBeerImage from '../../../assets/images/random-beer.png';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const cardsInfo = [
    {
      image: beersImage,
      type: 'H1',
      title: 'All beers',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, voluptatem natus, culpa in cum numquam quam vitae adipisci commodi aliquid ab maiores odio delectus ea incidunt iure cumque distinctio fugiat.',
      route: '/beers',
    },
    {
      image: randomBeerImage,
      type: 'H1',
      title: 'Random beer',
      text: 'Iure in unde error earum reiciendis? Veritatis quaerat doloribus id odit omnis facere sint, cupiditate esse quod ratione quibusdam? Laudantium culpa laboriosam aliquid omnis dolorem! Voluptate quis vel vitae consequuntur.',
      route: '/random-beer',
    },
    {
      image: newBeerImage,
      type: 'H1',
      title: 'New beer',
      text: 'Explicabo rerum ipsa assumenda a, cumque illo alias ab saepe eos, quos ipsam animi temporibus. Rerum vitae architecto sequi doloribus dignissimos maxime, est reiciendis neque eius tempore culpa omnis delectus.',
      route: '/new-beer',
    },
  ];

  const showCards = () => {
    return cardsInfo.map((card,idx) =>{
      return <Link to={card.route}><PageCard image={card.image} type={card.type} childrenTitle={card.title} childrenText={card.text}/></Link>
    })
  }

  return(
    <div className="cards">
      { showCards() }
    </div>
  )
}

export  default Home;