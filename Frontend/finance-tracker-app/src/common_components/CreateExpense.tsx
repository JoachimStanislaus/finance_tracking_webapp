import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { TextField } from "../../node_modules/@mui/material/index";

interface CreateExpenseProps {
  open: boolean;
  handleClose: () => void;
}

export default function CreateExpense({
  open,
  handleClose,
}: CreateExpenseProps){
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      slotProps={{
        paper: {
          component: "form",
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const data = {
              date: formData.get("date"),
              amount: formData.get("amount"),
              description: formData.get("description"),
              category: formData.get("category"),
            };
            console.log(data);
            handleClose();
          },
          sx: {backgroundImage: "none" },
        },
      }}
      >
        <DialogTitle>Create New Expense</DialogTitle>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: 2, pt: 2}}
        >
          <FormControl required sx={{ mt: 1 }}>
            <InputLabel htmlFor="date" shrink>Date</InputLabel>
            <OutlinedInput
              autoFocus
              id="date"
              name="date"
              type="date"
              label="Date"
            />
          </FormControl>
          <FormControl required>
            <InputLabel htmlFor="amount">Amount</InputLabel>
            <OutlinedInput
              autoFocus
              id="amount"
              name="amount"
              type="number"
              label="Amount"
            />
          </FormControl>
          <FormControl required>
            <InputLabel htmlFor="description">Description</InputLabel>
            <OutlinedInput
              autoFocus
              id="description"
              name="description"
              type="text"
              label="Description"
            />
          </FormControl>
          <FormControl required>
            <InputLabel htmlFor="category">Category</InputLabel>
            <OutlinedInput
              autoFocus
              id="category"
              name="category"
              type="text"
              label="Category"
            />
          </FormControl>
        </DialogContent>

        <DialogActions sx={{pb: 3, px: 3}}>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" type="submit">
            Create
          </Button>
        </DialogActions>
      </Dialog>
  )
}
