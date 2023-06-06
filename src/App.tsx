import React, { useMemo, useState } from 'react'
import styles from './App.module.scss'
import Title from './components/Title/Title'

const App = (): JSX.Element => {
  const [count, setCount] = useState<number>(1)
  const [userName, setUserName] = useState<string>('')

  const exponentiation = useMemo(() => {
    return heavyExponentiationFunction(count)
  }, [count])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (userName === '') {
      alert('ユーザー名を入力してください')
    } else {
      alert(`ユーザー名： ${userName}`)
      setUserName('')
    }
  }

  return (
    <div className={styles.app}>
      <Title titleText={'#7 useMemo'} />
      <div className={styles.content}>
        <div className={styles.counter}>
          <button
            className={styles.incrementButton}
            onClick={() => {
              setCount(count + 1)
            }}
          >
            {count}
          </button>
          のべき乗は”{exponentiation}”
        </div>
        <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
          <label className={styles.label}>ユーザー名</label>
          <input
            className={styles.input}
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value)
            }}
          />
          <button className={styles.submitButton} type='submit'>
            送信する
          </button>
        </form>
      </div>
    </div>
  )
}

const heavyExponentiationFunction = (count: number) => {
  let i = 0
  while (i < 10000) {
    console.log(i)
    i++
  }
  return count ** 2
}

export default App
