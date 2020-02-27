import React from 'react';
import AppRouter from './components/Router';
import { AuthState } from './store/auth';
import { actionGetChangeRoute } from './store/route';
import { State } from './store/applicationState';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

export interface PropsFromState {
  auth: AuthState;
}

export interface PropsFromDispatch {
  actionGetChangeRoute: () => void;
}

const mapStateToProps = (state: State): PropsFromState => ({
  auth: state.auth
});

const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch => ({
  actionGetChangeRoute: () => dispatch(actionGetChangeRoute())
});

type IProps = PropsFromState & PropsFromDispatch;

class App extends React.Component<IProps> {
  componentDidMount(): void {
    this.props.actionGetChangeRoute();
  }

  render() {
    return <AppRouter />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
