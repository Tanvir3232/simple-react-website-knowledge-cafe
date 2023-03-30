import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'

function App() {
  const [spentTime,setSpentTime] = useState(0);

  const handleSpentTime = readTime =>{
    const getreadTime = JSON.parse(localStorage.getItem('read-time'));
    if(getreadTime){
       const newReadTime = parseInt(getreadTime)+readTime;
       localStorage.setItem('read-time',newReadTime);
       setSpentTime(newReadTime)
    }else{
      localStorage.setItem('read-time',readTime);
      setSpentTime(readTime);
    }
  }
  useEffect(()=>{
    const getreadTime = JSON.parse(localStorage.getItem('read-time'));
    setSpentTime(getreadTime);
  },[])
  return (
    <div className="App">
       <Header></Header>
       <main className='w-4/5 mx-auto flex justify-between my-5'>
           <div className='w-3/5 ml-8'>
               <Blogs handleSpentTime={handleSpentTime}></Blogs>
           </div>
           <div className='w-2/5 pl-5'>
               <h4 className='text-2xl card shadow-xl p-5 text-center bg-slate-200 text-blue-600 font-semibold'>Spent time on read : {spentTime} min</h4>
           </div>
       </main>
    </div>
  )
}

export default App
