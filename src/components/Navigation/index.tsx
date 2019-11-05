import { connect } from 'react-redux';
import { State } from '../../store/applicationState';
import { AuthState } from '../../store/auth';
import Navigation from './Navigation';

export interface PropsFromState {
  auth: AuthState,
}

const mapStateToProps = (state: State): PropsFromState => ({
  auth: state.auth,
});

export default connect(
    mapStateToProps,
)(Navigation);
