import React, { Component } from 'react';
import HouseList from '../HouseList/HouseList'

import './ProviderItem.css'

class ProviderItem extends Component {
    render() {
        return (
            <div className="ProviderItem">
                <div className="header">
                    <div className="logo">
                        <img src="http://via.placeholder.com/140x50" alt="CompanyLogo"/>
                    </div>
                    <div className="title">
                        <h3>ACME Inc</h3>
                    </div>
                </div>
                <div className="table">
                    <HouseList/>
                </div>
            </div>
        );
    }
}

export default ProviderItem;