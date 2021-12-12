import firebase from 'firebase/app'

import 'firebase/auth'

const firebaseConfig = {
   apiKey: "AIzaSyAiR6ypUAR6HFTL7rk1FddKDMHBcVbUVo0",
   authDomain: "yt-clone-381b2.firebaseapp.com",
   projectId: "yt-clone-381b2",
   storageBucket: "yt-clone-381b2.appspot.com",
   messagingSenderId: "702991032827",
   appId: "1:702991032827:web:ecef58f1d237d98316eb5e"
 };

firebase.initializeApp(firebaseConfig)

export default firebase.auth()
