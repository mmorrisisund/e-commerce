import { Redirect, Route } from 'react-router'

const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        return true ? children : <Redirect to='/' />
      }}
    />
  )
}

export default PrivateRoute
