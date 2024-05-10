import Layout from "@/src/components/ui/Layout";
import { Stack } from "@mui/material";
import Section1 from "./Section1";
import Section2 from "./Section2";

const Homepage = () => {
  return (
    <>
      <Layout>
        <Stack spacing="32px" alignItems="center">
            <Section1/>
            <Section2 />
        </Stack>
      </Layout>
    </>
  );
};

export default Homepage;
