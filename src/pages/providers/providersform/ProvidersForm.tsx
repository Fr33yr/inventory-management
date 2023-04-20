import { Formik, Form, Field, useFormik } from "formik";
import { createDocument } from "../../../../services/api/firebase";
import { Button } from "antd";
import styles from "./ProvidersForm.module.css";
import * as Yup from "yup";

type Props = {
  onClose: Function;
};

function ProvidersForm({ onClose }: Props) {
  interface MyFormValues {
    name: string;
    email: string;
    phone: string;
  }

  const initialValues: MyFormValues = {
    name: "",
    email: "",
    phone: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name required"),
    email: Yup.string().required("Email required").email(),
    phone: Yup.number().required("Phone required").positive().max(999999999),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema,
    onSubmit: (values) => {
      createDocument(values, "providers").then((res) => {
        if (res) {
          onClose();
        }
      });
    },
  });

  return (
    <>
      <div className={styles.providersmodal}>
        <form onSubmit={formik.handleSubmit}>
          <button className={styles.close} onClick={() => onClose()}>
            X
          </button>
          <label htmlFor="name">Nombre: </label>
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
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="error-message">{formik.errors.email}</div>
          )}
          <label htmlFor="phone">Phone: </label>
          <input
            type="number"
            id="phone"
            name="phone"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />
          {formik.touched.phone && formik.errors.phone && (
            <div className="error-message">{formik.errors.phone}</div>
          )}
          <button type="submit">Add</button>
        </form>
      </div>
    </>
  );
}

export default ProvidersForm;
