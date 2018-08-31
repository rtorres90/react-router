import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, NavLink, Redirect } from 'react-router-dom';
import Route from 'react-router-dom/Route';

const User = (params) => {
  return (<h1>Welcome User! {params.username}</h1>);
}

class App extends Component {
  state = {
    loggedIn: false
  };
  loginHangle = () => {
    this.setState(prevState => (
      { loggedIn: !prevState.loggedIn }
    ));
  }
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <NavLink to="/" exact activeStyle={
                {
                  color: 'green'
                }
              }>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about/" exact activeStyle={
                {
                  color: 'green'
                }
              }>About</NavLink>
            </li>
            <li>
              <NavLink to="/user/Roberto" exact activeStyle={
                {
                  color: 'green'
                }
              }>Roberto</NavLink>
            </li>
            <li>
              <NavLink to="/user/Minerva" exact activeStyle={
                {
                  color: 'green'
                }
              }>Minerva</NavLink>
            </li>
          </ul>
          <input type="button" value={this.state.loggedIn ? 'Log Out': 'Log In'} onClick={this.loginHangle.bind(this)} />
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
          <Route path='/user/:username' exact strict render={
            ({ match }) => (
              this.state.loggedIn ? (<User username={match.params.username} />) : (<Redirect to='/' />)
            )
          } />
        </div>
      </Router>
    );
  }
}

export default App;
