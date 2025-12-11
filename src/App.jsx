import { useState } from 'react'
import Content from './Content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Content/>
    </>
  )
}

export default App
