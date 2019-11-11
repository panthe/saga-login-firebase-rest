import { connect } from 'react-redux';
import { State } from '../../store/applicationState';
import Home from './Home';

export interface PropsFromState {};

export interface PropsFromDispatch {};

const mapStateToProps = (state:State): State => {
  return state;
};

export default connect(mapStateToProps)(Home);
