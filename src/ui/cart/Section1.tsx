"use client";

import { CartContext } from "@/src/hooks";
import { useContext } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Section1 = () => {
  const { cart, clearCart, sendCart } = useContext(CartContext);

  const renderCartProducts = () => {
    return cart.length != 0 ? (
      <TableContainer
        component={Paper}
        sx={{
          boxShadow: "none",
          border: "1px solid #d9d9d9",
          borderRadius: "8px",
          width: "100%",
        }}
      >
        <Table sx={{ width: "100%" }}>
          <TableHead>
            <TableRow>
              <TableCell>Articulo</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Cantidad</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.map((product: any, index: number) => (
              <TableRow key={index}>
                <TableCell>
                  <img src={product.image} alt={product.title} width="80px" />
                </TableCell>
                <TableCell>{product.title}</TableCell>
                <TableCell>{product.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    ) : (
      <></>
    );
  };

  return (
    <>
      <Stack alignItems="center" spacing={2} width="100%">
        <Typography variant="h4">Cart</Typography>
        {renderCartProducts()}
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing="8px"
          width="100%"
        >
          <Button
            variant="contained"
            fullWidth
            startIcon={<ShoppingCartIcon />}
            onClick={() => cart.length != 0 ? sendCart() : null}
          >
            Buy
          </Button>
          <Button variant="outlined" fullWidth onClick={() => clearCart()}>
            Limpiar Cart
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default Section1;
