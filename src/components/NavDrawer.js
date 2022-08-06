import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import ListIcon from "@mui/icons-material/List";

const NavDrawer = ({ links }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Drawer PaperProps={{sx:{backgroundColor:"crimson"}}} open={open} onClose={() => setOpen(false)}>
        <List>
          {links.map((link, index) => (
            <ListItemButton key={index} divider>
              <ListItemIcon>
                <ListItemText sx={{color:"white"}}>{link}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ marginLeft: "auto", color: "white" }}
        onClick={() => setOpen(!open)}
      >
        <ListIcon></ListIcon>
      </IconButton>
    </>
  );
};

export default NavDrawer;
