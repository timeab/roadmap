import React from 'react';
import config from '../../config';
import Categories from '../categories/categories';


class CategoriesList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
        };
    }

    componentDidMount() {
        fetch(`${config.BACKEND}/categories`)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    items: json,
                })
            });

    }

    render() {
        return (<div className='categoriesList'>
            <ul>{this.state.items.map(categorie =>
                <Categories key={categorie.id} id={categorie.id} name={categorie.name} setCategory={this.props.setCategory} />

            )}
            </ul>
        </div >)
    }
}


export default CategoriesList;
