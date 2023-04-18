import { Formik, Form, Field } from "formik";
import { createDocument } from "../../../../services/api/firebase";
import styles from "./inventoryForm.module.css";

type Props = {
  onClose: Function;
};

const InventoryForm = ({ onClose }: Props) => {
  interface MyFormValues {
    name: string;
    price: number;
    barcode: string;
    category: string;
    stock: number;
    brand: string;
  }

  const initialValues: MyFormValues = {
    name: "",
    price: 0,
    barcode: "",
    stock: 0,
    brand: "",
    category: "",
  };

  return (
    <div className={styles.inventorymodal}>
      <Formik
        initialValues={initialValues}
        // esta funcion maneja el evento on submit
        onSubmit={(values, { setSubmitting }) => {
          // delay al hacer submit
          setTimeout(() => {
            console.log(values);
            onClose(); // onclose cierra el modal
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <button
              onClick={() => onClose()}
              type="button"
              className={styles.closebtn}
            >
              X
            </button>
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
            <button type="submit" disabled={isSubmitting}>
              Add Product
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default InventoryForm;
