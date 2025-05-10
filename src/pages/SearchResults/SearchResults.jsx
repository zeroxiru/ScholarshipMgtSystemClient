import React from 'react';
import { useLocation } from 'react-router-dom';

import SearchResultCard from '../../components/SearchResultCard/SearchResultCard';
import FilterSidebar from '../../components/Home/FilterSidebar';

const SearchResults = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const subject = query.get('subject') || "Business & Management";
    const searchLocation = query.get('location');

    // 🔹 Simulated search results based on query
    const results = subject === 'masters' && !searchLocation
        ? [] // No results for this combination
        : [
            {
                title: "Sports Management and Events",
                university: "Les Roches",
                location: "Sierre, Switzerland",
                price: "5,315,497 BDT / year",
                duration: "1 year",
                isFeatured: true,
            },
        ];

    return (
        <div className="flex bg-[#f5f6fa] min-h-screen">
            {/* Sidebar */}
            <div className="w-[300px] bg-white border-r">
                <FilterSidebar selectedSubject={subject} />
            </div>

           {/* Main Content */}
      <div className="flex-1 px-6 py-4">
        <h1 className="text-2xl font-bold mb-3">
          Master&apos;s degrees in {subject}
        </h1>

        <div className="flex items-center border-b mb-4">
          <button className="border-b-2 border-blue-600 text-blue-600 font-semibold px-4 py-2">Programmes</button>
          <button className="text-gray-500 hover:text-black px-4 py-2">Universities</button>
          <button className="text-gray-500 hover:text-black px-4 py-2">Scholarships</button>
        </div>

        {results.length === 0 ? (
          <div className="text-center text-gray-600 mt-10 text-lg">
            No items available for the current search criteria.
          </div>
        ) : (
          <div className="space-y-6">
            {results.map((item, index) => (
              <SearchResultCard key={index} {...item} />
            ))}
          </div>
        )}
      </div>
        </div>
    );
};

export default SearchResults;
