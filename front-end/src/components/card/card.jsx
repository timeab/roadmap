import React from 'react';
import './card.css';
import Button from '../buttons/button';

//Create a card component for products, should include Title, description, price,
// add to cart button
const Card = (props) => {
    return (

        <li className='card'>
            <p className='name'>  Name: {props.name} </p>
            <p className='price'> Price:{props.price} </p>
            <p className='description'> Description:{props.description}</p>
            <Button />
        </li>
    )
}

export default Card;