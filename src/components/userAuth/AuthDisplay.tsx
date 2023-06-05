import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

const AuthDisplay = (): JSX.Element => {
  const auth = useContext(AuthContext)

  return <div>{auth?.userAuth ? <p>ログイン中</p> : <p>ログアウト中</p>}</div>
}

export default AuthDisplay
