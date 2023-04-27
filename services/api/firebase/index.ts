import {
  collection,
  addDoc,
  getDocs,
  query,
  limit,
  setDoc,
  getDoc,
  doc,
  deleteDoc,
  updateDoc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../db/config/firebase";
import { IMessage } from "../../../src/models/data/index";

type DocId = {
  id: string
}

const createDocument = async (
  params: any,
  collectionName: string
): Promise<IMessage | DocId | undefined> => {
  const docData = { ...params };
  try {
    const response: DocId = await addDoc(collection(db, collectionName), docData)
    return {id: response.id}
  } catch (error) {
    if (error instanceof Error) return { message: error };
  }
};

const updateDocument = async (
  params: any,
  id: string,
  collectionName: string
): Promise<IMessage | undefined> => {
  const ref = doc(db, collectionName, id);
  try {
    await updateDoc(ref, { ...params });
    return {message: "Document updated!"}
  } catch (error) {
    if (error instanceof Error) return { message: error };
  }
};

const deleteDocument = async (
  id: string,
  collectionName: string
): Promise<IMessage | undefined> => {
  const ref = doc(db, collectionName, id);
  try {
    await deleteDoc(ref);
    return { message: `Document id:${id} deleted` };
  } catch (error) {
    if (error instanceof Error) return { message: error };
  }
};

const getDocuments = async (
  collectionName: string
): Promise<object[] | IMessage | undefined> => {
  try {
    const ordersRef = collection(db, collectionName);
    const querySnapshot = await getDocs(ordersRef);
    let data = [] as object[];
    querySnapshot.forEach((doc: any) => {
      data.push({ ...doc.data(), id: doc.id });
    });
    if (!data.length) {
      return { message: "No data found!" };
    } else {
      return { data } as any;
    }
  } catch (error) {
    if (error instanceof Error) return { message: error };
  }
};

export { createDocument, updateDocument, deleteDocument, getDocuments };
