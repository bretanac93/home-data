import React, { Component } from 'react';
import { connect } from 'react-redux'
import { orderHousesCollection } from '../../store/actions/houses'
class HouseTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            order: 'desc',
            orderedBy: 'internal_id'
        };
    };

    orderBy(property, vendor_id) {
        // When click first time, set desc, otherwise set asc
        this.setState({
            order: this.state.order === 'desc' ? 'asc': 'desc',
            orderedBy: property
        });

        this.props.dispatch(orderHousesCollection(this.state.orderedBy, this.state.order, vendor_id));
    };
    render() {
        return (
            <div>
                <table className="HouseList" style={{width: 100 + '%'}}>
                    <thead>
                    <tr>
                        <th onClick={() => {this.orderBy('internal_id', this.props.houses[0].vendor_verbose.id)}}>House Id</th>
                        <th>Image</th>
                        <th onClick={() => {this.orderBy('name', this.props.houses[0].vendor_verbose.id)}}>Name</th>
                        <th onClick={() => {this.orderBy('price_ready', this.props.houses[0].vendor_verbose.id)}}>Price</th>
                        <th onClick={() => {this.orderBy('living_area_total', this.props.houses[0].vendor_verbose.id)}}>Size</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.houses.map(item => (
                        <tr key={item.internal_id}>
                            <td>{item.internal_id}</td>
                            <td><img src={item.exterior_images[0]['fill-320x240']} alt="house-1" width={50 + 'px'} height={50 + 'px'}/></td>
                            <td>{item.name}</td>
                            <td>{item.price_ready} €</td>
                            <td>{item.living_area_total} sqm</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default connect()(HouseTable);