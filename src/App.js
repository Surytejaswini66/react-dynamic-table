import React, { useState } from "react";
import "./App.css";

const initialOptions1 = [
  "Select an Option",
  "Option 1",
  "Option 2",
  "Option 3",
  "Option 4",
];
const initialOptions2 = ["Option A", "Option B", "Option C", "Option D"];

function App() {
  const [rows, setRows] = useState([
    {
      singleSelect1: null,
      dropdownVisible1: false,
      multiSelect2: [],
      dropdownVisible2: false,
    },
  ]);

  const [options1, setOptions1] = useState(initialOptions1);
  const [options2, setOptions2] = useState(initialOptions2);
  const [newOption2, setNewOption2] = useState("");
  const [theme, setTheme] = useState("light");

  // Add a new row
  const handleAddRow = () => {
    setRows([
      ...rows,
      {
        singleSelect1: null,
        dropdownVisible1: false,
        multiSelect2: [],
        dropdownVisible2: false,
      },
    ]);
  };

  // Reset the table
  const handleResetTable = () => {
    setRows([
      {
        singleSelect1: null,
        dropdownVisible1: false,
        multiSelect2: [],
        dropdownVisible2: false,
      },
    ]);
  };

  // Theme toggle
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Single select for Label 1
  const handleSingleSelectChange1 = (value, rowIndex) => {
    const updatedRows = [...rows];
    updatedRows[rowIndex].singleSelect1 = value;
    updatedRows[rowIndex].dropdownVisible1 = false;
    setRows(updatedRows);
  };

  // Get available options for Label 1
  const getAvailableOptions1 = () => {
    const selectedOptions = rows
      .map((row) => row.singleSelect1)
      .filter((item) => item !== null);
    return options1.filter((option) => !selectedOptions.includes(option));
  };

  // Toggle dropdown for Label 1
  const toggleDropdown1 = (rowIndex) => {
    const updatedRows = [...rows];
    updatedRows[rowIndex].dropdownVisible1 =
      !updatedRows[rowIndex].dropdownVisible1;
    setRows(updatedRows);
  };

  // Multi-select for Label 2
  const handleMultiSelectChange2 = (value, rowIndex) => {
    const updatedRows = [...rows];
    const selectedOptions = updatedRows[rowIndex].multiSelect2;

    if (selectedOptions.includes(value)) {
      updatedRows[rowIndex].multiSelect2 = selectedOptions.filter(
        (item) => item !== value
      );
    } else {
      updatedRows[rowIndex].multiSelect2 = [...selectedOptions, value];
    }

    setRows(updatedRows);
  };

  // Remove selected option for Label 2
  const handleRemoveOption2 = (value, rowIndex) => {
    const updatedRows = [...rows];
    updatedRows[rowIndex].multiSelect2 = updatedRows[
      rowIndex
    ].multiSelect2.filter((item) => item !== value);
    setRows(updatedRows);
  };

  // Toggle dropdown for Label 2
  const toggleDropdown2 = (rowIndex) => {
    const updatedRows = [...rows];
    updatedRows[rowIndex].dropdownVisible2 =
      !updatedRows[rowIndex].dropdownVisible2;
    setRows(updatedRows);
  };

  // Get available options for Label 2
  const getAvailableOptions2 = (rowIndex) => {
    const selectedOptions = rows.map((row) => row.multiSelect2).flat();
    return options2.filter((option) => !selectedOptions.includes(option));
  };

  // Add a new option to Label 2
  const handleAddNewOption2 = () => {
    if (newOption2.trim() === "" || options2.includes(newOption2.trim())) {
      alert("Invalid or duplicate option.");
      return;
    }
    setOptions2([...options2, newOption2.trim()]);
    setNewOption2("");
  };

  return (
    <div className={`App ${theme}`}>
      <header>
        <h1 className="heading">Dynamic Data Table</h1>
        <button onClick={toggleTheme}>
          Toggle to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </header>

      <table>
        <thead>
          <tr>
            <th>Label 1</th>
            <th>Label 2</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td>
                <div style={{ position: "relative", display: "inline-block" }}>
                  <div
                    onClick={() => toggleDropdown1(rowIndex)}
                    className={`dropdown-header ${
                      row.dropdownVisible1 ? "open" : ""
                    }`}
                  >
                    {row.singleSelect1 || "Select an Option"}{" "}
                    <span className="dropdown-arrow">^</span>
                  </div>
                  {row.dropdownVisible1 && (
                    <div className="dropdown-options">
                      {getAvailableOptions1().map((option) => (
                        <div
                          key={option}
                          onClick={() =>
                            handleSingleSelectChange1(option, rowIndex)
                          }
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </td>

              <td>
                <div style={{ position: "relative", display: "inline-block" }}>
                  <div
                    onClick={() => toggleDropdown2(rowIndex)}
                    className={`dropdown-header ${
                      row.dropdownVisible2 ? "open" : ""
                    }`}
                  >
                    {row.multiSelect2.length > 0 ? (
                      row.multiSelect2.map((item) => (
                        <span key={item} className="selected-item">
                          {item}
                          <span
                            className="remove-item"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleRemoveOption2(item, rowIndex);
                            }}
                          >
                            x
                          </span>
                        </span>
                      ))
                    ) : (
                      <span>Select Options</span>
                    )}
                    <span className="dropdown-arrow">^</span>
                  </div>

                  {row.dropdownVisible2 && (
                    <div className="dropdown-options">
                      {getAvailableOptions2(rowIndex).map((option) => (
                        <div
                          key={option}
                          onClick={() =>
                            handleMultiSelectChange2(option, rowIndex)
                          }
                          className="option-item"
                        >
                          <input
                            type="checkbox"
                            checked={row.multiSelect2.includes(option)}
                            onChange={() =>
                              handleMultiSelectChange2(option, rowIndex)
                            }
                          />
                          <span>{option}</span>
                        </div>
                      ))}
                      <div className="add-new-option">
                        <input
                          type="text"
                          placeholder="Add new option"
                          value={newOption2}
                          onChange={(e) => setNewOption2(e.target.value)}
                        />
                        <button onClick={handleAddNewOption2}>Add</button>
                      </div>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="controls">
        <p className="rows">Total Rows: {rows.length}</p>
        <button onClick={handleAddRow}>Add New Row</button>
        <button onClick={handleResetTable}>Reset Table</button>
      </div>
    </div>
  );
}

export default App;
