import React from 'react';
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
        this.getProducts();
    }
    componentDidUpdate(prevProps) {
        if (prevProps.selectedCategory !== this.props.selectedCategory) {
            this.getProducts();
        }
    }

    getProducts() {
        const isCategoryID = Boolean(this.props.selectedCategory);
        let route = '/product';
        if (isCategoryID) {
            route = `/productCategory?catId=${this.props.selectedCategory}`;
        }
        fetch(`${config.BACKEND}${route}`)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                });
            });
    }

    render() {
        var { isLoaded, items } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>;
        }
        else {
            return (<div className='cardList'>
                <ul>
                    {
                        items.map(card =>
                            <Card key={card.id} id={card.id} name={card.name} price={card.price} description={card.description} />
                        )
                    }
                </ul>
            </div >)
        }
    }
}

export default CardList;