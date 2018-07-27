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
                    <tr>
                        <td>1</td>
                        <td><img src="http://via.placeholder.com/50x50" alt="house-1"/></td>
                        <td>Bungalow 1</td>
                        <td>1200.00 EUR</td>
                        <td>120 sqm</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td><img src="http://via.placeholder.com/50x50" alt="house-1"/></td>
                        <td>Bungalow 1</td>
                        <td>1200.00 EUR</td>
                        <td>120 sqm</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default HouseTable;