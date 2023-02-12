import React, { useState, useEffect } from 'react'

const getList = (query) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`getList with query ${query}`)
      resolve([5, 6, 7, 8])
    }, 1000)
  })
}

const useApi = () => {
  const [list, setList] = useState([1, 2, 3, 4])
  const [query, setQuery] = useState('')

  useEffect(() => {
    (async () => {
      const newList = await getList(query)
      console.log('newList', newList)
      setList(newList)
    })()
  }, [query])

  return [ { list }, setQuery ]
}

export default useApi
