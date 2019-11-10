import React from 'react';

import {PropsFromState, PropsFromDispatch} from './'


type IProps = PropsFromState & PropsFromDispatch;

class User extends React.Component<IProps> {
  
  constructor(props: IProps) {
    super(props);

    const { auth } = this.props;
    const refresh_token = auth.refreshToken;
    const grant_type = 'refresh_token';
    if (refresh_token){
      this.props.actionRefreshToken({grant_type, refresh_token});
    }
  }
  
  render(): JSX.Element {   
    
    return (
      <div>
        User
      </div>      
    );
  }
}

export default User;