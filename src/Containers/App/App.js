import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchHouses, orderHousesCollection} from "../../store/actions/houses";

import ProviderList from '../../Components/ProviderList/ProviderList'

class App extends Component {
    componentDidMount() {
        this.props.dispatch(fetchHouses());
    }
    orderBy(property, order, vendor_id) {
        this.props.dispatch(orderHousesCollection(property, order, vendor_id));
    };

    render() {
        if (this.props.loading) {
            return (<div>Loading...</div>)
        }
        if (this.props.error) {
            return <div>Error!!!</div>
        }
        return (
            <div>
                <ProviderList orderBy={this.orderBy.bind(this)} providers={this.props.providers}  />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    providers: state.houses.items,
    loading: state.houses.loading,
    error: state.houses.error,
});

export default connect(mapStateToProps)(App)