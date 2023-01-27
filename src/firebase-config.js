import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCrW7SKf0wKfYF8sUGXW7s8gG1nQCfPwXs',
  authDomain: 'todo-app-43c9f.firebaseapp.com',
  projectId: 'todo-app-43c9f',
  storageBucket: 'todo-app-43c9f.appspot.com',
  messagingSenderId: '32505300359',
  appId: '1:32505300359:web:28892ba2de18b920dd7f22',
};

export default function getFirebaseConfig() {
  if (!firebaseConfig || !firebaseConfig.apiKey) {
    throw new Error('No Firebase configuration object provided.');
  } else {
    return firebaseConfig;
  }
}

const firebaseAppConfig = getFirebaseConfig();
initializeApp(firebaseAppConfig);
