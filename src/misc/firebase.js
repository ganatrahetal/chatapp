import { Notification as Toast } from 'rsuite';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/messaging';
import 'firebase/functions';
import { isLocalhost } from './helpers';

const config = {
  apiKey: "AIzaSyCggMDDgbz0M3QAOhhH33ce-XARhJAmYqY",
    authDomain: "chat-web-app-227d2.firebaseapp.com",
    databaseURL: "https://chat-web-app-227d2-default-rtdb.firebaseio.com",
    projectId: "chat-web-app-227d2",
    storageBucket: "chat-web-app-227d2.appspot.com",
    messagingSenderId: "754971117448",
    appId: "1:754971117448:web:45f17cf055a8be4320dc3d"
};

export const fcmVapidKey =
  'BLHmUI2LXaZISS-FIG0_aC5upF0a7Qs2Oq69_lf0zZlaQxw8tNQ-gTfbwC06UOdqk3_x9FP6b5U7XoccjSk1Yiw';

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
export const functions = app.functions('europe-west3');

export const messaging = firebase.messaging.isSupported()
  ? app.messaging()
  : null;

if (messaging) {
  messaging.onMessage(({ notification }) => {
    const { title, body } = notification;
    Toast.info({ title, description: body, duration: 0 });
  });
}

if (isLocalhost) {
  functions.useEmulator('localhost', 5001);

}