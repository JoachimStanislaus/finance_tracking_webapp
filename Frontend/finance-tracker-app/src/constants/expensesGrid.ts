import {
    ColDef,
  } from "ag-grid-community";
import { expensesGridData } from "../types/expensesGrid.types";



export const expensesGridColHeaders: ColDef[] = [
    { field: "Date", sortable: true, filter: true },
    { field: "Amount", sortable: true, filter: true },
    { field: "Description", sortable: true, filter: true },
    { field: "Category", sortable: true, filter: true },
  ];

export const expensesGridColData: expensesGridData[] = [
    { Date: new Date('2024-01-01'), Amount: 10 , Description: 'tester description', Category: 'test Category'},
    { Date: new Date('2025-03-03'), Amount: 30 , Description: 'tester description 2', Category: 'test Category 2'},
    { Date: new Date('2025-02-02'), Amount: 20 , Description: 'tester description 1', Category: 'test Category 1'},
  ]