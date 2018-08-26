import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path='/' exact strict render={
            () => {
              return (<h1>Welcome home!</h1>)
            }
          } />
          <Route path='/about/' exact strict render={
            () => {
              return (<h1>Welcome about!</h1>)
            }
          } />
        </div>
      </Router>
    );
  }
}

export default App;
