import { useState } from 'react';
import { Input } from "./components/ui/input";
import { Table, TableHeader, TableRow, TableCell, TableBody } from "./components/ui/table";

const judgeData = [
  { WOD: "WOD 1", Heat: 1, Start: "08:00", End: "08:13", Judge: "BERGE CHRISTELLE" },
  { WOD: "WOD 1", Heat: 1, Start: "08:00", End: "08:13", Judge: "Caroline SANCHEZ" },
  { WOD: "WOD 1", Heat: 1, Start: "08:00", End: "08:13", Judge: "Cedric Bourg vesier" },
  { WOD: "WOD 1", Heat: 1, Start: "08:00", End: "08:13", Judge: "Charlène François" },
  { WOD: "WOD 1", Heat: 1, Start: "08:00", End: "08:13", Judge: "Deleuze Thibaut" },
  { WOD: "WOD 1", Heat: 1, Start: "08:00", End: "08:13", Judge: "Fanny Lepage" },
  { WOD: "WOD 1", Heat: 1, Start: "08:00", End: "08:13", Judge: "Florent Thirion" },
  { WOD: "WOD 1", Heat: 1, Start: "08:00", End: "08:13", Judge: "Garcia Benjamin" },
  { WOD: "WOD 1", Heat: 1, Start: "08:00", End: "08:13", Judge: "Julien ROUSSEL" },
  { WOD: "WOD 1", Heat: 1, Start: "08:00", End: "08:13", Judge: "Kevin RAVOAJANAHARY" },
  { WOD: "WOD 1", Heat: 1, Start: "08:00", End: "08:13", Judge: "Lucas ALLOGNET" }
];

export default function JudgePlanningApp() {
  const [filter, setFilter] = useState("");

  const filteredData = judgeData.filter(entry =>
    entry.Judge.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Planning des Juges - Lyon Showdown 2025</h1>
      <Input
        placeholder="Rechercher un juge..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="mb-4"
      />
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>WOD</TableCell>
            <TableCell>Heat</TableCell>
            <TableCell>Heure début</TableCell>
            <TableCell>Heure fin</TableCell>
            <TableCell>Juge</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredData.map((entry, index) => (
            <TableRow key={index}>
              <TableCell>{entry.WOD}</TableCell>
              <TableCell>{entry.Heat}</TableCell>
              <TableCell>{entry.Start}</TableCell>
              <TableCell>{entry.End}</TableCell>
              <TableCell>{entry.Judge}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
