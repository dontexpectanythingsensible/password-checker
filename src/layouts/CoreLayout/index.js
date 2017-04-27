import { connect } from 'react-redux';
import CoreLayout from './CoreLayout';

const mapStateToProps = (state) => ({
  strength: state.strength
});

export default connect(mapStateToProps, null)(CoreLayout);
