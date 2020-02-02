import { connect } from 'react-redux';
import { State } from '../../store/applicationState';
import Landing from './Landing';

const mapStateToProps = (state: State): State => {
  return state;
};

export default connect(mapStateToProps)(Landing);
