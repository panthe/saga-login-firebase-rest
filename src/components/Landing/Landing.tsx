import React from 'react';
import Cookies from 'js-cookie'
import { Jumbotron } from 'reactstrap';
import { PropsFromState, PropsFromDispatch } from './';

type IProps = PropsFromState & PropsFromDispatch;

class Landing extends React.Component<IProps> {
  componentWillMount() {
    if (!Cookies.get('token')) {
      console.log("Cookie","Token not Found");
    }
  }

  render(): JSX.Element {
    return (
      <div>
        <Jumbotron>
        <h1 className="display-3">Saga Login with Firebase REST API</h1>
        <p className="lead">This is a simple app that implements Firebase Login using directly the API of Firebase, not using PlugIn.</p>
        <hr className="my-2" />
        <p>Remember that if you want test this APP you MUST create an .env file with Firebase credentials.</p>        
      </Jumbotron>
      </div>
    );
  }
}

export default Landing;