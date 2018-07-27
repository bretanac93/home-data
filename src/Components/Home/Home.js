import React, { Component } from 'react';
import ProviderList from '../ProviderList/ProviderList';

import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <ProviderList/>
      </div>
    );
  }
}

export default Home;
