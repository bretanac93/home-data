import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchHouses} from "../../store/actions/houses";

class App extends Component {
    componentDidMount() {
        this.props.dispatch(fetchHouses())
    }
    render() {
        return (
            <div>
                <h1>Hello World</h1>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    houses: state.houses.items,
    loading: state.houses.loading,
    error: state.houses.error
});

export default connect(mapStateToProps)(App)