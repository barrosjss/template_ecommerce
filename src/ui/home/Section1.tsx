"use client";

import { useRouter } from "next/navigation";
import { Stack, Typography, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import fontsizes from "@/src/utils/fontsize";

const Section1 = () => {
  const router = useRouter();

  return (
    <>
      <Stack
        alignItems="center"
        justifyContent="center"
        spacing="8px"
        minHeight="65dvh"
      >
        <Typography variant="h1" textAlign="center" fontSize={fontsizes.font64}>
          E-commerce template
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          fontSize={fontsizes.font16}
          fontWeight="300"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
          asperiores quo iusto facere? Quasi in labore voluptatibus deleniti qui
          vero officia maiores, cupiditate, facere ut eveniet ipsum quaerat
          placeat rem!
        </Typography>
        <Stack direction="row" spacing="8px">
          <Button
            variant="contained"
            startIcon={<ShoppingCartIcon />}
            onClick={() => {
              return router.push("/cart");
            }}
          >
            Cart
          </Button>
          <Button variant="text">Ver mas productos</Button>
        </Stack>
      </Stack>
    </>
  );
};

export default Section1;
