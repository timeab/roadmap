import React from 'react';


class Categories extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            checked: false,
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
        const selectedId = value ? target.id : "";
        this.props.setCategory(selectedId);
    }

    render() {
        return (
            <form>
                <label className='checkBox'>
                    {this.props.name}
                    <input
                        name='checkCategorie'
                        type='checkbox'
                        id={this.props.id}
                        value={this.state.checkCategorie}
                        checked={this.state.isChecked}
                        onChange={this.handleInputChange} />
                </label>
            </form>
        );
    }
}


export default Categories;