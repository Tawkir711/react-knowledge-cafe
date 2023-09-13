import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 bg-gray-300 pt-4 ml-4 mt-2">
      <div className='text-center mb-4'>
        <h3 className="text-4xl">Spent time on read: {readingTime} min </h3>
      </div>
      <h2 className="text-3xl text-center ">
        Bookmarks Blogs: {bookmarks.length}
      </h2>
      {bookmarks.map((bookmark, idx) => (
        <Bookmark key={idx} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

export default Bookmarks;