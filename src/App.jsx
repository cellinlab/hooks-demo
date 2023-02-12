import React, { useState, useEffect, useCallback } from 'react'

function Child({ callback }) {
  useEffect(() => {
    callback()
  }, [callback])

  return (
    <div>
      <span>Child</span>
    </div>
  )
}

function App() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')

  // const cb = () => {
  //   console.log('cb is called')
  // }

  const cb = useCallback(() => {
    console.log('cb is called')
  }, [])

  return (
    <div className="App">
      <input type="text" onChange={e => setName(e.target.value)} placeholder='请输入名字' />
      <input type="text" onChange={e => setPhone(e.target.value)} placeholder='请输入电话' />
      <input type="text" onChange={e => setAddress(e.target.value)} placeholder='请输入地址' />
      <Child callback={cb} />
    </div>
  )
}

export default App
