import React, { Component } from 'react';

import ProviderItem from '../ProviderItem/ProviderItem'

class ProviderList extends Component {
    render() {
        return (
            <div className="ProviderList">
                {this.props.providers.map(item => <ProviderItem orderBy={this.props.orderBy} provider={item} key={item.id} />)}
            </div>
        );
    }
}

export default ProviderList;
