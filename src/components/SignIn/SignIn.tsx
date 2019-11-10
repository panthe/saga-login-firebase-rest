import React from 'react';

import {PropsFromState, PropsFromDispatch} from './'

import { Col, Button, Form, FormGroup, Label, Input, Alert, FormFeedback } from 'reactstrap';

interface SignInProps {
  isAuthenticated: boolean;
  actionSignInRequest: Function;
}

interface IState {
  email?: string;
  password?: string;
  validate?: {
    emailState?: boolean;
    passwordState?: boolean;
    formState?: boolean;
  },
  hideErrors?: boolean;
}

type IProps = PropsFromState & PropsFromDispatch;

class SignIn extends React.Component<IProps, IState> {
  state = {
    email: '',
    password: '',
    validate: {
      emailState: true,
      passwordState: true,
      formState:true
    },
    hideErrors: false
  };

  validateEmail(event: React.ChangeEvent<HTMLInputElement>){
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { target } = event;
    const { value } = target;
    const { validate } = this.state;
    if (emailRex.test(value)){
      validate.emailState = true;
    } else {
      validate.emailState = false;
    }
    this.setState({ validate });
  }

  validatePassword(event: React.ChangeEvent<HTMLInputElement>){    
    const { target } = event;
    const { value } = target;
    const { validate } = this.state;
    if (value.length>4){
      validate.passwordState = true;
    } else {
      validate.passwordState = false;
    }
    this.setState({ validate });
  }

  handleChange = async (event: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    const { target } = event;
    const { name, value } = target;
    this.setState({
      [name]: value
    });
    
  }

  onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const {email, password, hideErrors} = this.state;
    this.setState({ hideErrors: false });
    this.props.actionSignIn({email, password});
  }

  onDismissAlert = (): void => {
    const { hideErrors } = this.state;
    this.setState({ hideErrors: true });
  }

  render(): JSX.Element {
    const { auth } = this.props;    
    const {email, password, hideErrors} = this.state;
    
    return (
     
      <Form >
        <Alert color="primary" isOpen={!hideErrors && (auth.errors != null)} toggle={this.onDismissAlert} fade={false}>
          Errore
        </Alert>
        <FormGroup row>
          <Label for="email" sm="12" md={{ size: 6, offset: 3 }}>Email</Label>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Input 
              type="email" 
              name="email" 
              id="email" 
              placeholder="E-mail" 
              value={email}              
              invalid={ !this.state.validate.emailState }              
              onChange={(event)=>{
                  this.handleChange(event)
                }
              }
              onBlur={(event)=>{
                this.validateEmail(event)
                }
              }
            />
            <FormFeedback valid/>
            <FormFeedback>
              Email not valid.
            </FormFeedback>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="password" sm="12" md={{ size: 6, offset: 3 }}>Password</Label>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Input 
              type="password" 
              name="password" 
              id="password" 
              placeholder="Password" 
              value={password}              
              invalid={ !this.state.validate.passwordState }              
              onChange={(event)=>{
                this.handleChange(event)
                }
              }
              onBlur={(event)=>{
                this.validatePassword(event)
                }
              }
            />
            <FormFeedback valid />
            <FormFeedback>
              Password not valid.
            </FormFeedback>
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