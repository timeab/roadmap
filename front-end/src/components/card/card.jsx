import React from 'react';
import Button from '../buttons/button';
import './card.css';

const product = 'http://localhost:8080/product';

//Create a card component for products, should include Title, description, price,
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
        fetch(product)
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
                                </li>
                            )
                            }
                            <div className='addToCart'>
                                <Button />
                            </div>
                        </ul>
                    }
                </div >

            );
        }
    }
}

export default Card;