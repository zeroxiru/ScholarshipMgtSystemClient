import React from 'react';

const SearchResultCard = ({ title, university, location, price, duration, rank, isFeatured }) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow flex flex-col gap-2">
      <h2 className="text-lg font-bold text-blue-900">{title}</h2>
      <p className="text-sm text-gray-600">M.Sc. / Full-time / On Campus</p>
      <div>
        <p className="font-semibold">{university}</p>
        <p className="text-sm text-gray-500">{location}</p>
      </div>
      {rank && <p className="text-xs bg-gray-200 w-fit px-2 py-1 rounded-full text-gray-700">Ranked {rank}</p>}
      <a href="#" className="text-blue-600 underline text-sm">View Programme Information</a>
      <div className="flex items-center justify-between">
        <div className="text-right font-semibold text-lg">{price}</div>
        <div className="text-sm text-gray-600">{duration}</div>
      </div>
      {isFeatured && <div className="text-xs text-gray-500">Featured</div>}
    </div>
  );
};

export default SearchResultCard;
