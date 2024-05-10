import { Stack, Typography } from "@mui/material";
import { CardsInfo } from "@/src/api/info";
import ProductCard from "@/src/components/ui/ProductCard";

const Section2 = () => {
  return (
    <>
      <Stack alignItems="center" spacing={2}>
        <Typography variant="h4">Products</Typography>
        <Stack
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          gap={2}
        >
          {CardsInfo.map(({ title, description, image }) => {
            return (
              <ProductCard
                title={title}
                image={image}
                description={description}
                key={title}
              />
            );
          })}
        </Stack>
      </Stack>
    </>
  );
};

export default Section2;
