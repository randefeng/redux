import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './reduxReducers/reduxReducers';

import Header from "./common/header";
import ListDetil from "./common/listDetil";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <div>
            <Header />
            <ListDetil />
          </div>
        </Provider>
      </div>
    );
  }
}

export default App;
