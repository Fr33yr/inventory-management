import React, { useState } from "react";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from "formik";
import { createDocument } from "../../../../services/api/firebase";

const InventoryForm: React.FC = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [barcode, setBarcode] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  const [brand, setBrand] = useState("");

  interface MyFormValues {
    name: string;
    price: number;
    barcode: string;
    category: string;
    stock: number;
    brand: string;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createDocument(
      { name, price, barcode, category, stock, brand },
      "products"
    ).then(res=>console.log(res)).catch(Error)
    //para verificar que captura los datos
    console.log("SAVE");
    // Reseteamos los valores del formulario después del envío
    setName("");
    setBarcode("");
    setBrand("");
    setStock("");
    setCategory("");
    setPrice("");
  };

  const initialValues: MyFormValues = {
    name: "",
    price: 0,
    barcode: "",
    stock: 0,
    brand: "",
    category: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        console.log({ values, actions });
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }}>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="price">Price</label>
        <br />
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <label htmlFor="barcode">Barcode</label>
        <br />
        <input
          type="number"
          id="barcode"
          value={barcode}
          onChange={(e) => setBarcode(e.target.value)}
        />
        <br />
        <label htmlFor="category">Category</label>
        <br />
        <input
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <br />
        <label htmlFor="brand">Brand</label>
        <br />
        <input
          type="text"
          id="brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
        <br />
        <label htmlFor="stock">Stock</label>
        <br />
        <input
          type="number"
          id="stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />
        <br />
        <button type="submit">Add Product</button>
      </Form>
    </Formik>
  );
};

export default InventoryForm;
