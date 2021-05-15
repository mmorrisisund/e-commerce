import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import AuthProvider, { useAuth } from '../context/authContext'
import { useState } from 'react'

const client = new QueryClient()

const App = () => (
  <Router>
    <QueryClientProvider client={client}>
      <AuthProvider>
        <Switch>
          <Route path='/' component={Test} />
        </Switch>
      </AuthProvider>
    </QueryClientProvider>
  </Router>
)

export default App

const Test = () => {
  const { isAuthenticated, login, logout } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div>
      <h1>{isAuthenticated ? 'yes' : 'no'}</h1>
      <button onClick={() => login(email, password)}>login</button>
      <input
        placeholder='email'
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        placeholder='password'
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={() => logout()}>logout</button>
    </div>
  )
}
