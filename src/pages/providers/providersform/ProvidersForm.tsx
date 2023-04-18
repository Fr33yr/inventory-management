import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import styles from "./ProvidersForm.module.css";

type Props = {
  onClose: Function;
};

type formValues = {
  values: { name: string; email: string; phone: string };
};

function ProvidersForm({ onClose }: Props) {
  const [isSubmitting, setSubmitting] = useState(true);

  return (
    <>
      <div className={styles.providersmodal}>
        <Formik
          initialValues={{ name: "", email: "", phone: "" }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log(values);
              onClose();
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
              <Form>
              <label htmlFor="name">Name</label>
              <Field type="text" name="name" />
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" />
              <label htmlFor="phone">phone</label>
              <Field type="text" name="phone" />
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default ProvidersForm;
