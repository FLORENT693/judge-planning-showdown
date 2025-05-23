import React, { useState } from "react";
import "./App.css";

const judgeData = [
  { WOD: "WOD 1", Heat: 1, Start: "08:00", End: "08:13", Judge: "BERGE CHRISTELLE" },
  { WOD: "WOD 1", Heat: 1, Start: "08:00", End: "08:13", Judge: "Caroline SANCHEZ" },
  { WOD: "WOD 1", Heat: 1, Start: "08:00", End: "08:13", Judge: "Cedric Bourg vesier" },
  { WOD: "WOD 1", Heat: 1, Start: "08:00", End: "08:13", Judge: "Charlène François" },
  { WOD: "WOD 1", Heat: 1, Start: "08:00", End: "08:13", Judge: "Deleuze Thibaut" }
];

function App() {
  const [filter, setFilter] = useState("");

  const filteredData = judgeData.filter(entry =>
    entry.Judge.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Planning des Juges - Lyon Showdown 2025</h1>
      <input
        type="text"
        placeholder="Rechercher un juge..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="search-input"
      />
      <table>
        <thead>
          <tr>
            <th>WOD</th>
            <th>Heat</th>
            <th>Heure début</th>
            <th>Heure fin</th>
            <th>Juge</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((entry, index) => (
            <tr key={index}>
              <td>{entry.WOD}</td>
              <td>{entry.Heat}</td>
              <td>{entry.Start}</td>
              <td>{entry.End}</td>
              <td>{entry.Judge}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
