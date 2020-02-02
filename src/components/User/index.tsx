import { connect } from 'react-redux';
import { AuthState } from '../../store/auth';
import { actionGetUserData, UserState } from '../../store/user';
import { State } from '../../store/applicationState';
import User from './User';
import { Dispatch } from 'redux';

export interface PropsFromState {
  auth: AuthState;
  user: UserState;
}

export interface PropsFromDispatch {
  actionGetUserData: () => void;
}

const mapStateToProps = (state: State): PropsFromState => ({
  auth: state.auth,
  user: state.user
});

const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch => ({
  actionGetUserData: () => dispatch(actionGetUserData())
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
