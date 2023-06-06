import React from 'react'
import styles from './Counter.module.scss'

type Props = {
  counterTitle: string
  count: number
}

const Counter = React.memo(({ counterTitle, count }: Props): JSX.Element => {
  console.log(`counter: ${counterTitle}`)

  return (
    <div className={styles.root}>
      {counterTitle}: <span className={styles.count}>{count}人</span>
    </div>
  )
})

export default Counter
