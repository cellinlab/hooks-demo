import React, { useState } from 'react'

function App() {
  // 函数内声明变量，可以使用 useState，其接收一个参数，参数为初始值
  const [list, setList] = useState([1, 2, 3, 4]);

  return (
    <div className="App">
      {
        list.map((item, index) => {
          return <div key={index}>{item}</div>
        })
      }
    </div>
  )
}

export default App
