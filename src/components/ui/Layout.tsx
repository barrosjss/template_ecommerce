import { LayoutProps } from "@/src/interfaces";
import Navbar from "./Navbar";
import { Stack } from "@mui/material";
import colors from "@/src/utils/colors";

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Stack
        minHeight="100%"
        bgcolor={colors.background}
        margin={{ xs: "16px 32px", md: "16px 124px" }}
        spacing='32px'
        alignItems="center"
      >
        <Navbar />
        {children}
      </Stack>
    </>
  );
};

export default Layout;
