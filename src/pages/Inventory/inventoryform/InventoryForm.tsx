import { Formik, Form, Field } from "formik";
import { createDocument } from "../../../../services/api/firebase";
import styles from "./inventoryForm.module.css";
import { Button } from "antd";
import * as Yup from "yup";

type Props = {
  onClose: Function;
};

const InventoryForm = ({ onClose }: Props) => {
  interface MyFormValues {
    name: string;
    price: string;
    barcode: string;
    category: string;
    stock: string;
    brand: string;
  }

  const initialValues: MyFormValues = {
    name: "",
    price: "",
    barcode: "",
    stock: "",
    brand: "",
    category: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name required"),
    category: Yup.string().required("Category required"),
    brand: Yup.string().required("Brand required"),
    stock: Yup.number().required("Stock required").positive(),
    price: Yup.number().required("Price required").positive(),
    barcode: Yup.number().required("Barcode required").max(13).positive()
  });

  const handleSubmit=(values:MyFormValues)=>{
    console.log("save Form");    
    console.log(values);
    createDocument(values,"products")    
  }

  return (
    <div className={styles.inventorymodal}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
       
       {({ dirty, isValid }) => (
          <Form>
            <Button
              onClick={() => onClose()}
              className={styles.closebtn}
              type="primary"
            >
              X
            </Button>
            <label htmlFor="name">Name</label>
            <Field type="text" name="name" />
            <label htmlFor="category">Category</label>
            <Field type="text" name="category" />
            <label htmlFor="brand">Brand</label>
            <Field type="text" name="brand" />
            <label htmlFor="stock">Stock</label>
            <Field type="number" name="stock" />
            <label htmlFor="price">Price</label>
            <Field type="number" name="price" />
            <label htmlFor="barcode">Barcode</label>
            <Field type="text" name="barcode" />
            <button type="submit" disabled={!dirty || !isValid}>
              New Product
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default InventoryForm;
