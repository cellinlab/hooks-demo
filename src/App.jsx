import React, { useState, useEffect } from 'react'

const getList = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([5, 6, 7, 8])
    }, 1000)
  })
}

function App() {
  // 函数内声明变量，可以使用 useState，其接收一个参数，参数为初始值
  const [list, setList] = useState([1, 2, 3, 4])
  const [query, setQuery] = useState('')

  useEffect(() => {
    // useEffect 会在组件渲染后执行，可以在这里执行异步操作
    (async () => {
      const list = await getList(query)
      console.log('query', query)
      console.log('list', list)
      setList(list)
    })()
  }, [query])

  return (
    <div className="App">
      {
        list.map((item, index) => {
          return <span key={index}>{item}</span>
        })
      }
      <input type="text" onChange={e => setQuery(e.target.value)} placeholder='请输入搜索值' />
    </div>
  )
}

export default App
