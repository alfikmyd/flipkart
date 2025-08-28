import React, { useState } from "react";

export default function FilterSidebar() {
  const [selectedFilters, setSelectedFilters] = useState({});

  // Toggle a checkbox value
  const handleCheckboxChange = (section, value) => {
    setSelectedFilters((prev) => {
      const current = prev[section] || [];
      if (current.includes(value)) {
        // remove
        return { ...prev, [section]: current.filter((v) => v !== value) };
      } else {
        // add
        return { ...prev, [section]: [...current, value] };
      }
    });
  };

  // Clear section
  const clearSection = (section) => {
    setSelectedFilters((prev) => {
      const copy = { ...prev };
      delete copy[section];
      return copy;
    });
  };

  // Clear all
  const clearAll = () => {
    setSelectedFilters({});
  };

  return (
    <div className="filter-sidebar">
      {/* Selected items display */}
      <div className="itemSelected">
        {Object.entries(selectedFilters).flatMap(([section, values]) =>
          values.map((val) => (
            <span
              key={`${section}-${val}`}
              className="selected-item"
              onClick={() => handleCheckboxChange(section, val)}
            >
              {val} ✕
            </span>
          ))
        )}
      </div>

      {/* Brand Section */}
      <div className="filt-select">
        <div className="brand-select">
          <span className="brandClear" onClick={() => clearSection("brand")}>
            Clear all
          </span>
        </div>
        <div>
          <input
            type="checkbox"
            id="apple"
            value="Apple"
            checked={selectedFilters.brand?.includes("Apple") || false}
            onChange={() => handleCheckboxChange("brand", "Apple")}
          />
          <label htmlFor="apple">Apple</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="samsung"
            value="Samsung"
            checked={selectedFilters.brand?.includes("Samsung") || false}
            onChange={() => handleCheckboxChange("brand", "Samsung")}
          />
          <label htmlFor="samsung">Samsung</label>
        </div>
      </div>

      {/* RAM Section */}
      <div className="filt-select">
        <div className="ram-select">
          <span className="blueClear" onClick={() => clearSection("ram")}>
            Clear all
          </span>
        </div>
        <div>
          <input
            type="checkbox"
            id="ram-4"
            value="4 GB"
            checked={selectedFilters.ram?.includes("4 GB") || false}
            onChange={() => handleCheckboxChange("ram", "4 GB")}
          />
          <label htmlFor="ram-4">4 GB</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="ram-8"
            value="8 GB"
            checked={selectedFilters.ram?.includes("8 GB") || false}
            onChange={() => handleCheckboxChange("ram", "8 GB")}
          />
          <label htmlFor="ram-8">8 GB</label>
        </div>
      </div>

      {/* Global CLEAR ALL */}
      <button className="filt-blue" onClick={clearAll}>
        CLEAR ALL
      </button>
    </div>
  );
}
