import React from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import Login from "./Login";
import SignIn from "./SignIn";


const AuthenticationBoard = ({ open, onClose, login, openToast,handleOnClickOpenModalLogin, handleOnClickOpenModalSingIn }) => {

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Hmm… to nie wygląda jak adres e-mail.")
        .max(
          30,
          "Twój adres e-mail jest za długi! Może mieć maksymalnie 30 znaków."
        )
        .required(
          "Czegoś tu brakuje! Nie zapomnij dodać swojego adresu e-mail."
        ),
      passwordLogIn: Yup.string().required("Required"),
      passwordSignin: Yup.string()
        .min(6, "Twoje hasło jest za krótkie! Musi mieć więcej niż 6 znaków.")
        .max(30, "Twoje hasło jest za długie! Może mieć maksymalnie 30 znaków.")
        .required("Required"),
      // age: Yup.number().max(3, "Wprowadź prawidłową wartość.").required("Czegoś tu brakuje! Nie zapomnij podać swojego wieku."),
      // age: Yup.number()
      //   .test(
      //     "len",
      //     "Wprowadź prawidłową wartość.",
      //     (val) => val.toString().length < 4
      //   )
      //   .integer("To nie jest liczba.")
      //   .required("Czegoś tu brakuje! Nie zapomnij podać swojego wieku."),
      // age: Yup.number().required().positive().integer(),
    }),
    onSubmit: () => {
      openToast();
    },
  });

  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div
        onClick={onClose}
        className="fixed top-0 bottom-0 left-0 right-0 bg-black/50 z-50"
      />
      {login ? (
        <Login
          onClose={onClose}
          formik={formik}
          openToast={openToast}
          handleOnClickOpenModalSingIn={handleOnClickOpenModalSingIn}
        />
      ) : (
        <SignIn
          onClose={onClose}
          formik={formik}
          openToast={openToast}
          handleOnClickOpenModalLogin={handleOnClickOpenModalLogin}
        />
      )}

    </>,
    document.getElementById("portal")
  );
};

export default AuthenticationBoard;