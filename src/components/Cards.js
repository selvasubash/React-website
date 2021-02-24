import React from 'react';
import Carditems from './Carditems';
import './Cards.css';
import { IMG2, IMG3, IMG4, IMG8, IMG9 } from "./img";

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <Carditems
              src={IMG9}
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <Carditems
              src={IMG2}
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className="cards__items">
            <Carditems
              src={IMG3}
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <Carditems
              src={IMG4}
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/Products'
            />
            <Carditems
              src={IMG8}
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards;
