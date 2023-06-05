import React, { useState } from 'react'
import './App.css'
// import Counter from './components/counter/Counter'
import ItemList from './components/itemList/ItemList'
// import InputForm from './components/InputForm'

function App() {
  const [isDisplay, setIsDisplay] = useState(true)
  const handleDisplay = () => {
    setIsDisplay(!isDisplay)
  }
  return (
    <div className='App'>
      <h2>#2 UseEffect</h2>
      {/* <button onClick={() => handleDisplay()}>{isDisplay ? 'コンポーネントを非表示' : 'コンポーネントを表示'}</button>
      {isDisplay && <Counter />} */}
      {/* <InputForm /> */}
      <ItemList />
    </div>
  )
}

export default App
