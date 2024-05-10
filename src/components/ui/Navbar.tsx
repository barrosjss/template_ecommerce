"use client";

import { useRouter } from "next/navigation";
import { AppBar, Toolbar, Link, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import colors from "@/src/utils/colors";

const Navbar = () => {
  const router = useRouter();

  return (
    <AppBar
      position="static"
      elevation={0}
      component="header"
      sx={{
        backgroundColor: colors.background,
      }}
    >
      <Toolbar
        component="nav"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 0,
          borderBottom: "1px solid #d9d9d9",
        }}
      >
        <Link
          variant="h5"
          sx={{ textDecoration: "none", cursor: "pointer" }}
          onClick={() => {
            return router.push("/");
          }}
        >
          LOGO
        </Link>
        <IconButton
          color="inherit"
          onClick={() => {
            return router.push("/cart");
          }}
        >
          <ShoppingCartIcon sx={{fill: colors.text}}/>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
