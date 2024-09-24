import { useState } from 'react';
import inmatesData from './wbp.json'; // Import JSON data

const InmateSearch = ({ query, setQuery, isLoading, handleInputChange }) => {
  const dateKey = Object.keys(inmatesData)[0]; // Get the first date key (e.g., "23_09_2024")
  const inmateList = inmatesData[dateKey]; // Access the array of inmates under the date key

  // Filter inmates based on the search query (by 'nama')
  const filteredInmates = inmateList.filter((inmate) =>
    inmate.nama.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Cari nama WBP Lapas Kerobokan"
        value={query}
        onChange={handleInputChange}
        className="search-input"
      />

      {isLoading && <div className="spinner"></div>}

      {/* Only show suggestions if there is a query and results */}
      {!isLoading && query && filteredInmates.length === 0 && (
        <p>No results found for "{query}".</p>
      )}

      {/* Inmate Display */}
      <div className="inmate-display">
        {!isLoading && query && filteredInmates.length > 0 && (
          <ul className="suggestions">
            {filteredInmates.map((inmate) => (
              <li key={inmate.no_registrasi} className="suggestion-item">
                <strong>Nama:</strong> {inmate.nama} <br />
                <strong>No. Registrasi:</strong> {inmate.no_registrasi} <br />
                <strong>Wisma - Kamar:</strong> {inmate.wisma} <br />
                <strong>Kasus:</strong> {inmate.pidana} <br />
                <strong>Tanggal Ekspirasi:</strong> {inmate.tanggal_ekspirasi} <br />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default InmateSearch;
