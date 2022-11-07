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
            console.log('Login changed')
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
        {showContent ? children : <></>}
    </div>)
}