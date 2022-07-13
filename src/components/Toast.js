import { t } from "i18next";
import React from "react";
import ReactDOM from "react-dom";

const Toast = ({toast, setToast}) => {
    setTimeout(() => {
     setToast(false);
     clearTimeout();
   }, 2000);
   if (!toast) return null;
   return ReactDOM.createPortal(
     <div className="fixed bottom-2 left-1/2 -translate-x-1/2 bg-gray-600 rounded-3xl w-56 z-[1000]">
       <span className="block p-4 text-center text-sm text-gray-200">
         {t("maybeNextTime")}
       </span>
     </div>,
     document.getElementById("notification")
   );
 }

 export default Toast;