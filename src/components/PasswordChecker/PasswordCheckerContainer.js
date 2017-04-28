import { connect } from 'react-redux';
import { strengthChange } from 'store/strength';
import PasswordChecker from './PasswordChecker';

const mapDispatchToProps = (dispatch, props) => ({
  passwordUpdate: strength => dispatch(strengthChange(strength))
});

export default connect(null, mapDispatchToProps)(PasswordChecker);
