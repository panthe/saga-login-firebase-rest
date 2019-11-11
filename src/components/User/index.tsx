import { connect } from 'react-redux';
import { AuthState } from '../../store/auth';
import { 
  actionGetUserData,
  UserParams,
  UserState
} from '../../store/user';
import { State } from '../../store/applicationState';
import User from './User';
import { Dispatch } from "redux";


export interface PropsFromState {
  auth: AuthState,
  user: UserState
}

export interface PropsFromDispatch {
  actionGetUserData: (params: UserParams) => void;
}

const mapStateToProps = (state: State): PropsFromState => ({
  auth: state.auth,
  user: state.user
});


const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch  => ({
  actionGetUserData: (params: UserParams) => dispatch(actionGetUserData(params)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(User);