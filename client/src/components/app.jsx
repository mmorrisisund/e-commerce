import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

import AuthProvider from '../context/authContext'
import AppShell from './AppShell'

const client = new QueryClient()
const Home = lazy(() => import('../pages/Home'))
const Login = lazy(() => import('../pages/Login'))
const Logout = lazy(() => import('../pages/Logout'))
const Signup = lazy(() => import('../pages/Signup'))
const Search = lazy(() => import('../pages/Search'))

const App = () => (
  <Suspense fallback={<p>Loading...</p>}>
    <Router>
      <QueryClientProvider client={client}>
        <AuthProvider>
          <AppShell>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/login' component={Login} />
              <Route path='/logout' component={Logout} />
              <Route path='/signup' component={Signup} />
              <Route path='/search' component={Search} />
            </Switch>
          </AppShell>
        </AuthProvider>
      </QueryClientProvider>
    </Router>
  </Suspense>
)

export default App
