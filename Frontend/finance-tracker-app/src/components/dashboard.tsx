import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppProvider, type Navigation } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { DemoProvider, useDemoRouter } from '@toolpad/core/internal';
import { themeLightDark } from '../constants/theme';
import AgGridExample from '../common_components/Grid';

const NAVIGATION: Navigation = [
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'orders',
    title: 'Orders',
    icon: <ShoppingCartIcon />,
  },
];

function DemoPageContent({ pathname }: { pathname: string }) {
  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden', // Prevent scroll overflow issues
      }}
    >
      <AgGridExample></AgGridExample>
      
    </Box>
  );
}

export default function DashboardLayoutBranding() {

  const router = useDemoRouter('/dashboard');

  return (
      <AppProvider
        navigation={NAVIGATION}
        branding={{
          logo: <img src="https://mui.com/static/logo.png" alt="MUI logo" />,
          title: 'MUI',
          homeUrl: '/toolpad/core/introduction',
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

