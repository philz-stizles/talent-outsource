import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { firebaseMsgKey } from './utils/constants';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRsXcf-_W-ej2sKPXVFTjX0dcZa9HqQgE",
  authDomain: "devdezyn-f8967.firebaseapp.com",
  databaseURL: "https://devdezyn-f8967-default-rtdb.firebaseio.com",
  projectId: "devdezyn-f8967",
  storageBucket: "devdezyn-f8967.appspot.com",
  messagingSenderId: "271287369107",
  appId: "1:271287369107:web:65f4ba892f47b2f14a3c66"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const messaging = getMessaging(firebaseApp);

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log('payload', payload);
      resolve(payload);
    });
  });

export const requestForToken = async () => {
  try {
    const currentToken = await getToken(messaging, {
      vapidKey: firebaseMsgKey,
    });
    if (currentToken) {
      console.log('current token for client: ', currentToken);
    } else {
      // Show permission request UI
      console.log(
        'No registration token available. Request permission to generate one.'
      );
    }
  } catch (err) {
    console.log('An error occurred while retrieving token. ', err);
  }
};
