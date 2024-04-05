import { useState } from 'react'

function App({mode = 'light'}) {
  const [count, setCount] = useState(0)

  return (
    <button className={`py-2 px-4 rounded ${mode === "light" ? "text-black bg-slate-200" : "text-white bg-gray-800"}`} onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
  )
}

export default App
