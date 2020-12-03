import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const app = firebase.initializeApp({
    apiKey: "AIzaSyCBs-58l-TJUw1ahnR9zUIBzdJ3zYa5rHs",
    authDomain: 'minor-auth.firebaseapp.com',
    databaseURL: 'https://minor-auth.firebaseio.com',
    projectId: 'minor-auth',
    storageBucket: 'minor-auth.appspot.com',
    messagingSenderId: '606123740513',
    appId: '1:606123740513:web:6d515e6bf1b3f700cfc920',
    measurementId: 'G-QQQQ76TK4T'
})
export const auth = app.auth()
export const fireDb =  app.database().ref()
export default app