import { connect } from 'react-redux';
import { State } from '../../store/applicationState';
import Home from './Home';
import { AuthState } from '../../store/auth';

export interface PropsFromState {
  auth: AuthState;
}

const mapStateToProps = (state: State): State => {
  return state;
};

export default connect(mapStateToProps)(Home);
