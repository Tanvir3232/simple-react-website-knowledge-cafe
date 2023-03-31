import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmark from './components/Bookmark/Bookmark'

function App() {
  const [spentTime, setSpentTime] = useState(0);
  const [bookmark, setBookmark] = useState([]);
  const [blogs, setBlogs] = useState([]);

  const handleSpentTime = readTime => {
    const getreadTime = JSON.parse(localStorage.getItem('read-time'));
    if (getreadTime) {
      const newReadTime = parseInt(getreadTime) + readTime;
      localStorage.setItem('read-time', newReadTime);
      setSpentTime(newReadTime)
    } else {
      localStorage.setItem('read-time', readTime);
      setSpentTime(readTime);
    }
  }
  const handleBookmark = title => {
    let bookmarkList = [];
    const previousBookmarked = JSON.parse(localStorage.getItem('bookmark'));
    if (previousBookmarked) {
      const checkDuplicate = previousBookmarked.find(pb=>pb === title);
      if(checkDuplicate){
        alert("alrea");
        bookmarkList = [...previousBookmarked];
      }else{
        bookmarkList = [...previousBookmarked, title];
      }
      
    } else {
      bookmarkList.push(title);
    }
    localStorage.setItem('bookmark', JSON.stringify(bookmarkList));
    setBookmark(bookmarkList);
  }
  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => setBlogs(data))
  }, []);
  useEffect(() => {
    const getreadTime = JSON.parse(localStorage.getItem('read-time'));
    setSpentTime(getreadTime);
    const getBookmark = JSON.parse(localStorage.getItem('bookmark'));
    setBookmark(getBookmark);
  }, [])
  return (
    <div className="App">
      <Header></Header>
      <main className='w-4/5 mx-auto flex justify-between my-5'>
        <div className='w-3/5 ml-8'>
          <Blogs
            handleSpentTime={handleSpentTime}
            handleBookmark={handleBookmark}
            blogs = {blogs}
          ></Blogs>
        </div>
        <div className='w-2/5 pl-5'>
          <h4 className='text-2xl card shadow-xl p-5 text-center bg-slate-200 text-blue-600 font-semibold'>Spent time on read : {spentTime ? spentTime : "0"} min</h4>
          <div className='card shadow-xl bg-slate-200 mt-6 p-5'>
            <h1 className='text-2xl font-semibold'>Bookmarked Blogs : {bookmark ? bookmark.length : "0"}</h1>
            <Bookmark 
                bookmark={bookmark}
                blogs   = {blogs}
            ></Bookmark>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
