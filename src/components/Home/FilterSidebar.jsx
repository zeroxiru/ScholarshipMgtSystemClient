import React from 'react';

const FilterSidebar = ({ isVisible, onClose }) => {
    return (
        <>
        <div className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          isVisible ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="p-4 border-b flex justify-between items-center">
            <h2 className="text-lg font-semibold">Filters</h2>
            <button onClick={onClose} className="text-xl font-bold">&times;</button>
          </div>
          {/* Filter contents here */}
          <div class="w-full max-w-xs bg-white p-4 shadow-md">
  {/* <!-- Header --> */}
  <div class="border-b pb-2 mb-4">
    <h2 class="text-sm font-semibold">Selected filters</h2>
    <div class="flex justify-between items-center mt-2">
      <div class="bg-gray-100 text-sm px-2 py-1 rounded-full flex items-center gap-1">
        masters <button class="text-red-500 font-bold">×</button>
      </div>
      <button class="text-xs text-gray-500 hover:underline">Clear filter</button>
    </div>
  </div>

  <div class="space-y-2">
    <details class="group">
      <summary class="cursor-pointer flex items-center justify-between py-2 border-b">
        <span>📚 Discipline</span>
        <span class="group-open:rotate-180 transition-transform">▼</span>
      </summary>
      <div class="pl-4 text-sm text-gray-600 space-y-1">
        <label><input type="checkbox"/> Engineering</label><br/>
        <label><input type="checkbox"/> Business</label>
      </div>
    </details>

    <details class="group">
      <summary class="cursor-pointer flex items-center justify-between py-2 border-b">
        <span>📍 Location</span>
        <span class="group-open:rotate-180 transition-transform">▼</span>
      </summary>
      <div class="pl-4 text-sm text-gray-600 space-y-1">
        <label><input type="checkbox"/> USA</label><br/>
        <label><input type="checkbox"/> UK</label>
      </div>
    </details>

    <details class="group">
      <summary class="cursor-pointer flex items-center justify-between py-2 border-b">
        <span>💰 Tuition Fee</span>
        <span class="group-open:rotate-180 transition-transform">▼</span>
      </summary>
      <div class="pl-4 text-sm text-gray-600 space-y-1">
        <label><input type="checkbox"/> $5,000</label><br/>
        <label><input type="checkbox"/> $5,000 - $10,000</label>
      </div>
    </details>

    {/* <!-- Repeat for: Duration, Format, Attendance, Degree Type, Special Programmes --> */}
  </div>
</div>

          
        </div>
        {isVisible && (
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40"
            onClick={onClose}
          />
        )}
      </>
    );
};

export default FilterSidebar;