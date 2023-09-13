import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
  return (
    <div className="md:w-1/3 bg-gray-300 pt-4 ml-4 mt-2">
      <h2 className="text-3xl text-center ">
        Bookmarks Blogs: {bookmarks.length}
      </h2>
      {bookmarks.map((bookmark) => (
        <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

export default Bookmarks;