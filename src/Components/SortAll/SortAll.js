import React, { Component } from 'react';

class SortAll extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(evt) {
        const { name, value } = evt.target;
        this.props.orderByAll(name, value);
    }
    render() {
        return (
            <div className="SortAll">
                <select name="name" id="name_sort" onChange={this.handleChange}>
                    <option value="">Name</option>
                    <option value="asc">Asc</option>
                    <option value="desc">Desc</option>
                </select>
                <select name="price" id="price_sort" onChange={this.handleChange}>
                    <option value="">Price</option>
                    <option value="asc">Asc</option>
                    <option value="desc">Desc</option>
                </select>
                <select name="living_area_total" id="size_sort" onChange={this.handleChange}>
                    <option value="">Size</option>
                    <option value="asc">Asc</option>
                    <option value="desc">Desc</option>
                </select>
            </div>
        );
    }
}

export default SortAll;
