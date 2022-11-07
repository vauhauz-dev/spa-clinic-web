import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Login from 'src/pages/login'
import NavBar from '@/components/nav-bar'
import NavLayout from '@/components/nav-layout'
import { NextPageWithLayout } from './_app'
import Customers from '@/components/clientes/customers'

const Home: NextPageWithLayout = () => {
  return (
    <div >
      <Customers></Customers>
    </div>
  )
}

Home.getLayout = function getLayout(page: any) {
  return <NavLayout>{page}</NavLayout>
}

export default Home; 