import React, { Component } from 'react';

import ProviderItem from '../ProviderItem/ProviderItem'

class ProviderList extends Component {
    render() {
        let providersUI = [];
        for (let item of this.props.providers) {
            providersUI.push(<ProviderItem provider={item} key={item.id} />)
        }

        return (
            <div className="ProviderList">
                {providersUI}
            </div>
        );
    }
}

export default ProviderList;
