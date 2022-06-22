import React from "react";
import { BsPinterest } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";

const Login = ({ onClose, formik, setLogin, setToast }) => {

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
            Zaloguj się, aby zobaczyć więcej
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
            placeholder="Adres e-mail"
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
            placeholder="Hasło"
            className="border-2 border-solid rounded-2xl p-3 mt-2 pl-5 placeholder:font-extralight placeholder:tracking-wide border-gray-300 hover:border-gray-400
            focus:outline focus:outline-blue-300 focus:outline-4 focus:border-gray-300"
          />
          {formik.touched.passwordLogIn && formik.errors.passwordLogIn && (
            <p className="text-red-600 text-xs pl-1">
              {formik.errors.passwordLogIn}
            </p>
          )}
          <button className="text-left mt-2 font-semibold text-sm">
            Nie pamiętasz hasła ?
          </button>
          <button
            type="submit"
            className="p-2 mt-5 bg-[#F00028] text-white rounded-3xl hover:bg-[#d81535]"
          >
            Zaloguj się
          </button>
          <span className="text-center text-sm font-semibold my-4">LUB</span>
          <button
            type="button"
            onClick={() => setToast(true)}
            className="p-2 pb-3 mb-2 max-h-10 bg-blue-500 text-white rounded-3xl font-bold truncate flex"
          >
            <span className="pl-1">
              <RiFacebookCircleFill size={25} />
            </span>
            Kontynuuj przy użyciu Facebook{" "}
          </button>
          <button
            type="button"
            onClick={() => setToast(true)}
            className="p-2 rounded-3xl truncate border-[1px] text-sm font-medium flex border-blue-200 bg-blue-50"
          >
            <span className="px-1">
              <FcGoogle size={22} />
            </span>
            Kontynuuj przy użyciu konta Google{" "}
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
        </form>
        <span className="border-b-[1px] w-1/2 my-2 mx-auto"></span>
      </div>
      <div className="text-center flex flex-col font-semibold text-xs">
        <button
          type="button"
          onClick={() => setLogin(false)}
          className="font-semibold text-xs mb-3"
        >
          Nie ma Cię jeszcze na Pintereście ? Zarejestruj się
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

export default Login;
