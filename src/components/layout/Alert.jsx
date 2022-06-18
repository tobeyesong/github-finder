/** @format */

import { useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";

import { HiX } from "react-icons/hi";

function Alert() {
  const alertContext = useContext(AlertContext);

  const { alert } = alertContext;
  return (
    alert !== null && (
      <div className='grid justify-items-center'>
        <div className='absolute flex p-2 bg-red-100 rounded-md align-items-center '>
          <HiX className='w-5 h-5 text-red-400' aria-hidden='true' />
          <h3 className='text-sm font-medium text-red-800 '>{alert.msg}</h3>
        </div>
      </div>
    )
  );
}

export default Alert;
