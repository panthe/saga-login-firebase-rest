import React from 'react';
import { connect } from 'react-redux';
import { actionSignInRequest } from '../../store';
import { AuthData, AuthState, AuthParams} from '../../store/auth/types';

import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

interface SignInProps {
  isAuthenticated: boolean;
  actionSignInRequest: Function;
}


class SignIn extends React.Component<SignInProps,AuthState> {
  constructor(props: SignInProps) {
    super(props);

  }
  onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event.target);
    
    this.props.actionSignInRequest();
    console.log(this.props.actionSignInRequest);
  }

  render(): JSX.Element {
    return (
      <Form >
        <FormGroup row>
          <Label for="email" sm="12" md={{ size: 6, offset: 3 }}>Email</Label>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Input type="email" name="email" id="email" placeholder="E-mail" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="password" sm="12" md={{ size: 6, offset: 3 }}>Password</Label>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Input type="password" name="password" id="password" placeholder="Password" />
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

const mapDispatchToProps = ({isAuthenticated}: AuthState ): { isAuthenticated: boolean} => {
  return { isAuthenticated};
};

export default connect(
  mapDispatchToProps, {
    actionSignInRequest
  }
)(SignIn);