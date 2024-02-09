import { Mail, Notifications, Pets } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import { useState } from "react";

const Styledtoolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const Search = styled("div")({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: "10px",
  width: "40%",
});
const Icon = styled("div")({
  gap: "20px",
  display: "flex",
  alignItems: "center",
});

const Userbox = styled("div")({
  gap: "10px",
  display: "flex",
  alignItems: "center",
});
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="fixed" sx={{ zIndex: 99 }}>
      <Styledtoolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          LAMA DEV
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <Icon sx={{ display: { xs: "none", sm: "flex" } }}>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            onClick={(e) => setOpen(true)}
          />
        </Icon>
        <Userbox
          sx={{ display: { xs: "flex", sm: "none" } }}
          onClick={(e) => setOpen(true)}
        >
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <Typography variant="caption" component="span">Jhon</Typography>
        </Userbox>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={(e) => setOpen(false)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </Styledtoolbar>
    </AppBar>
  );
}

export default Navbar;
