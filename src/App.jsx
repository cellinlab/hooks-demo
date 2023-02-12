import React, { useState, useEffect, useMemo } from 'react'

function Child({ data }) {
  useEffect(() => {
    console.log('Child useEffect data', data)
  }, [data])

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

  // 把父组件需要传递的参数做标记，父组件其他状态更新，不影响传递给子组件的对象
  const data = useMemo(() => {
    return {
      name,
      phone,
    }
  }, [name, phone])

  return (
    <div className="App">
      <input type="text" onChange={e => setName(e.target.value)} placeholder='请输入名字' />
      <input type="text" onChange={e => setPhone(e.target.value)} placeholder='请输入电话' />
      <input type="text" onChange={e => setAddress(e.target.value)} placeholder='请输入地址' />
      <Child data={data} />
    </div>
  )
}

export default App
