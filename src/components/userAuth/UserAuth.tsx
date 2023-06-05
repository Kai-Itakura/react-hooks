import React from 'react'
import AuthButton from './AuthButton'
import AuthDisplay from './AuthDisplay'

const UserAuth = (): JSX.Element => {
  return (
    <div>
      <h4>ユーザー認証</h4>
      <AuthButton />
      <AuthDisplay />
    </div>
  )
}

export default UserAuth
