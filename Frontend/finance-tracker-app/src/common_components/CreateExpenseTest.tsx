import React, { useState } from "react";
import CreateExpense from "./CreateExpense"; // adjust path as needed
import Button from "@mui/material/Button";

export default function CreateExpenseTest() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Open Create Expense Dialog
      </Button>
      <CreateExpense open={open} handleClose={handleClose} />
    </>
  );
}
