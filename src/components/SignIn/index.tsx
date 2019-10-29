import React from 'react';
import { connect } from 'react-redux';
import { actionSignIn } from '../../store/auth';
import { State} from '../../store/applicationState';
import { AuthState} from '../../store/auth';


import SignIn from './SignIn';
import {AuthParams} from "../../store/auth";
import {Dispatch} from "redux";


export interface PropsFromState {
  auth: AuthState,

}


export interface PropsFromDispatch {
  actionSignIn: (params: AuthParams) => void;

}



const mapStateToProps = (state: State): PropsFromState => ({
  auth: state.auth,

});


const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch  => ({
  actionSignIn: (params: AuthParams) => dispatch(actionSignIn(params)),

});



export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SignIn);






