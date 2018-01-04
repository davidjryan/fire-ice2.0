import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import FetchHouseData from '../../actions/FetchHouseData';
import Card from '../Card/Card';

class App extends Component {
  componentDidMount() {
    this.props.FetchHouseData()
  }

  houseCards() {
    const { houseData, isLoading } = this.props

    if (!houseData) {
      return (
        <img src={logo}/>
      )
    }
    
    const cardArray = houseData.map((item, index) => {
      return (
        <Card
          key={index}
          cardData={item}
          />
      )
    })

    return cardArray
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
          <button onClick={() => {
            this.props.fakeAction();
            alert(this.props.fake);
          }}> FAKE ACTION</button>
        </div>
        <section className='Display-info Container'>
          {this.houseCards()}
        </section>
      </div>
    );
  }
}

App.propTypes = {
  fake: shape({ fake: string }),
  fakeAction: func.isRequired
};

const mapStateToProps = (store) => {
  const { houseData, isLoading } = store.houses;

  return {
    houseData
  };
};


export default connect(mapStateToProps, { FetchHouseData })(App);
