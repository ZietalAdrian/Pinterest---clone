import React, { useState } from "react";
import { BsPinterest } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";

const SignIn = ({ onClose, formik, openToast, handleOnClickOpenModalLogin }) => {
  const [isFields, setIsFields] = useState(false);

  const showField = () => setIsFields(true)

  return (
    <div className="fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-white z-50 h-screen w-[484px] rounded-[2.2rem] overflow-auto pb-4">
      <button onClick={onClose} className="absolute top-6 right-6 text-xl">
        <CgClose size={25} strokeWidth={1.4} />
      </button>
      <div className="flex flex-col mt-6 px-16 leading-8">
        <span className="text-5xl mx-auto my-2">
          <BsPinterest size={43} color="#F00028" />
        </span>
        <div className="mx-auto text-center">
          <span className="text-4xl font-medium p-1 text-gray-800 leading-10 tracking-tight">
            Nieograniczony, bezpłatny dostęp do najlepszych pomysłów na świecie
          </span>
        </div>
        <div className={`flex flex-col px-10 text-center font-light`}>
          <span className="leading-5 mb-5 px-5">
            Zarejestruj się, aby zobaczyć więcej
          </span>
          {!isFields ? (
            <button
              type="button"
              className="bg-[#F00028] text-white p-2 rounded-3xl my-3"
              onClick={showField}
            >
              <span className="block leading-5 font-semibold">
                Kontunuuj przy użyciu adresu e-mail
              </span>
            </button>
          ) : (
            <form onSubmit={formik.handleSubmit} className="flex flex-col">
              <input
                type="email"
                id="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                placeholder="Adres e-mail"
                className={`border-2 border-solid rounded-2xl p-1 pl-5 mb-1 placeholder:font-extralight placeholder:tracking-wide border-gray-300 hover:border-gray-400 focus:outline focus:outline-blue-300 focus:outline-4 focus:border-gray-300`}
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="text-red-600 text-xs pl-1 pb-2 text-left">
                  {formik.errors.email}
                </p>
              ):null}
              <input
                type="password"
                id="passwordSignin"
                name="passwordSignin"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.passwordSignin || ""}
                placeholder="Utwórz hasło"
                className="border-2 border-solid rounded-2xl p-1 pl-5 mb-1 placeholder:font-extralight placeholder:tracking-wide border-gray-300 hover:border-gray-400 focus:outline focus:outline-blue-300 focus:outline-4 focus:border-gray-300"
              />
              {formik.touched.passwordSignin &&
                formik.errors.passwordSignin && (
                  <p className="text-red-600 text-xs pl-1 pb-2 text-left">
                    {formik.errors.passwordSignin}
                  </p>
                )}
              <input
                type="number"
                id="age"
                name="age"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.age || ""}
                placeholder="Wiek"
                className="border-2 border-solid rounded-2xl p-1 pl-5 mb-1 placeholder:font-extralight placeholder:tracking-wide border-gray-300 hover:border-gray-400 focus:outline focus:outline-blue-300 focus:outline-4 focus:border-gray-300"
              />
              {formik.touched.age && formik.errors.age && (
                <p className="text-red-600 text-xs pl-1 pb-2 text-left">
                  {formik.errors.age}
                </p>
              )}
              <button
                type="submit"
                className="p-1 mt-2 bg-[#F00028] text-white rounded-3xl font-semibold hover:bg-[#d81535]"
              >
                Kontynuuj
              </button>
              <span className="my-3 font-semibold text-sm">LUB</span>
            </form>
          )}
          <button
            type="button"
            onClick={openToast}
            className="p-1 mb-2 max-h-10 bg-blue-500 text-white rounded-3xl font-bold truncate flex"
          >
            <span className="pl-1 pt-1">
              <RiFacebookCircleFill size={25} />
            </span>
            Kontunuuj przy użyciu Facebooka
          </button>
          <button
            type="button"
            onClick={openToast}
            className="p-2 rounded-3xl truncate border-[1px] text-sm font-medium flex border-gray-300"
          >
            <span className="px-1">
              <FcGoogle size={22} />
            </span>
            Kontunuuj przy użyciu konta Google
          </button>
          <p className="mt-4 text-center text-xs font-thin">
            Kontynuując, wyrażasz zgodę na warunki opisane w dokumencie{" "}
            <span className="cursor-pointer hover:underline font-semibold">
              Warunki korzystania z serwisu
            </span>{" "}
            i potwierdzasz zapoznanie się z dokumentem{" "}
            <span className="cursor-pointer hover:underline font-semibold">
              Polityka prywatności
            </span>{" "}
            Pinteresta
          </p>
        </div>
      </div>
      <div className="text-center flex flex-col font-semibold text-xs mt-8">
        <button
          type="button"
          onClick={handleOnClickOpenModalLogin}
          className="font-semibold text-xs mb-3"
        >
          Masz już konto? Zaloguj się
        </button>
        <span>
          Prowadzisz firmę?{" "}
          <button type="button" className="font-semibold text-xs">
            Rozpocznij tutaj!
          </button>
        </span>
      </div>
    </div>
  );
};

export default SignIn;
