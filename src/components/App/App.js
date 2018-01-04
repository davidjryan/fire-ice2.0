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
    const { houses } = this.props
    const cardArray = houses.map((item, index) => {
      return (
        <Card
          key={index}
          />
      )
    })
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
        <section className='Display-info'>
          {/* {this.houseCards()} */}
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
  const { houses } = store;

  return {
    houses
  };
};


export default connect(mapStateToProps, { FetchHouseData })(App);
