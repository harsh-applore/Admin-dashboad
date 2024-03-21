import React, { useState } from "react";
import Table from "./Table/Table";
import "./Settlement.css";


const SettlementPage = () => {
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const handleStatusClick = (status) => {
    setSelectedStatus(status);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value); 
  };

  const handleReset = () => {
    setSearchQuery(""); // Reset the search query
  };

  const handleExportExcel = () => {
    // Implement export to Excel functionality here
  };

  return (
    <div className="content-area">
      <h1 className="h1-heading">Settlements</h1>
      <div className="controls">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Select Data Range"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        <button className="search-but" onClick={handleReset}>
           Search
        </button>
        <button className="search-button" onClick={handleReset}>
           Reset
        </button>
        <button className="export-button" onClick={handleExportExcel}>
          Export to Excel
        </button>
      </div>

      <div className="payment-status-container">
        <p >PayIn Settlement</p>
        <p >PayOut Settlement</p>
      </div>

      <Table searchQuery={searchQuery} selectedStatus={selectedStatus} />
    </div>
  );
};

export default SettlementPage;
