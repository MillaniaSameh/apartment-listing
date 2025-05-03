import { AppBar, Toolbar, Typography } from "@mui/material";
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";

function NavBar() {
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography
          variant="h5"
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            fontFamily: "monospace",
          }}
        >
          <ApartmentRoundedIcon fontSize="large" /> homi
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
