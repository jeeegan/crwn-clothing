import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import './App.scss';
 
import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shop.component';
import CheckoutPage from './page/checkout/checkout.component.jsx';
import SignInAndSignUpPage from './page/sign-in-and-sign-up/sign-in-and-sign-up.component';

import Header from './components/header/header.component';
import {selectCurrentUser} from './redux/user/user.selectors';
import {checkUserSession} from './redux/user/user.actions';

class App extends React.Component {

  componentDidMount() {
    const {checkUserSession} = this.props;
    checkUserSession();
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUpPage/>)}/>
          <Route exact path='/checkout' component={CheckoutPage}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser 
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
