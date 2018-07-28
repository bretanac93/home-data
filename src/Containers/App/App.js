import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchHouses, orderHousesCollection, pushUpdatedPrice} from "../../store/actions/houses";

import ProviderList from '../../Components/ProviderList/ProviderList'
import SortAll from '../../Components/SortAll/SortAll'

class App extends Component {
    constructor(props) {
        super(props);
        this.orderBy = this.orderBy.bind(this);
        this.orderByAll = this.orderByAll.bind(this);
        this.pushPriceUpdated = this.pushPriceUpdated.bind(this);
        this.pushUpdate = this.pushUpdate.bind(this);
    }
    componentDidMount() {
        this.props.dispatch(fetchHouses());
    }
    orderBy(property, order, vendor_id) {
        this.props.dispatch(orderHousesCollection(property, order, vendor_id));
    };

    orderByAll(property, order) {
        this.props.dispatch(orderHousesCollection(property, order));
    }

    pushPriceUpdated(house_id, price) {
        this.props.dispatch(pushUpdatedPrice(house_id, price))
    }

    pushUpdate() {
        const { updated } = this.props;
        console.log({
            updated
        })
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
                <SortAll orderByAll={this.orderByAll} />
                <ProviderList pushUpdate={this.pushPriceUpdated} orderBy={this.orderBy} providers={this.props.providers}  />
                <div className="save" style={{display: 'flex', justifyContent: 'flex-end', marginBottom: '10px'}}>
                    <button style={{borderRadius: 0}} className="btn btn-outline-info" onClick={this.pushUpdate}>Save</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    providers: state.houses.items,
    loading: state.houses.loading,
    error: state.houses.error,
    updated: state.houses.updated
});

export default connect(mapStateToProps)(App)