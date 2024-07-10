import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ element: Element, ...rest }) => {
  const token = localStorage.getItem('token');

  return token ? <Element {...rest} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
