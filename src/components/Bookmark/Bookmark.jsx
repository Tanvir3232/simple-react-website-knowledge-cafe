import React, { useEffect, useState } from 'react';
import SingleBookmark from '../SingleBookmark/SingleBookmark';
const Bookmark = ({bookmark,blogs}) => {
   
    return (
        <div >
            { bookmark && 
                bookmark.map((singleBookmark,index)=>
                <SingleBookmark
                   key={index}
                   singleBookmark = {singleBookmark}>
                </SingleBookmark>)
            }
        </div>
    );
};

export default Bookmark;