import { useCallback, useState } from 'react'
import './App.scss'
import Title from './components/Title/Title'
import Button from './components/button/Button'
import Counter from './components/counter/Counter'
import SubTitle from './components/subTitle/SubTitle'

function App(): JSX.Element {
  const [countA, setCountA] = useState<number>(0)
  const [countB, setCountB] = useState<number>(0)

  // useCallbackでメモ化
  const handelCountUpA = useCallback(() => {
    setCountA((prevCount) => prevCount + 1)
  }, [])

  const handelCountUpB = useCallback(() => {
    setCountB((prevCount) => prevCount + 1)
  }, [])

  console.log('-----------------------')

  return (
    <div className='App'>
      <Title titleText={'#6 useCallback'} />
      <SubTitle subTitleText={'緊急アンケート: あなたはA派？それともB派？'} />
      <div className='itemList'>
        <div className='item'>
          <Counter counterTitle={'A派'} count={countA} />
          <Button buttonText='もちろんA派！' onClick={handelCountUpA} />
        </div>
        <div className='item'>
          <Counter counterTitle={'B派'} count={countB} />
          <Button buttonText='もちろんB派！' onClick={handelCountUpB} />
        </div>
      </div>
    </div>
  )
}

export default App
