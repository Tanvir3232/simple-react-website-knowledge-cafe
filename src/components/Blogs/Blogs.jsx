import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handleSpentTime}) => {
    const [blogs,setBlogs] = useState([]);
    useEffect(()=>{
        fetch('/data.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className='grid grid-cols-1 gap-8'>
            {
                blogs.map(blog=><Blog
                   key={blog.id}
                   blog={blog}
                   handleSpentTime = {handleSpentTime}
                ></Blog>)
            }
        </div>
    );
};

export default Blogs;