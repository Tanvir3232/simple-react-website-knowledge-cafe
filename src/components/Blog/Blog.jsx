import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookBookmark, faBookmark, faCoffee } from '@fortawesome/free-solid-svg-icons'


const Blog = (props) => {
    const handleSpentTime = props.handleSpentTime;
    const handleBookmark  = props.handleBookmark;
    const { title, author_image, author_name, blog_image, published_date, read_time, id } = props.blog;
    return (
        <div className="card  w-full bg-base-100 shadow-xl">
            <figure><img className='w-full md:h-96 lg:h-96 h-48' src={blog_image} alt="no found" /></figure>
            <div className="p-5 flex flex-col md:flex-row lg:flex-row justify-between items-center">
                <div className='w-48 flex flex-col md:flex-row lg:flex-row justify-between items-center'>
                    <img className='w-12 h-12 rounded-full' src={author_image} alt="" />
                    <div>
                        <h1 className='text-xl font-semibold'>{author_name}</h1>
                        <p>{published_date}</p>
                    </div>
                </div>
                <div>
                    <span>{read_time} min read  <button onClick={()=>handleBookmark(title)}><FontAwesomeIcon className='text-3xl' icon={faBookmark}/></button></span>
                </div>

            </div>
            <div className='md:p-8 lg:p-8 p-3 text-left'>
                <h1 className='md:text-4xl text-xl font-bold'>{title}</h1>
                <button className="btn btn-link text-lg" onClick={()=>handleSpentTime(read_time)}>Mark as read</button>
            </div>
        </div>
    );
};

export default Blog;