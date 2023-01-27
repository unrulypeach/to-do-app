import './styles/style.css';
import './styles/checkboxStyle.css';
import './styles/urgentCheckboxTask.css';
import './styles/normalCheckboxTask.css';
import './styles/dropdownBtn.css';

import { initializeApp } from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  connectAuthEmulator,
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  setDoc,
  getDoc,
  doc,
  getDocs,
  deleteDoc,
  updateDoc,
  connectFirestoreEmulator,
} from 'firebase/firestore';
import profilePlaceholder from './assets/profile_placeholder.png';
import getFirebaseConfig from './firebase-config';

import initPage from './createPage';
import { component } from './component';
import { newTask, getInputValues } from './task';

initPage();
component.refreshScreen(component.returnLib());
const auth = getAuth();
connectAuthEmulator(auth, 'http://localhost:9099');

// Sign-in
async function signIn() {
  // Sign in using popup auth and Google as the identity provider
  const provider = new GoogleAuthProvider();
  await signInWithPopup(getAuth(), provider);
}

// Sign-out
function signOutUser() {
  signOut(getAuth());
}

// Initiate firebase auth
function initFirebaseAuth() {
  // Subscribe to the user's signed-in status & listen to auth state changes
  onAuthStateChanged(getAuth(), authStateObserver);
}

// Returns the signed-in user's profile pic URL
function getProfilePicUrl() {
  return getAuth().currentUser?.photoURL ?? profilePlaceholder;
}

// Returns the signed-in user's display name
function getUserName() {
  return getAuth().currentUser.displayName;
}

function getUserID() {
  return getAuth().currentUser.uid;
}

// Returns true if a user is signed-in
function isUserSignedIn() {
  return !!getAuth().currentUser;
}

// Saves a task
async function saveTask(taskObj) {
  // {createDate, description, dueDate, tags, title, urgent, completed,}

  // try to save
  const docRef = doc(collection(db, `${getUserID()}`));
  try {
    await setDoc(docRef, {
      completed: taskObj.completed ?? false,
      createDate: taskObj.createDate,
      description: taskObj.description,
      dueDate: taskObj.dueDate,
      tags: taskObj.tags,
      title: taskObj.title,
      urgent: taskObj.urgent,
    });
    component.addTaskToDom(taskObj, docRef.id);
  } catch (error) {
    console.error('Error adding todo list', error);
  }
}

// Load user's todo or load an empty todo app
async function loadExistingTask() {
  // clear tasks
  component.removeAllTasks();
  // if saved tasks exist, remove demo tasks, and append saved tasks
  const querySnapshot = await getDocs(collection(db, getUserID()));
  querySnapshot.forEach((docs) => {
    const task = {
      title: docs.data().title,
      description: docs.data().description,
      createDate: docs.data().createDate,
      dueDate: docs.data().dueDate,
      urgent: docs.data().urgent,
      tags: docs.data().tags,
      completed: docs.data().completed,
    };
    // component.addTask(task);
    component.addTaskToDom(task, docs.id);
  });
}

// Erase task
async function removeTaskFromDb(taskId) {
  const querySnapshot = await getDoc(doc(db, getUserID(), taskId));
  if (querySnapshot.exists()) {
    await deleteDoc(doc(db, getUserID(), taskId));
  } else {
    // doc.data() will be undefined in this case
    console.log('No such data');
  }
}

// Change a tasks prop value
async function toggleTaskInDb(taskId, prop) {
  const querySnapshot = await (await getDoc(doc(db, getUserID(), taskId))).data().completed;
  await updateDoc(doc(db, getUserID(), taskId), {
    [prop]: !querySnapshot,
  });
}

// Saves the messaging device token to Cloud Firestore
/* async function saveMessagingDeviceToken() {
  try {
    const currentToken = await getToken(getMessaging());
    if (currentToken) {
      console.log('Got FCM device token:', currentToken);

      // Saving the Device Token to Cloud Firestore
      const tokenRef = doc(getFireStore(), 'fcmTokens', currentToken);
      await setDoc(tokenRef, { uid: getAuth().currentUser.uid });

      // This will fire when a message is received while the app is in the foreground
      // WHen the app is in the bg, firebase-message-sw.js will receive the msg instead
      onMessage(getMessaging(), (message) => {
        console.log(
          'New foreground notifications from Firebase Messaging',
          message.notification,
        );
      });
    } else {
      // Need to request permission to show Notif
      requestNotificationsPermissions();
    }
  } catch (error) {
    console.error('Unable to get messaging token', error);
  }
} */

// Requests permissions to show notifs
/* async function requestNotificationsPermissions() {
  console.log('Requesting notifications permission...');
  const permission = await Notification.requestPermission();

  if (permission === 'granted') {
    console.log('Notification permission granted');
    await saveMessagingDeviceToken();
  } else {
    console.log('Unable to get permission to notify');
  }
} */
// Triggers when the auth state change for instance when the user signs-in or out
function authStateObserver(user) {
  if (user) {
    // User is sign in
    // Get the signed-in user's profile pic and name
    const userName = getUserName();
    const profilePicUrl = getProfilePicUrl();

    // Set the user's name and profile pic
    userNameElem.textContent = `Hello ${userName}`;
    userPicElem.style.backgroundImage = `url(${addSizeToGoogleProfilePic(profilePicUrl)})`;

    // Show sign-out button
    signOutButtonElem.removeAttribute('hidden');

    // Hide sign-in btn
    signInButtonElem.setAttribute('hidden', 'true');

    // Save the Firebase Messaging Device token and enable notifs
    // saveMessagingDeviceToken();

    // Loads users messages if any exists
    loadExistingTask();
  } else {
    // User is signed out
    // Hide user's name and pic and sign-out button
    userNameElem.innerText = 'Hello Guest!';
    userPicElem.style.backgroundImage = `url(${(getProfilePicUrl())})`;
    signOutButtonElem.setAttribute('hidden', 'true');
    signInButtonElem.removeAttribute('hidden');

    // Load existing library
    component.refreshScreen(component.returnLib());
  }
}

// Adds a size to Google Profile pics URLs
function addSizeToGoogleProfilePic(url) {
  if (url.indexOf('googleusercontent.com') !== -1 && url.indexOf('?') === -1) {
    return `${url}?sz=150`;
  }
  return url;
}
// DOM elems
const userNameElem = document.getElementById('userName');
const userPicElem = document.getElementById('userPic');
const signInButtonElem = document.getElementById('sign-in');
const signOutButtonElem = document.getElementById('sign-out');
const createNewTaskBtnElem = document.getElementById('taskSubmit-btn');

// Sign in/out
signInButtonElem.addEventListener('click', signIn);
signOutButtonElem.addEventListener('click', signOutUser);

// Submit data to firestore when a new task is created
createNewTaskBtnElem.addEventListener('click', () => {
  if (isUserSignedIn()) {
    const task = newTask(getInputValues());
    saveTask(task);
  } else {
    const task = newTask(getInputValues());
    component.addTask(task);
    component.addTaskToDom(task);
    component.returnLib();
  }
});

// const app = initializeApp(getFirebaseConfig());
// const db = getFirestore(app);
initFirebaseAuth();
const db = getFirestore();
connectFirestoreEmulator(db, 'localhost', 8080);

export { removeTaskFromDb, toggleTaskInDb, isUserSignedIn };
