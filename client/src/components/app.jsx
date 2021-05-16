import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

import AuthProvider from '../context/authContext'

const client = new QueryClient()
const Home = lazy(() => import('../pages/Home'))

const App = () => (
  <Suspense fallback={<p>Loading...</p>}>
    <Router>
      <QueryClientProvider client={client}>
        <AuthProvider>
          <Switch>
            <Route path='/' component={Home} />
          </Switch>
        </AuthProvider>
      </QueryClientProvider>
    </Router>
  </Suspense>
)

export default App
