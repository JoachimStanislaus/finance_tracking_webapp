import * as React from "react";
import { Drawer, List, ListItem, ListItemText, Stack, IconButton, useTheme, useMediaQuery } from "@mui/material";
import { SidebarProps } from "../types/Sidebar.types";
import MenuIcon from "@mui/icons-material/Menu";


export default function Sidebar({topnav, botnav}: SidebarProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [isOpen, setIsOpen] = React.useState(false);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <>
    {isMobile && (
        <IconButton
          onClick={toggleSidebar}
          sx={{ position: "fixed", top: 10, left: 10, zIndex: 1300 }}
        >
          <MenuIcon />
        </IconButton>
      )}

      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={isMobile ? isOpen : true}
        onClose={toggleSidebar}
        anchor="left"
      >
    <Stack sx={{ height: "100%", justifyContent: "space-between", p: 2 }}>
    <List>
    {topnav.map((item, index) => (
          <ListItem button key={index}>
            <ListItemText primary={item.text} />
          </ListItem>
          
        ))}
      </List>
      
      <List>
        {botnav.map((item, index) => (
            <ListItem button key={index}>
                <ListItemText primary={item.text} />
            </ListItem>
            ))}
      </List>
      </Stack>
    </Drawer>
    </>

    
  );
}
