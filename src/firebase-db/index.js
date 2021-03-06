import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const prodConfig = {
    apiKey           : "YOUR_API_KEY",
    authDomain       : "your-app.firebaseapp.com",
    databaseURL      : "https://your-app.firebaseio.com",
    projectId        : "your-app",
    storageBucket    : "your-app.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID"
};

const devConfig = {
    apiKey: 'AIzaSyCw2JeroeUwQslUfAh37w-V9GSUpspDv_o',
    authDomain: 'ayez-playground.firebaseapp.com',
    databaseURL: 'https://ayez-playground.firebaseio.com',
    projectId: 'ayez-playground',
    storageBucket: 'ayez-playground.appspot.com',
    messagingSenderId: '305895668239'
};

const config = process.env.NODE_ENV === 'production'
    ? prodConfig
    : devConfig;


if ( !firebase.apps.length )
{
    firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
    auth,
    db
};
