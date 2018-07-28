import React, { Component } from 'react';

class SortAll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: '',
            living_area_total: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(evt) {
        const { name, value } = evt.target;

        switch (name) {
            case 'name':
                this.setState({
                    name: value,
                    price: '',
                    living_area_total: ''
                });
                break;
            case 'price':
                this.setState({
                    name: '',
                    price: value,
                    living_area_total: ''
                });
                break;
            case 'living_area_total':
                this.setState({
                    name: '',
                    price: '',
                    living_area_total: value
                });
                break;
            default:
                this.setState({
                    name: '',
                    price: '',
                    living_area_total: ''
                });
        }
        this.props.orderByAll(name, value);
    }
    render() {
        return (
            <div className="SortAll">
                <select name="name" value={this.state.name} id="name_sort" onChange={this.handleChange}>
                    <option value="">Name</option>
                    <option value="asc">Asc</option>
                    <option value="desc">Desc</option>
                </select>
                <select name="price" value={this.state.price} id="price_sort" onChange={this.handleChange}>
                    <option value="">Price</option>
                    <option value="asc">Asc</option>
                    <option value="desc">Desc</option>
                </select>
                <select name="living_area_total" value={this.state.living_area_total} id="size_sort" onChange={this.handleChange}>
                    <option value="">Size</option>
                    <option value="asc">Asc</option>
                    <option value="desc">Desc</option>
                </select>
            </div>
        );
    }
}

export default SortAll;
