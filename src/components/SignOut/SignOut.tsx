import React from 'react';

import {PropsFromState, PropsFromDispatch} from './';

type IProps = PropsFromState & PropsFromDispatch;

class SignOut extends React.Component<IProps> {
  componentWillMount(){
    this.props.actionSignOut();
  }

  render(): JSX.Element {
    return (
      <div>
        SignOut...
      </div>
    );
  }
}

export default SignOut;