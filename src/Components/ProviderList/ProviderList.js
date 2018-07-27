import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchHouses } from '../../store/actions/houses';

import ProviderItem from '../ProviderItem/ProviderItem'

class ProviderList extends Component {
    componentDidMount() {

    }

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

export default connect(mapStateToProps)(ProviderList);
