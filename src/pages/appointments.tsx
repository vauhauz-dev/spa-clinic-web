import NavLayout from "@/components/nav-layout";
import { Container } from "@mui/material";
import { NextPageWithLayout } from "./_app";

const Appointments: NextPageWithLayout = () => {
    return (
      <Container fixed>
        Citas !!
      </Container>
    )
  }
  
  Appointments.getLayout = function getLayout(page: any) {
    return <NavLayout>{page}</NavLayout>
  }
  
  export default Appointments; 