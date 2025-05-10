import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [subject, setSubject] = useState('');
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    // Redirect with query parameters
    navigate(`/search-results?subject=${encodeURIComponent(subject)}&location=${encodeURIComponent(location)}`);
  };

  return (
    <div className="flex justify-center items-center min-h-[100px] bg-slate-500">
      <div className="rounded-md overflow-hidden shadow-md flex bg-white">
        <input
          type="text"
          placeholder="What to study?"
          className="px-4 py-2 w-60 focus:outline-none border-r dark: bg-white dark: text-black"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <input
          type="text"
          placeholder="Where to study?"
          className="px-4 py-2 w-60 focus:outline-none border-r dark: bg-white dark: text-black"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button
          className="bg-[#f6795d] hover:bg-orange-500 text-white px-6 py-2"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
