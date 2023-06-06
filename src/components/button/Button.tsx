import React from 'react'
import styles from './Button.module.scss'

type Props = {
  buttonText: string
  onClick: () => void
}

// React.memoでラップすることでButtonコンポーネントに渡すPropsに変更がない場合は再レンダリングされない
// React.memoでPropsの前後の状態を比較してレンダリングするかどうかを決定している
const Button = React.memo(({ buttonText, onClick }: Props): JSX.Element => {
  console.log(`button: ${buttonText}`)

  return (
    <div className={styles.root}>
      <button onClick={onClick} type='button' className={styles.button}>
        {buttonText}
      </button>
    </div>
  )
})

export default Button
