import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handleSpentTime,handleBookmark,blogs}) => {
   
    return (
        <div className='grid grid-cols-1 gap-8'>
            {
                blogs.map(blog=><Blog
                   key={blog.id}
                   blog={blog}
                   handleSpentTime = {handleSpentTime}
                   handleBookmark  = {handleBookmark}
                ></Blog>)
            }
        </div>
    );
};

export default Blogs;