import { useFormik } from "formik";
import {
  createDocument,
  updateDocument,
} from "../../../../services/api/firebase";
import styles from "./inventoryForm.module.css";
import * as Yup from "yup";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { addProduct, updateProduct } from "../../../redux/slices/productsSlices";

type Props = {
  onClose: Function;
  isEditing: boolean;
};

const InventoryForm = ({ onClose, isEditing }: Props) => {
  const dispatch = useAppDispatch()
  const product = useAppSelector((state) => state.products.product);
  interface MyFormValues {
    key?: React.Key;
    id?: string;
    barcode: number;
    name: string;
    category: string;
    price: number;
    stock: number;
    brand: string;
    expirationDate: string;
  }

  const initialValues: MyFormValues = isEditing ? product : {
    name: "",
    price: 0,
    barcode: 0,
    stock: 0,
    brand: "",
    category: "",
    expirationDate: ""
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name required"),
    category: Yup.string().required("Category required"),
    brand: Yup.string().required("Brand required"),
    expirationDate: Yup.date().required("Date required"),
    stock: Yup.number().required("Stock required").positive(),
    price: Yup.number().required("Price required").positive(),
    barcode: Yup.number()
      .required("Barcode required")
      .min(1111111111111, "Barcode must be a maximum of 13 characters")
      .max(9999999999999, "Barcode must be a maximum of 13 characters"),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: null,
    onSubmit: (values) => {
      if(isEditing){
        delete values.id
        updateDocument(values, product.id, "products").then((res) => {
          if (res) {
            dispatch(updateProduct({...values, id: product.id}))
            onClose();
          }
        })
      }else{
        delete values.id
        createDocument(values, "products").then((res:any) => {
          if (res.id) {
            dispatch(addProduct({...values, id: res.id}))
            onClose();
          }
        });
      }
    },
  });

  return (
    <div className={styles.inventorymodal}>
      <form onSubmit={formik.handleSubmit}>
        <button className={styles.close} onClick={() => onClose()}>
          X
        </button>
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

        <label htmlFor="expiracion">Expiracion</label>
        <input
          type="date"
          id="expirationDate"
          name="expirationDate"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.expirationDate}
        />

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
