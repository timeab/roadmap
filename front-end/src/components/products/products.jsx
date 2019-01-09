import React from 'react';
import CategoriesList from '../categories/categoriesList';
import CardList from '../card/cardList';

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCategory: '',
        };
        this.setCategory = this.setCategory.bind(this);
    }

    setCategory(id) {
        this.setState({ selectedCategory: id });
    }

    render() {
        return (
            <div>
                {
                    <ul>
                        <CategoriesList setCategory={this.setCategory} />
                        <CardList selectedCategory={this.state.selectedCategory} />
                    </ul>
                }
            </div>
        )
    }
}

export default Products;