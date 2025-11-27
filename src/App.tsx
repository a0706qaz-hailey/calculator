import { useState } from 'react'
import './App.css'
import Layout from './components/Layout'

function App() {
  const signList = [
    "%", "CE", "C", "backdpace",
    "1/x", "X²", "2√", "÷",
    "7", "8", "9", "x",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "+", "0", ".", "=",
  ];

  const [count, setCount] = useState(0)

  return (
    <Layout>

      <div className="grid grid-cols-4 gap-4">

        {signList.map((sign, index) => {

          return (
            <div key={index} className='' >
              {sign}
            </div>
          )
        }
        )}


      </div>
    </Layout>

  )
}

export default App
