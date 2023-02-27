import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  writeBatch,
} from "firebase/firestore";
import { db } from "./firebase.utils";

export const addCollectionAndDocument = async (
  collectionKey,
  productObject
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  productObject.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

export const getProducts = async () => {
  const collectionRef = collection(db, "categories");

  const queryValue = query(collectionRef);

  const querySnapshot = await getDocs(queryValue);

  const categoryMap = querySnapshot.docs.reduce((acc, doc) => {
    const { title, items } = doc.data();

    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};
