import React from "react";
import { BsPinterest } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { t } from "i18next";

const Login = ({
  onClose,
  formik,
  openToast,
  handleOnClickOpenModalSingIn,
}) => {
  return (
    <div className="fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-white z-50 h-screen w-[484px] rounded-[2.2rem] overflow-auto pb-4">
      <button onClick={onClose} className="absolute top-6 right-6 text-xl">
        <CgClose size={25} strokeWidth={1.4} />
      </button>
      <div className="flex flex-col mt-6">
        <span className="text-5xl mx-auto my-2">
          <BsPinterest size={43} color="#F00028" />
        </span>
        <div className="mb-5 mx-auto text-center px-28">
          <span className="text-4xl font-medium p-1 text-gray-800 leading-10 tracking-tight">
            {t("logInToSeeMore")}
          </span>
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col px-[6.2rem]"
        >
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            placeholder={t("email")}
            className="border-2 border-solid rounded-2xl p-3 pl-5 placeholder:font-extralight placeholder:tracking-wide border-gray-300 hover:border-gray-400 focus:outline focus:outline-blue-300 focus:outline-4 focus:border-gray-300"
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-600 text-xs pl-1">{formik.errors.email}</p>
          )}
          <input
            type="password"
            id="passwordLogIn"
            name="passwordLogIn"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.passwordLogIn || ""}
            placeholder={t("passoword")}
            className="border-2 border-solid rounded-2xl p-3 mt-2 pl-5 placeholder:font-extralight placeholder:tracking-wide border-gray-300 hover:border-gray-400
            focus:outline focus:outline-blue-300 focus:outline-4 focus:border-gray-300"
          />
          {formik.touched.passwordLogIn && formik.errors.passwordLogIn && (
            <p className="text-red-600 text-xs pl-1">
              {formik.errors.passwordLogIn}
            </p>
          )}
          <button className="text-left mt-2 font-semibold text-sm">
            {t("forgotPassowrd")}
          </button>
          <button
            type="submit"
            className="p-2 mt-5 bg-[#F00028] text-white rounded-3xl hover:bg-[#d81535]"
          >
            {t("logIn_2")}
          </button>
          <span className="text-center text-sm font-semibold my-4">
            {t("or")}
          </span>
          <button
            type="button"
            onClick={openToast}
            className="p-2 pb-3 mb-2 max-h-10 bg-blue-500 text-white rounded-3xl font-bold truncate flex"
          >
            <span className="pl-1">
              <RiFacebookCircleFill size={25} />
            </span>
            {t("continueFacebook")}{" "}
          </button>
          <button
            type="button"
            onClick={openToast}
            className="p-2 rounded-3xl truncate border-[1px] text-sm font-medium flex border-blue-200 bg-blue-50"
          >
            <span className="px-1">
              <FcGoogle size={22} />
            </span>
            {t("continueGoogle")}{" "}
          </button>
          <p className="mt-4 text-center text-xs font-thin">
            {t("terms_1")}{" "}
            <span className="cursor-pointer hover:underline font-semibold">
              {t("terms_2")}
            </span>{" "}
            {t("terms_3")}{" "}
            <span className="cursor-pointer hover:underline font-semibold">
              {t("terms_4")}
            </span>{" "}
            {t("terms_5")}
          </p>
        </form>
        <span className="border-b-[1px] w-1/2 my-2 mx-auto"></span>
      </div>
      <div className="text-center flex flex-col font-semibold text-xs">
        <button
          type="button"
          onClick={handleOnClickOpenModalSingIn}
          className="font-semibold text-xs mb-3"
        >
          {t("notOnPinteres")}
        </button>
        <span>
          {t("areYouBusiness")}{" "}
          <button type="button" className="font-semibold text-xs">
            {t("startHere")}
          </button>
        </span>
      </div>
    </div>
  );
};

export default Login;
