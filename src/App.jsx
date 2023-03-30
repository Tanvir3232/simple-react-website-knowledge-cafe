import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'

function App() {
  

  return (
    <div className="App">
       <Header></Header>
       <main className='w-4/5 mx-auto flex justify-between my-5'>
           <div className='w-3/5'>
               <Blogs></Blogs>
           </div>
           <div className='w-2/5'>
               <h4 className='text-2xl'>Spent time on read : 177 min</h4>

           </div>
       </main>
    </div>
  )
}

export default App
