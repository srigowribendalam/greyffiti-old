import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Components/Home/Home';
import Login from '../Components/Login/Login';
import ForgotPassword from './ForgotPassword';
import HomeComponent from './HomeComponent/HomeComponent';
import Pricing from './Pricing/Pricing';
import PrivacyPolicy from './PrivacyPolicy/PrivacyPolicy';
import Register from './Register/Register';
import TermsConditions from './Terms/Terms';
export default class Routes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/forgotpassword" component={ForgotPassword} />
        <Route path="/home" component={HomeComponent} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/privacypolicy" component={PrivacyPolicy} />
        <Route path="/terms" component={TermsConditions} />
      </Switch >
    );
  };
}