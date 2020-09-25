import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCUXQZT3UYAcYeRKt_cK_oK5T3sQDvPsCI",
  authDomain: "crown-e-commerce-7aae2.firebaseapp.com",
  databaseURL: "https://crown-e-commerce-7aae2.firebaseio.com",
  projectId: "crown-e-commerce-7aae2",
  storageBucket: "crown-e-commerce-7aae2.appspot.com",
  messagingSenderId: "1065129899169",
  appId: "1:1065129899169:web:d8c6e7186630262cb0ace0",
  measurementId: "G-YLZWWMD17L"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const db = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
const signInWithGoogle = () => auth.signInWithPopup(provider)

const createUserDocumentProfile = async (authUser, additionalData) => {
  if (!authUser) return;

  const userRef = db.doc(`users/${authUser.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = authUser;
    const createdAt = firebase.firestore.FieldValue.serverTimestamp();

    try {
        await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef;
}

export { auth, db, signInWithGoogle, createUserDocumentProfile }
export default firebase;