import * as React from "react";
import { Drawer, List, ListItem, ListItemText, Stack } from "@mui/material";
import { SidebarProps } from "../types/Sidebar.types";


export default function Sidebar({items}: SidebarProps) {

  return (
    <Drawer variant={"permanent"} open={false} anchor={"left"}>
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
    <List>
    {items.map((item, index) => (
          <ListItem button key={index}>
            <ListItemText primary={item.text} />
          </ListItem>
          
        ))}
      </List>
      
      <List>
        {items.map((item, index) => (
            <ListItem button key={index}>
                <ListItemText primary={item.text} />
            </ListItem>
            ))}
      </List>
      </Stack>
    </Drawer>
  );
}
