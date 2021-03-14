import React from 'react';
import { Profiler } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Components/Home/Home';
import Login from '../Components/Login/Login';
import CreateProject from './CreateProject/CreateProject';
import ForgotPassword from './ForgotPassword';
import Description from './HomeComponent/Description';
import HomeComponent from './HomeComponent/HomeComponent';
import IssueScreen from './HomeComponent/IssueScreen';
import Pricing from './Pricing/Pricing';
import Profile from './Profile/Profile';
import PrivacyPolicy from './PrivacyPolicy/PrivacyPolicy';
import Register from './Register/Register';
import TermsConditions from './Terms/Terms';
import Badges from './Badges/Badges';
import People from './People/People';
import Message from './Message/Message';
import Contact from './Contact/Contact';

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
        <Route  path="/description/:id" component={Description} />
        <Route  path="/issue" component={IssueScreen} />
        <Route  path="/createproject" component={CreateProject} />
        <Route  path="/profile" component={Profile} />
        <Route  path="/badges" component={Badges} />
        <Route  path="/people" component={People} />
        <Route  path="/message" component={Message} />
        <Route  path="/contact" component={Contact} />
      </Switch >
    );
  };
}