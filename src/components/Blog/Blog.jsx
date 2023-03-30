import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookBookmark, faBookmark, faCoffee } from '@fortawesome/free-solid-svg-icons'


const Blog = (props) => {
    const handleSpentTime = props.handleSpentTime;
    const { title, author_image, author_name, blog_image, published_date, read_time, id } = props.blog;
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img className='w-full h-96' src={blog_image} alt="no found" /></figure>
            <div className="p-5 flex justify-between items-center">
                <div className='w-48 flex justify-between items-center'>
                    <img className='w-12 h-12 rounded-full' src={author_image} alt="" />
                    <div>
                        <h1 className='text-xl font-semibold'>{author_name}</h1>
                        <p>{published_date}</p>
                    </div>
                </div>
                <div>
                    <span>{read_time} min read  <FontAwesomeIcon className='text-3xl' icon={faBookmark}/></span>
                </div>

            </div>
            <div className='p-8 text-left'>
                <h1 className='text-4xl font-bold'>{title}</h1>
                <button className="btn btn-link text-lg" onClick={()=>handleSpentTime(read_time)}>Mark as read</button>
            </div>
        </div>
    );
};

export default Blog;