import React, { useEffect, useState } from 'react'
import styles from './Counter.module.scss'

const Counter = () => {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  // useEffect(() => {
  //   console.log('マウント時とcount1が変化した時にUseEffectが発火')
  // }, [count1])

  useEffect(() => {
    console.log('マウント時とcount1が変化した時にUseEffectが発火')
    const countUp = setInterval(() => {
      setCount1((prevCount) => prevCount + 1)
      console.log('countUp')
    }, 1000)
    return () => {
      clearInterval(countUp)
      console.log('unMount')
    }
  }, [])

  return (
    <div className={styles.root}>
      <div className={styles.buttonWrapper}>
        <span className={styles.buttonText}>カウント1</span>
        <button
          onClick={() => {
            setCount1((prevCount) => prevCount + 1)
          }}
        >
          {count1}
        </button>
      </div>

      <div className={styles.buttonWrapper}>
        <span className={styles.buttonText}>カウント2</span>
        <button
          onClick={() => {
            setCount2((prevCount) => prevCount + 1)
          }}
        >
          {count2}
        </button>
      </div>
    </div>
  )
}

export default Counter
