"use client";

import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
import { CardProps } from "@/src/interfaces";
import { useContext } from "react";
import { CartContext } from "@/src/hooks";

const ProductCard = ({ title, description, image }: CardProps) => {
  const { addToCart } = useContext(CartContext);

  const handleBuyClick = () => {
    addToCart({ title, description, image });
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        background: "none",
        boxShadow: "none",
        borderRadius: "8px",
      }}
    >
      <CardMedia component="img" height="371" image={image} alt="product" />
      <CardContent>
        <Box
          sx={{ display: "flex" }}
          justifyContent="space-between"
          alignItems="center"
          paddingBottom={1}
        >
          <Typography gutterBottom variant="h5" lineHeight="0">
            {title}
          </Typography>
          <Button
            variant="text"
            sx={{ fontWeight: 800 }}
            onClick={handleBuyClick}
          >
            BUY
          </Button>
        </Box>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
