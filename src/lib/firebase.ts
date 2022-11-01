import firebase from 'firebase/app';
import * as auth from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBcUo325VkC6WzOkVVh6X37hBhO4gpzWzs",
    authDomain: "spa-clinic-709c5.firebaseapp.com",
    projectId: "spa-clinic-709c5",
}

//If an firebase app hasn't already been created
if (!firebase.getApps().length) {
  firebase.initializeApp(firebaseConfig)
}

export default { ...firebase, ...auth }