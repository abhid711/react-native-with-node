import * as Yup from "yup";

const authSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is Required For Sign in")
    .email("Invalid Email Adress"),

  password: Yup.string()
    .required("passwordis Required For Sign in")
    .min(6, "Password must be at least 6 characters")
    .max(12, "Password must be at least 12 characters"),
});
export default authSchema;
