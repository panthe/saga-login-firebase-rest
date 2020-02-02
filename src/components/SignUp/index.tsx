import { connect } from 'react-redux';
import { actionSignUp } from '../../store/auth/signup';
import { State } from '../../store/applicationState';
import { AuthState } from '../../store/auth';
import SignUp from './SignUp';
import { AuthSignUpParams } from '../../store/auth/signup';
import { Dispatch } from 'redux';

export interface PropsFromState {
  auth: AuthState;
}

export interface PropsFromDispatch {
  actionSignUp: (params: AuthSignUpParams) => void;
}

const mapStateToProps = (state: State): PropsFromState => ({
  auth: state.auth
});

const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch => ({
  actionSignUp: (params: AuthSignUpParams) => dispatch(actionSignUp(params))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
