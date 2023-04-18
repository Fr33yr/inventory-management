import { Formik, Form, Field, ErrorMessage } from "formik";
import {Button} from 'antd'
import styles from "./ProvidersForm.module.css";

type Props = {
  onClose: Function;
};

type formValues = {
  values: { name: string; email: string; phone: string };
};

function ProvidersForm({ onClose }: Props) {

  return (
    <>
      <div className={styles.providersmodal}>
        <Formik
          initialValues={{ name: "", email: "", phone: "" }}
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
                <Button
              onClick={() => onClose()}
              type="primary"
              className={styles.closebtn}
            >X</Button>
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
