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
import { ICustomer } from "../../src/models/data/index";
import { useEffect, useState } from "react";

interface IMessage {
  message: string | Error;
}

function useCustomers() {
  const [customers, setCustomers] = useState<ICustomer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({});

  const customersRef = collection(db, "customers");

  useEffect(() => {
    setLoading(true);
    getDocs(customersRef)
      .then((snapshot) => {
        let data = [] as ICustomer[];
        snapshot.docs.forEach((doc: any) => {
          data.push({ ...doc.data().customerData, id: doc.id });
        });
        setCustomers(data);
      })
      .catch((err:IMessage) => setError(err));
  }, []);

  return { customers, error, loading };
}

export {useCustomers}