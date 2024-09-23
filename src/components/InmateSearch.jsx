import { useState } from 'react';
import inmatesData from './wbp.json'; // Import JSON data

const InmateSearch = ({ query, setQuery }) => {
  const dateKey = Object.keys(inmatesData)[0]; // Get the first date key (e.g., "23_09_2024")
  const inmateList = inmatesData[dateKey]; // Access the array of inmates under the date key

  const handleInputChange = (e) => {
    setQuery(e.target.value); // Update query based on user input
  };

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
      {/* Display suggestions only when there's a query */}
      {query && (
        <ul className="suggestions">
          {filteredInmates.slice(0, 5).map((inmate) => (
            <li key={inmate.no_registrasi} className="suggestion-item">
              <strong>Name:</strong> {inmate.nama} <br />
              <strong>Nomor Registrasi:</strong> {inmate.no_registrasi} <br />
              <strong>Wisma - Kamar:</strong> {inmate.wisma} <br />
              <strong>Case:</strong> {inmate.pidana} <br />
              <strong>Expiration Date:</strong> {inmate.tanggal_ekspirasi}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InmateSearch;
