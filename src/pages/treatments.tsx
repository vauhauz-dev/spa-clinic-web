import NavLayout from "@/components/nav-layout";
import { Container } from "@mui/material";
import { NextPageWithLayout } from "./_app";

const Treatments: NextPageWithLayout = () => {
    return (
      <Container fixed>
        Tratamientos !!
      </Container>
    )
  }
  
  Treatments.getLayout = function getLayout(page: any) {
    return <NavLayout>{page}</NavLayout>
  }
  
  export default Treatments; 