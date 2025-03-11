import { X } from "lucide-react";
import { Outlet } from "react-router-dom";
import Stepper from "./Stepper";

const Modal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-[2000px] md:w-[800px] border border-gray-300 relative flex flex-col">
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-xl font-bold">Create New Campaign</h2>
            <p className="text-gray-500 text-sm">
              Create a new referral campaign in just a few minutes
            </p>
          </div>
          {/* Close Button */}
          <X 
            onClick={onClose} 
            className="cursor-pointer text-gray-500 hover:text-black transition text-xl" 
          />
        </div>

        {/* Stepper */}
        <Stepper />

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Modal;
