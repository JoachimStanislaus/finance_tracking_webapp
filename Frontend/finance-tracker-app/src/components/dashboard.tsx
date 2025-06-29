import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { AppProvider, type Navigation } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { DemoProvider, useDemoRouter } from "@toolpad/core/internal";
import { themeLightDark } from "../constants/theme";
import Grid from "../common_components/Grid";
import Button from "@mui/material/Button";
import {
  expensesGridColData,
  expensesGridColHeaders,
} from "../constants/expensesGrid";
import CreateExpense from "../common_components/CreateExpense";

const NAVIGATION: Navigation = [
  {
    segment: "dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    segment: "expenses-overview",
    title: "Expenses",
    icon: <DashboardIcon />,
  },
  {
    segment: "Account",
    title: "Account",
    icon: <DashboardIcon />,
  }
];

function useToolpadColorScheme() {
  const [colorScheme, setColorScheme] = React.useState<string | null>(null);

  React.useEffect(() => {
    function checkScheme() {
      const el = document.documentElement; // or App root element
      const scheme = el.getAttribute("data-toolpad-color-scheme");
      setColorScheme(scheme);
    }
    checkScheme();

    // Optional: listen for changes
    const observer = new MutationObserver(() => {
      checkScheme();
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-toolpad-color-scheme"],
    });

    return () => observer.disconnect();
  }, []);

  return colorScheme;
}

function DemoPageContent({ pathname }: { pathname: string }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const colorScheme = useToolpadColorScheme();
  const isDarkMode = colorScheme === "dark";
  switch (pathname) {
    case "/dashboard":
      return (
        <Box sx={{ p: 2 }}>
          <Typography variant="h4">
            Welcome to the Dashboard Overview
          </Typography>
        </Box>
      );
    case "/expenses-overview":
      return (
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden", // Prevent scroll overflow issues
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: 1, marginRight: 1}}>
            <Button variant="contained" onClick={handleOpen}>
              New Expense
            </Button>
          </Box>
          <CreateExpense open={open} handleClose={handleClose} />
          <Grid
            isDarkMode={isDarkMode}
            colHeaders={expensesGridColHeaders}
            gridData={expensesGridColData}
          ></Grid>
        </Box>
      );
  }
}

export default function Dashboard() {
  const router = useDemoRouter("/dashboard");

  return (
    <AppProvider
      navigation={NAVIGATION}
      branding={{
        logo: <img src="https://mui.com/static/logo.png" alt="MUI logo" />,
        title: "MUI",
        homeUrl: "/toolpad/core/introduction",
      }}
      router={router}
      theme={themeLightDark}
    >
      <DashboardLayout>
        <DemoPageContent pathname={router.pathname} />
      </DashboardLayout>
    </AppProvider>
  );
}
