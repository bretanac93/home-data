import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchHouses, orderHousesCollection} from "../../store/actions/houses";

import ProviderList from '../../Components/ProviderList/ProviderList'
import SortAll from '../../Components/SortAll/SortAll'

class App extends Component {
    componentDidMount() {
        this.props.dispatch(fetchHouses());
    }
    orderBy(property, order, vendor_id) {
        this.props.dispatch(orderHousesCollection(property, order, vendor_id));
    };

    orderByAll(property, order) {
        this.props.dispatch(orderHousesCollection(property, order));
    }

    render() {
        if (this.props.loading) {
            return (<div>Loading...</div>)
        }
        if (this.props.error) {
            return <div>Error!!!</div>
        }
        return (
            <div className="App">
                <h1 className="title" style={{fontSize: '18px', marginTop: '5px'}}>FH.de Vendor Management</h1>
                <SortAll orderByAll={this.orderByAll.bind(this)} />
                <ProviderList orderBy={this.orderBy.bind(this)} providers={this.props.providers}  />
                <div className="save" style={{display: 'flex', justifyContent: 'flex-end', marginBottom: '10px'}}>
                    <button style={{borderRadius: 0}} className="btn btn-outline-info">Save</button>
                </div>
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