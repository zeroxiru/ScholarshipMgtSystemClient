import React from 'react';

const SearchBar = () => {
    return (
        <div className="flex justify-center items-center min-h-[100px] bg-slate-500 ">
      <div className=" rounded-md overflow-hidden shadow-md flex dark: bg-white">
        <input
          type="text"
          placeholder="What to study?"
          className="px-4 py-2 w-60 focus:outline-none border-r dark: bg-white "
        />
        <input
          type="text"
          placeholder="Where to study?"
          className="px-4 py-2 w-60 focus:outline-none border-r dark: bg-white"
        />
        <button className="bg-[#f6795d] hover:bg-orange-500 text-white px-6 py-2 transition-colors">
          Search
        </button>
      </div>
    </div>
    );
};

export default SearchBar;