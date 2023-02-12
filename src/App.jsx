import React, { useState, useEffect } from 'react'

function App() {
  // 函数组件 App 在每一次渲染都会被调用，每一次调用都会形成一个独立上下文
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setTimeout(() => {
      console.log('count', count)
    }, 3000)
  }

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
      <button onClick={handleClick}>Show count</button>
    </div>
  )
}

export default App
