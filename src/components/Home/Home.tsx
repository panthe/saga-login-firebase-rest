import React from 'react';
import { PropsFromState, PropsFromDispatch } from './';

type IProps = PropsFromState & PropsFromDispatch;

class Home extends React.Component<IProps> {
  render(): JSX.Element {
    return (
      <div>
        Home
      </div>
    );
  }
}

export default Home;