import * as Yup from 'yup'
import { useFormik } from "formik";
import {updateDocument} from '../../../services/api/firebase'
import {useAppSelector} from '../../hooks'

type Props = {
  onClose: Function;
};

interface ProductUpdate {
  name?: string;
  price?: string;
  barcode?: string;
  category?: string;
  stock?: string;
  brand?: string;
}

function UpdatesForm({ onClose }: Props) {
const {id} = useAppSelector((state) => state.products.product)

  const initialValues: ProductUpdate = {
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
    validationSchema,
    onSubmit: (values) => {
      updateDocument(values, id, "products").then((res) => {
        if (res) {
          onClose();
        }
      });
    },
  });

  return <></>;
}

export default UpdatesForm;
