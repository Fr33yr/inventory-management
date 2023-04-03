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
import { IProductForm, IProduct, ICartItem } from "../../models/index";
import { useState, useEffect } from "react";

interface IMessage {
  message: string | Error;
}

interface IProductsResults {
  products: IProduct[];
  message?: Error;
}

function useGetProducts() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({});

  const productsRef = collection(db, "products");

  useEffect(() => {
    setLoading(true);
    getDocs(productsRef)
      .then((snapshot) => {
        let data = [] as IProduct[];
        snapshot.docs.forEach((doc: any) => {
          data.push({ ...doc.data().productData, id: doc.id });
        });
        setProducts(data);
      })
      .catch((err) => setError(err));
  }, []);

  return { products, error, loading };
}

const createProduct = async (
  productData: IProductForm
): Promise<IMessage | undefined> => {
  try {
    await addDoc(collection(db, "products"), {
      productData,
    });
    return { message: "Product created!" };
  } catch (error) {
    if (error instanceof Error) {
      return { message: error };
    }
  }
};

const updateProduct = async (id: string, productData: IProductForm) => {
  const productRef = doc(db, "products", id);
  try {
    await setDoc(productRef, productData);
  } catch (error) {}
};

type updates = {
  id: string,
  amount: string
}

const updateProductsAmount = async (updates: updates[]) => {

  
};

export { useGetProducts, createProduct, updateProduct };
