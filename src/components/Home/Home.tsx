import React from 'react';
import { PropsFromState } from './';

type IProps = PropsFromState;

class Home extends React.Component<IProps> {
  render(): JSX.Element {
    return <div>Home</div>;
  }
}

export default Home;
