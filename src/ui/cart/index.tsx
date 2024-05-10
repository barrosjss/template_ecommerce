import Layout from "@/src/components/ui/Layout";
import { Stack } from "@mui/material";
import Section1 from "./Section1";

const Cartpage = () => {
  return (
    <>
      <Layout>
        <Stack width='100%' spacing="32px" alignItems="center">
            <Section1/>
        </Stack>
      </Layout>
    </>
  );
};

export default Cartpage;
