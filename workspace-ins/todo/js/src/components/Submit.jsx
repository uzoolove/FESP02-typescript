import Button from '@components/Button';
import PropTypes from 'prop-types';

const Submit = ({ children, ...rest }) => {
  return (
    <Button type="submit" { ...rest }>{ children }</Button>
  );
};

Submit.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Submit;