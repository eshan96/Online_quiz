import React from 'react';
import logo from './logo.svg';
import './App.css';
import Student_Registration from './components/Student_Registration';
import { BrowserRouter, Switch, Route, withRouter, Redirect } from 'react-router-dom'
import Admin from './components/Admin';
import Add_Questions from './components/Add_Questions';
import Test from './components/Test';
// import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
       <Switch>
       <Route exact path={"/"} render= {props => (
         <Student_Registration {...props} />
       )} />

       <Route exact path={"/test"} render= {props => (
         <Test {...props} />
       )} />

    <Route exact path={"/admin"} render= {props => (
         <Admin {...props} />
       )} />

        <Route exact path={"/addQuestions"} render= {props => (
         <Add_Questions {...props} />
       )} />
       {/* <PrivateRoute path="/addQuestion" component={Add_Questions} /> */}
       </Switch>
      </BrowserRouter> 
  </div>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};


function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/admin",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}
export default App;
