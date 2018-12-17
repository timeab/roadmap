import React from 'react';
import Button from '../buttons/button';
import './card.css';
import config from '../../config';
import Card from '../card/card';

//Create a card component for products, should include Title, description, price,
// add to cart button

class CardList extends React.Component {

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
            return (<div className='cardList'>
                <ul>{this.state.items.map(card =>
                    <Card key={card.id} id={card.id} name={card.name} price={card.price} description={card.description} />

                )}
                </ul>
            </div >)
        }
    }
}

export default CardList;