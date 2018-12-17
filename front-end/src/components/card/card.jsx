import React from 'react';
import './card.css';
import Button from '../buttons/button';

//Create a card component for products, should include Title, description, price,
// add to cart button
const Card = (props) => {
    return (

        <li >
            <h1 className='name'>  Name: {props.name} </h1>
            <h2 className='price'> Price:{props.price} </h2>
            <h3 className='description'> Description:{props.description}</h3>
            <Button />
        </li>
    )
}

export default Card;