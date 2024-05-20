import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  alert("happy wedding anniversory acha amma")

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <main>
        <nav className='navbar'><p className='title'><center>Happy Wedding Anniversory</center></p></nav>
        <div className='row'>
          <div className='col-6  img'><img src='ph1.jpg' width={"100%"}/></div>
          <div className='col-6  img'><img src='ph2.jpg' width={"100%"}/></div>
        </div>
        <div className='row'>
        <div className='col-6  img'><img src='ph3.jpg' width={"100%"} height={"80%"}/></div>
        <div className='col-6  img'><img src='ph4.jpg' width={"100%"} height={"80%"}/></div>
        </div>
        <div className='row'>
        <div className='col-6  img'><img src='ph5.jpg' width={"100%"} height={"80%"}/></div>
        <div className='col-6  img'><img src='ph6.jpg' width={"100%"} height={"80%"}/></div>
        </div>
        <div className='row'>
        <div className='col-6  img'><img src='ph7.jpg' width={"100%"} height={"80%"}/></div>
        <div className='col-6  img'><img src='ph8.jpg' width={"100%"} height={"80%"}/></div>
        </div>
        <div className='row'>
        <div className='col-6  img'><img src='ph9.jpg' width={"100%"} height={"80%"}/></div>
        <div className='col-6  img'><img src='ph31.jpg' width={"100%"} height={"80%"}/></div>
        </div>
        
      </main>
    </>
  )
}

export default App
