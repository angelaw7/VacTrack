import Firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyC3VeNBxs8eF6V7h02jpOpYgewoTKtyyWs",
  authDomain: "vactrack-20062.firebaseapp.com",
  databaseURL: "https://vactrack-20062-default-rtdb.firebaseio.com",
  projectId: "vactrack-20062",
  storageBucket: "vactrack-20062.appspot.com",
  messagingSenderId: "845149447958",
  appId: "1:845149447958:web:e7130478a8a6bcd005d237",
  measurementId: "G-VPDBT3DVRX"
};

let app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();