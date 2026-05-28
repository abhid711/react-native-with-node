import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is Required")
    .email("Invalid Email Adress"),

  password: Yup.string()
    .required("Password is Required")
    .min(6, "Password must be at least 6 characters")
    .max(12, "Password must be at least 12 characters"),
});
export default validationSchema;
