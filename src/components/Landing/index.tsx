import { connect } from 'react-redux';
import { State } from '../../store/applicationState';
import { Dispatch } from "redux";
import Landing from './Landing';

export interface PropsFromState {};

export interface PropsFromDispatch {

};

export interface PropsFromDispatch {
  
}

const mapStateToProps = (state:State): State => {
  return state;
};

const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch  => ({
  
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Landing);
