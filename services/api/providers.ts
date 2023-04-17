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
import { db } from "../db/config/firebase";
import { IProvider, IProviderFormData, IMessage } from "../../src/models/data/index";

const getProviders = async (): Promise<IMessage | IProvider> => {
  try {
    const providersRef = collection(db, "providers");
    const querySnapshot = await getDocs(providersRef);
    let providers = [] as IProvider[];
    querySnapshot.forEach((doc:any) => {
      providers.push({ ...doc.data(), id: doc.id });
    });
    if (!providers.length) {
      return { message: "No orders found!" };
    } else {
      return { providers } as any;
    }
  } catch (error) {
    return {message: error}
  }
};

const createProvider = async (params:IProviderFormData): Promise<IMessage | undefined> => {
  const docData = {...params}
  const ref = doc(db, 'providers')
  try {
    await setDoc(ref, docData)
    return {message: "Provider added!"}
  } catch (error) {
    return {message: error}
  }
}

const deleteProvider = async (id:string): Promise<IMessage | undefined> =>{
  try {
    const ref = doc(db, 'orders', id)
    await deleteDoc(ref)
    return {message: `Provider id:${id} deleted`}
  } catch (error) {
    return {message: error}
  }
}

export {getProviders, createProvider, deleteProvider}