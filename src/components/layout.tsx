import Head from "next/head";
import { ReactNode } from "react";
import styles from '@/styles/Home.module.css'
import Image from 'next/image'

export default function Layout({ children }: { children: ReactNode }) {
    return (<div className={styles.container}>
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        {children}
        <footer className={styles.footer}>
            <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            >
            Powered by{' '}
            <span className={styles.logo}>
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
            </a>
        </footer>
    </div>)
}