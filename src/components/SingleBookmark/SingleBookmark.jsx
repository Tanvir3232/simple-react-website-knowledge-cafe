import React from 'react';

const SingleBookmark = ({singleBookmark}) => {
   
    return (
        <div className='card shadow-xl p-5 bg-white my-5 text-2xl font-bold'>
             {singleBookmark?singleBookmark:""}
        </div>
    );
};

export default SingleBookmark;