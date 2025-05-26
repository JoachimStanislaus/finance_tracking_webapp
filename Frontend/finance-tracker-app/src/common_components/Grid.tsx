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
import { expensesGridData } from "../types/expensesGrid.types";

ModuleRegistry.registerModules([AllCommunityModule]);

// TODO make it dynamic

const Grid: React.FC<{
  isDarkMode: boolean;
  colHeaders: ColDef[];
  gridData: expensesGridData[];
}> = ({ isDarkMode, colHeaders, gridData }) => {
  const themeLightCold = themeQuartz.withPart(colorSchemeLightCold);
  const themeDarkBlue = themeQuartz.withPart(colorSchemeDarkBlue);
  const themeClass = isDarkMode ? themeDarkBlue : themeLightCold;

  const [columnDefs] = useState<ColDef[]>(colHeaders);

  const [rowData] = useState(gridData);

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

export default Grid;
