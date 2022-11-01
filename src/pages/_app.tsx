import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Layout from '@/components/layout';
import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

import { useEffect } from 'react';

const firebaseConfig = {
  apiKey: "AIzaSyBcUo325VkC6WzOkVVh6X37hBhO4gpzWzs",
  authDomain: "spa-clinic-709c5.firebaseapp.com",
  projectId: "spa-clinic-709c5",
  storageBucket: "spa-clinic-709c5.appspot.com",
  messagingSenderId: "764028032055",
  appId: "1:764028032055:web:50c9f3a8106318c350dbb2"
};

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, 'test@gmail.com', '123456')
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  },[])

  return <Layout>
    <Component {...pageProps} />
  </Layout>
}
