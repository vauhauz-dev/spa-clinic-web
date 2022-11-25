import NavLayout from '@/components/nav-layout'
import { NextPageWithLayout } from './_app'
import Customers from '@/components/customers/customers'

const Home: NextPageWithLayout = () => {
  return (
      <Customers></Customers>
  )
}

Home.getLayout = function getLayout(page: any) {
  return <NavLayout>{page}</NavLayout>
}

export default Home; 