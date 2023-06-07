import React, { useState } from 'react'
import styles from './App.module.scss'
import Title from './components/Title/Title'
import { useAutoResize } from './hooks'

const App = (): JSX.Element => {
  // 画面に表示する値の一覧を管理
  const [itemList, setItemList] = useState<string[]>([])

  // textareaに入力された値を管理
  const [value, setValue] = useState<string>('')

  // 『送信する』ボタンを押したときに発火する関数
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setItemList([...itemList, value])
    setValue('')
  }

  // textareaへ文字列が入力されたときに発火する関数
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value)
  }

  // textarea要素の高さを動的に調節するためのカスタムフック
  const textareaRef = useAutoResize(value)

  return (
    <div className={styles.app}>
      <Title titleText={'#8 useRef'} />
      <div className={styles.content}>
        <div className={styles.itemList}>
          {itemList.length === 0 ? (
            <h3>No items</h3>
          ) : (
            <ul className={styles.ul}>
              {itemList.map((item) => {
                return (
                  <li className={styles.li} key={item}>
                    {item}
                  </li>
                )
              })}
            </ul>
          )}
        </div>
        <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
          <textarea
            className={styles.textarea}
            onChange={(e) => handleChange(e)}
            value={value}
            // 現在参照している要素をtextareaに設定
            ref={textareaRef}
          />
          <button className={styles.button}>送信する</button>
        </form>
      </div>
    </div>
  )
}

export default App
