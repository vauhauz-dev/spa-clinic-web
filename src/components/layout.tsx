import Head from "next/head";
import { ReactNode, useEffect, useState } from "react";
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import firebase from '../lib/firebase';
import router from 'next/router';

export default function Layout({ children }: { children: ReactNode }) {
    const [showContent, setShowContent] = useState(false);
    
    useEffect(() => {
        const unsubscribe = firebase.authData.onAuthStateChanged(async (authState) => {
            if (!authState && !router.route.includes('login')) {
                await router.push('/login')
            }

            if (authState && router.route.includes('login')) {
                await router.push('/')
            }

            setShowContent(true);
        })
        return () => unsubscribe();
    },[])

    return (<div className={styles.container}>
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        {showContent ? children : <></>}
    </div>)
}