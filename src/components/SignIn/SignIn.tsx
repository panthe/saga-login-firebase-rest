import React from 'react';

import {PropsFromState, PropsFromDispatch} from './'

import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

interface SignInProps {
  isAuthenticated: boolean;
  actionSignInRequest: Function;
}

interface IState {
  email: string;
  password: string;
}

type IProps = PropsFromState & PropsFromDispatch;

class SignIn extends React.Component<IProps, IState> {

    state = {
      email: "",
      password: ""
    };


  onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const {email, password} = this.state;

    this.props.actionSignIn({email, password});
  }

  render(): JSX.Element {

    const {email, password} = this.state;

    return (
      <Form >
        <FormGroup row>
          <Label for="email" sm="12" md={{ size: 6, offset: 3 }}>Email</Label>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Input type="email" name="email" id="email" placeholder="E-mail"  value={email} onChange={(event)=>this.setState({email: event.target.value})}/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="password" sm="12" md={{ size: 6, offset: 3 }}>Password</Label>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Input type="password" name="password" id="password" placeholder="Password" value={password}  onChange={(event)=>this.setState({password: event.target.value})}/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm="3" md={{ size: 1, offset: 6 }}>
            <Button color="secondary" >Annulla</Button>
            </Col>
            <Col sm="3" md={{ size: 1, offset: 1 }}>
            <Button color="primary" onClick={this.onSubmit} type="submit">Accedi</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export default  SignIn;