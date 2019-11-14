import React from 'react';
import jwt from 'jsonwebtoken';
import {PropsFromState, PropsFromDispatch} from './';
import { convertFromEpoch } from '../../utils/helpers/epoch';
import {
  Card, CardImg, CardText, Button,
  CardTitle, CardSubtitle, 
} from 'reactstrap';

interface TokenDecoded {
  iss: string;
  aud: string;
  auth_time: number;
  email: string;
  email_verified: boolean;
  exp: number;
  firebase: string[];
  iat: number;
  sub: string;
  user_id: string;
}

type IProps = PropsFromState & PropsFromDispatch;

class User extends React.Component<IProps> {

  state = {
  };

  componentDidMount() {
    this.fetchUserData();
  }

  fetchUserData = (): void => {
    const { auth } = this.props;
    const { token } = auth;

    if (token) {
      this.props.actionGetUserData({idToken:token});  
    }    
  }

  render(): JSX.Element {   
    const { user } = this.props;
    console.log("Render", this.props);
    return (
      <div style={{width:'300px'}}>
        <Card>
          <CardImg top width="100%" src={user.photoUrl ? user.photoUrl : 'https://via.placeholder.com/150.png?text=Avatar'} alt="User Img" />
          <CardTitle>{user.displayName}</CardTitle>
          <CardSubtitle>{user.email}</CardSubtitle>
          <CardText><b>ID:</b>{user.localId}</CardText>
        </Card>
      </div>      
    );
  }
}

export default User;