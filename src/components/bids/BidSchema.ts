import * as yup from "yup";


export const placeBidSchema = yup.object().shape({
    quantity: yup.string().required("Quantity is Required"),
    price: yup
      .number()
      .required("Price is required"),
      close_time: yup.date().required('Close Date is required').nullable(),
      start_time: yup.date().required('Start Date is required').nullable()
  });
  