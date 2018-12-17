import React from 'react';


class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    render() {
        return (
            <form>
                <label className='checkBox'>
                    Check categorie:

                <input
                        name='checkCategorie'
                        type='checkbox'
                        value={this.state.checkCategorie}
                        checked={this.state.isChecked}
                        onChange={this.handleInputChange} />
                </label>
            </form>
        );
    }
}

export default Categories;