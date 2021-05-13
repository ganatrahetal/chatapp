import firebase from 'firebase/app';

const config =  {
    apiKey: "AIzaSyCggMDDgbz0M3QAOhhH33ce-XARhJAmYqY",
    authDomain: "chat-web-app-227d2.firebaseapp.com",
    databaseURL: "https://chat-web-app-227d2-default-rtdb.firebaseio.com",
    projectId: "chat-web-app-227d2",
    storageBucket: "chat-web-app-227d2.appspot.com",
    messagingSenderId: "754971117448",
    appId: "1:754971117448:web:45f17cf055a8be4320dc3d"
  };

  const app = firebase.initializeApp(config);