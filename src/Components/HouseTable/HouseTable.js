import React, { Component } from 'react';

class HouseTable extends Component {
    render() {
        return (
            <table className="HouseList" style={{width: 100 + '%'}}>
                <thead>
                    <tr>
                        <th>House Id</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Size</th>
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
        );
    }
}

export default HouseTable;