import { useFormik } from "formik";
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
    barcode: Yup.number()
      .required("Barcode required")
      .max(9999999999999, "Barcode must be a maximum of 13 characters"),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log("NEW PRODUCT");
      console.log(Error);
      console.log(values);
    },
  });

  return (
    <div className={styles.inventorymodal}>
      <form onSubmit={formik.handleSubmit}>
        <button onClick={()=>onClose()} className={styles.close}>X</button>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name && (
          <div className="error-message">{formik.errors.name}</div>
        )}

        <label htmlFor="category">Categoría:</label>
        <input
          type="text"
          id="category"
          name="category"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.category}
        />
        {formik.touched.category && formik.errors.category && (
          <div>{formik.errors.category}</div>
        )}

        <label htmlFor="brand">Marca:</label>
        <input
          type="text"
          id="brand"
          name="brand"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.brand}
        />
        {formik.touched.brand && formik.errors.brand && (
          <div>{formik.errors.brand}</div>
        )}

        <label htmlFor="stock">Stock:</label>
        <input
          type="number"
          id="stock"
          name="stock"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.stock}
        />
        {formik.touched.stock && formik.errors.stock && (
          <div>{formik.errors.stock}</div>
        )}

        <label htmlFor="price">Precio:</label>
        <input
          type="number"
          id="price"
          name="price"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.price}
        />
        {formik.touched.price && formik.errors.price && (
          <div>{formik.errors.price}</div>
        )}

        <label htmlFor="barcode">Código de barras:</label>
        <input
          type="number"
          id="barcode"
          name="barcode"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.barcode}
        />
        {formik.touched.barcode && formik.errors.barcode && (
          <div>{formik.errors.barcode}</div>
        )}
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default InventoryForm;
