import Button, { ButtonProps } from '@components/Button';

const Submit: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <Button type="submit" { ...rest }>{ children }</Button>
  );
};

export default Submit;