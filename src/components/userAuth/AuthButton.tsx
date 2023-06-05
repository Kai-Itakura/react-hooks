import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

const AuthButton = (): JSX.Element => {
  const auth = useContext(AuthContext)
  console.log(auth)

  const handleSignOut = () => {
    auth?.setUserAuth(false)
  }

  const handelSignIn = () => {
    auth?.setUserAuth(true)
  }

  return (
    <div>
      {auth?.userAuth ? (
        <button onClick={handleSignOut}>ログアウト</button>
      ) : (
        <button onClick={handelSignIn}>ログイン</button>
      )}
    </div>
  )
}

export default AuthButton
