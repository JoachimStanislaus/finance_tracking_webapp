import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import MuiCard from "@mui/material/Card";

const Card = styled(MuiCard)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    width: "100%",
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    margin: "auto",
    [theme.breakpoints.up("sm")]: {
      maxWidth: "450px",
    },
    boxShadow:
      "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
    ...theme.applyStyles("dark", {
      boxShadow:
        "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
    }),
  }));

  const SignInContainer = styled(Stack)(({ theme }) => ({
    height: "calc((1 - var(--template-frame-height, 0)) * 100dvh)",
    minHeight: "100%",
    padding: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(4),
    },
    "&::before": {
      content: '""',
      display: "flex",
      position: "absolute",
      zIndex: -1,
      inset: 0,
      backgroundImage:
        "radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",
      backgroundRepeat: "no-repeat",
      ...theme.applyStyles("dark", {
        backgroundImage:
          "radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))",
      }),
    },
  }));
  
export default function CreateExpense(props: { disableCustomTheme?: boolean }) {
    const [amountError, setAmountError] = React.useState(false);
    const [amountErrorMessage, setAmountErrorMessage] = React.useState("");
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        if (amountError) {
          event.preventDefault();
          return;
        }
        const data = new FormData(event.currentTarget);
        console.log({
          amount: data.get("amount"),
        });
      };
    
    const validateInputs = () => {
        const amount = document.getElementById("amount") as HTMLInputElement;
    
        let isValid = true;
    
        if (!amount.value || amount.valueAsNumber <= 0) {
          setAmountError(true);
          setAmountErrorMessage("Amount must be more than 0.");
          isValid = false;
        } else {
          setAmountError(false);
          setAmountErrorMessage("");
        }

        return isValid;
    };

    return (
        <div>
            <CssBaseline enableColorScheme />
            <SignInContainer direction="column" justifyContent="space-between">
                <Card variant="outlined">
                    <Typography
                        component="h1"
                        variant="h4"
                        sx={{ 
                            width: "100%", 
                            fontSize: "clamp(2rem, 10vw, 2.15rem)",
                        }}
                    >
                        Create Expense
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                            gap: 2,
                        }}
                    >
                        <FormControl>
                            <FormLabel htmlFor="date">Date</FormLabel>
                            <TextField
                                id="date"
                                type="date"
                                name="date"
                                autoFocus
                                required
                                fullWidth
                                variant="outlined"
                                color="primary"
                            />

                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="amount">Amount</FormLabel>
                            <TextField
                                error={amountError}
                                helperText={amountErrorMessage}
                                name="amount"
                                placeholder="10.50"
                                type="number"
                                step="0.01"
                                id="amount"
                                autoFocus
                                required
                                fullWidth
                                variant="outlined"
                                color={amountError ? "error" : "primary"}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="description">Description</FormLabel>
                            <TextField
                                name="description"
                                placeholder="Noodles"
                                type="text"
                                id="description"
                                autoFocus
                                required
                                fullWidth
                                variant="outlined"
                                color="primary"
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="category">Category</FormLabel>
                            <TextField
                                name="category"
                                placeholder="Food"
                                autoComplete="category"
                                type="text"
                                id="category"
                                autoFocus
                                required
                                fullWidth
                                variant="outlined"
                                color={"primary"}
                            />
                        </FormControl>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            onClick={validateInputs}
                        >
                            Create
                        </Button>
                    </Box>
                </Card>
            </SignInContainer>
        </div>
    )
}
