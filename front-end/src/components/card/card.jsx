import React from 'react';
import Button from '../buttons/button';
import './card.css';
import config from '../../config';

//Create a card component for products, should include Title, description, price,
console.log(config, 'aici');
// add to cart button
class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch(`${config.BACKEND}/product`)
            .then(response => response.json())
            .then(json =>
                this.setState({
                    isLoaded: true,
                    items: json,
                }));
    }

    render() {
        var { isLoaded, items } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>;
        }
        else {
            return (
                <div className='card'>
                    {
                        <ul>
                            {items.map(item =>
                                <li key={item.id}>
                                    <h1 className='name'>  Name: {item.name} </h1>
                                    <h2 className='price'> Price:{item.price} </h2>
                                    <h3 className='description'> Description:{item.description}</h3>
                                    <h4 className='addToCart'><Button /></h4>
                                </li>
                            )
                            }
                        </ul>
                    }
                </div >

            );
        }
    }
}

export default Card;