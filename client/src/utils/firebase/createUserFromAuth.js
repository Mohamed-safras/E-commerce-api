import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase.utils";

const userCollection = collection(db, "user");

export const createUserFromAuth = async (userAuth, additionalInfo = {}) => {
  const userDocRef = await doc(userCollection, userAuth?.uid);

  const userSnap = await getDoc(userDocRef);

  if (!userSnap.exists()) {
    const { displayName, email } = userAuth;
    console.log(displayName);
    const timestamp = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        timestamp,
        ...additionalInfo,
      });
    } catch (error) {
      console.log(error);
    }
  } else {
    return userDocRef;
  }
};
