import React, { Component } from 'react';
import ProviderItem from '../ProviderItem/ProviderItem'
class ProviderList extends Component {
    render() {
        return (
            <div className="ProviderList">
                <ProviderItem/>
                <hr/>
                <ProviderItem/>
                <hr/>
                <ProviderItem/>
            </div>
        );
    }
}

export default ProviderList;
