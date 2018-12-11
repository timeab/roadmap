import React from 'react';
import Button from '../buttons/button';
import './card.css';

//Create a card component for products, should include Title, description, price,
// add to cart button
class Card extends React.Component {
    render() {
        return (
            <div className='card'>
                <h1 className='title'>Title</h1>
                <h1 id='description'>Description</h1>
                <h1 id='price'>Price</h1>
                <div className='addToCart'>
                    <Button />
                </div>
            </div >

        );
    }
}

export default Card;