import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchHouses } from "../../store/actions/houses";

import ProviderList from '../../Components/ProviderList/ProviderList'

class App extends Component {
    componentDidMount() {
        this.props.dispatch(fetchHouses());
    }
    render() {
        if (this.props.loading) {
            return (<div>Loading...</div>)
        }
        if (this.props.error) {
            return <div>Error!!!</div>
        }
        return (
            <div>
                <ProviderList providers={this.props.providers} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    providers: state.houses.items,
    loading: state.houses.loading,
    error: state.houses.error
});

export default connect(mapStateToProps)(App)