import React, { useState, useEffect } from 'react'
import useApi from './useApi'

function App() {
  const [{ list }, setQuery] = useApi()

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
