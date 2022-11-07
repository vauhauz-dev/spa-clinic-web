import NavLayout from "@/components/nav-layout";
import { Container } from "@mui/material";
import { NextPageWithLayout } from "./_app";

const Alerts: NextPageWithLayout = () => {
    return (
      <Container fixed>
        Alertas !!
      </Container>
    )
  }
  
  Alerts.getLayout = function getLayout(page: any) {
    return <NavLayout>{page}</NavLayout>
  }
  
  export default Alerts; 