import React, { useState, useEffect } from 'react';

const BrowseByDiscipline = () => {
  const [selectedDiscipline, setSelectedDiscipline] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch the data from the public folder
    fetch('/disiplineData.json')
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData); // Set the state with the fetched data
        console.log(jsonData);
      })
      .catch((error) => {
        console.error('Error loading JSON data:', error);
      });
  }, []);

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Browse by Discipline
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {data.map((discipline) => (
            <div
              key={discipline.id}
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelectedDiscipline(discipline)}
            >
              <div className="text-4xl mb-4">{discipline.icon}</div>
              <p className="text-lg font-medium">{discipline.title}</p>
            </div>
          ))}
        </div>
      </div>

      {selectedDiscipline && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
          <div className="text-7xl mb-4 text-center">{selectedDiscipline.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{selectedDiscipline.title}</h3>
            <p className="text-gray-600 mb-4">{selectedDiscipline['sub-title']}</p>
            <p className="text-gray-800 mb-4">{selectedDiscipline.description}</p>
           
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
              onClick={() => setSelectedDiscipline(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default BrowseByDiscipline;
