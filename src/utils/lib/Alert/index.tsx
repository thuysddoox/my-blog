import { createPortal } from 'react-dom';
import { AiFillCheckCircle } from 'react-icons/ai';
import { IoIosCloseCircle } from 'react-icons/io';

const Alert = ({ message, status = 'success' }: { message: string; status?: string }) => {
  return (
    <>
      {createPortal(
        <div
          className={`inline-block w-max transition-all duration-750 fixed top-[32px] left-1/2 -translate-x-1/2 bg-white inline-flex items-center py-2 px-4 shadow-lg z-[15] rounded-[4px] ${
            status === 'success'
              ? 'border-l-[4px] border-green-500 bg-green-50'
              : 'border-l-[4px] border-red-500 bg-red-50'
          }`}
        >
          {status === 'success' ? (
            <AiFillCheckCircle className={`${'text-green-500'}`} />
          ) : (
            <IoIosCloseCircle className={`${'text-red-500'}`} />
          )}
          <span className="px-4 font-title font-medium">{message}</span>
        </div>,
        document.body
      )}
    </>
  );
};

export default Alert;
