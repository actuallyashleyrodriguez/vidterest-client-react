
import React, {Component} from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchCategories } from './actions/fetchCategories';

class App extends Component {

  componentDidMount() {
    this.props.fetchCategories()
  }

  render() {
  return (
    <div className="App">
     App
    </div>
  );
  }
}

export default connect(null, {fetchCategories})(App);
