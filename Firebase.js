import  firebase  from 'firebase/app';
import 'firebase/auth';
import firestore from 'firebase/firestore'


const settings = {timestampsInSnapshots: true};


const config = {
    apiKey: "AIzaSyCKwjgAFFXrWKaXojwa26o04QrOA_iIeIc",
    authDomain: "mobil-proje-9c3ff.firebaseapp.com",
    projectId: "mobil-proje-9c3ff",
    storageBucket: "mobil-proje-9c3ff.appspot.com",
    messagingSenderId: "363007359849",
    appId: "1:363007359849:web:c819e1f0fdefbd45189bf8"
};
firebase.initializeApp(config);
firebase.firestore().settings(settings);

export default firebase;    