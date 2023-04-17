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
import { IOrder, IOrderFormData, IMessage } from "../../src/models/data/index";
import { useState, useEffect } from "react";

const getOrders = async (): Promise<IOrder[] | IMessage> => {
  try {
    const ordersRef = collection(db, "orders");
    const querySnapshot = await getDocs(ordersRef);
    let orders = [] as IOrder[];
    querySnapshot.forEach((doc:any) => {
      orders.push({ ...doc.data(), id: doc.id });
    });
    if (!orders.length) {
      return { message: "No orders found!" };
    } else {
      return { orders } as any;
    }
  } catch (error) {
    return { message: error };
  }
};

const createOrder = async (params:IOrderFormData): Promise<IMessage | undefined> => {
  const docData = {...params}
  const ref = doc(db, 'orders')
  try {
    await setDoc(ref, docData)
    return {message: "Order created!"}
  } catch (error) {
    return {message: error}
  }
}

const deleteOrder = async (id:string): Promise<IMessage | undefined> =>{
  try {
    const ref = doc(db, 'orders', id)
    await deleteDoc(ref)
    return {message: `Order id:${id} deleted`}
  } catch (error) {
    return {message: error}
  }
}

export { getOrders, createOrder, deleteOrder };
