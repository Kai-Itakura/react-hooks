import './App.css'
import { AuthProvider } from './context/AuthContext'
import Bank from './pages/bank/Bank'

function App(): JSX.Element {
  return (
    <AuthProvider>
      <div className='App'>
        <h2>#5 useReducer</h2>
        <Bank />
      </div>
    </AuthProvider>
  )
}

export default App
