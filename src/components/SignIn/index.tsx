import { connect } from 'react-redux';
import { actionSignIn } from '../../store/auth/signin';
import { State} from '../../store/applicationState';
import { AuthState } from '../../store/auth';
import SignIn from './SignIn';
import { AuthSignInParams } from "../../store/auth/signin";
import { Dispatch } from "redux";

export interface PropsFromState {
  auth: AuthState,
}

export interface PropsFromDispatch {
  actionSignIn: (params: AuthSignInParams) => void;
}

const mapStateToProps = (state: State): PropsFromState => ({
  auth: state.auth,
});


const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch  => ({
  actionSignIn: (params: AuthSignInParams) => dispatch(actionSignIn(params)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SignIn);