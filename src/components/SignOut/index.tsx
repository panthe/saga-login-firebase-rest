import { connect } from 'react-redux';
import { actionSignOut } from '../../store/auth/signout';
import { State } from '../../store/applicationState';
import { AuthState } from '../../store/auth';
import SignOut from './SignOut';
import { Dispatch } from 'redux';

export interface PropsFromState {
  auth: AuthState;
}

export interface PropsFromDispatch {
  actionSignOut: () => void;
}

const mapStateToProps = (state: State): PropsFromState => ({
  auth: state.auth
});

const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch => ({
  actionSignOut: () => dispatch(actionSignOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignOut);
