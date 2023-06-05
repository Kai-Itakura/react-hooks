import './App.css'
import UserAuth from './components/userAuth/UserAuth'
import { AuthProvider } from './context/AuthContext'

function App(): JSX.Element {
  return (
    <AuthProvider>
      <div className='App'>
        <h2>#4 useContext</h2>
        <UserAuth />
      </div>
    </AuthProvider>
  )
}

export default App
