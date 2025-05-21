import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { AllCommunityModule, ModuleRegistry, ColDef } from "ag-grid-community";

ModuleRegistry.registerModules([AllCommunityModule]);

const AgGridExample: React.FC = () => {
  const [columnDefs] = useState<ColDef[]>([
    { field: "make", headerName: "Make", sortable: true, filter: true },
    { field: "model", headerName: "Model", sortable: true, filter: true },
    { field: "price", headerName: "Price", sortable: true, filter: true },
  ]);

  const [rowData] = useState([
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxster", price: 72000 },
  ]);

  return (
    <div style={{ height: "100%", width: "100%" }}>
    <div className="ag-theme-alpine" style={{ height: "100%", width: "100%" }}>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
        domLayout="autoHeight" // try removing this if you're enforcing 100% height manually
      />
    </div>
  </div>
  );
};

export default AgGridExample;
