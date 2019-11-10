import { connect } from 'react-redux';
import { actionRefreshToken } from '../../store/auth/refreshtoken';
import { State} from '../../store/applicationState';
import { AuthState } from '../../store/auth';


import User from './User';
import { AuthRefreshTokenParams } from "../../store/auth/refreshtoken";
import { Dispatch } from "redux";


export interface PropsFromState {
  auth: AuthState,
}

export interface PropsFromDispatch {
  actionRefreshToken: (params: AuthRefreshTokenParams) => void;
}

const mapStateToProps = (state: State): PropsFromState => ({
  auth: state.auth,
});


const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch  => ({
  actionRefreshToken: (params: AuthRefreshTokenParams) => dispatch(actionRefreshToken(params)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(User);