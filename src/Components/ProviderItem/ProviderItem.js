import React, { Component } from 'react';
import HouseTable from '../HouseTable/HouseTable'

import './ProviderItem.css'

class ProviderItem extends Component {
    render() {
        return (
            <div className="ProviderItem">
                <div className="header">
                    <div className="logo">
                        <img src={this.props.provider.logo['max-140x50']} alt="CompanyLogo"/>
                    </div>
                    <div className="title">
                        <h3>{this.props.provider.display_name}</h3>
                    </div>
                </div>
                <div className="table">
                    <HouseTable pushUpdate={this.props.pushUpdate} orderBy={this.props.orderBy} houses={this.props.provider.houses} />
                </div>
            </div>
        );
    }
}

export default ProviderItem;