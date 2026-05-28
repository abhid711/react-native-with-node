import * as Yup from "yup";

const authSchema = Yup.object().shape({
  fullName: Yup.string()
    .required("Full name is required")
    .min(3, "Name must be at least 3 characters")
    .matches(/^[a-zA-Z\s]+$/, "Only letters and spaces are allowed"),

  phoneNumber: Yup.string()
    .required("Phone number is required")
    .max(10)
    .min(10)
    .matches(/^[1-9]\d{9}$/, "Enter a valid 10-digit phone number"),
});

export default authSchema;
