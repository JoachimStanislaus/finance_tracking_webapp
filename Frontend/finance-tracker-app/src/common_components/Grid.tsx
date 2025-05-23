import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import {
  AllCommunityModule,
  ModuleRegistry,
  ColDef,
  colorSchemeDarkBlue,
  colorSchemeLightCold,
  themeQuartz,
} from "ag-grid-community";

ModuleRegistry.registerModules([AllCommunityModule]);

// TODO make it dynamic

const AgGridExample: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  const themeLightCold = themeQuartz.withPart(colorSchemeLightCold);
  const themeDarkBlue = themeQuartz.withPart(colorSchemeDarkBlue);
  const themeClass = isDarkMode ? themeDarkBlue : themeLightCold;

  const [columnDefs] = useState<ColDef[]>([
    { field: "make", sortable: true, filter: true },
    { field: "model", sortable: true, filter: true },
    { field: "price", sortable: true, filter: true },
  ]);

  const [rowData] = useState([
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxster", price: 72000 },
  ]);

  return (
    <div>
      <div
        style={{ flex: 1, height: "100vh", width: "100vw", padding: "10px" }}
      >
        <AgGridReact
          theme={themeClass}
          columnDefs={columnDefs}
          rowData={rowData}
        />
      </div>
    </div>
  );
};

export default AgGridExample;
