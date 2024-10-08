import { useState } from 'react';
import inmatesData from './wbp.json'; // Import JSON data

const InmateSearch = ({ query, setQuery, isLoading, handleInputChange }) => {
  const dateKey = Object.keys(inmatesData)[0]; // Get the first date key (e.g., "23_09_2024")
  const inmateList = inmatesData[dateKey]; // Access the array of inmates under the date key

  // Filter inmates based on the search query (by 'nama' or 'wisma')
  const filteredInmates = inmateList.filter((inmate) =>
    inmate.nama.toLowerCase().includes(query.toLowerCase()) ||
    inmate.wisma.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="inmate-search-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Cari nama atau wisma WBP Lapas Kerobokan"
          value={query}
          onChange={handleInputChange}
          className="search-input"
        />
      </div>

      {isLoading && <div className="spinner"></div>}

      {/* Show suggestions only when there is a query */}
      {!isLoading && query && filteredInmates.length === 0 && (
        <p>Pencarian tidak ditemukan untuk: "{query}".</p>
      )}

      {/* Inmate Display */}
      <div className="inmate-display">
        {!isLoading && query && filteredInmates.length > 0 && (
          <ul className="suggestions">
            {filteredInmates.map((inmate) => (
              <li key={inmate.no_registrasi} className="suggestion-item">
                <strong>Nama:</strong> {inmate.nama} <br />
                <strong>Wisma:</strong> {inmate.wisma} <br />
                <strong>Case:</strong> {inmate.pidana} <br />
                <strong>Expiration Date:</strong> {inmate.tanggal_ekspirasi} <br />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default InmateSearch;
