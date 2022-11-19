import { useEffect } from "react"
import firebase from '../lib/firebase';

export default function Logout() {

    useEffect(() => {
        firebase.getAuth().signOut();
    },[])

    return (<></>)
}