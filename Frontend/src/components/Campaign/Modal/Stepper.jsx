import React from "react";
import { NavLink } from "react-router-dom";

const Stepper = () => {
  return (
    <div className="w-full px-4">
      <div className="flex items-center justify-between">
        {/* Steps */}
        {[1, 2, 3, 4].map((step, index) => (
          <React.Fragment key={step}>
            <div className="flex flex-col items-center w-1/4 text-center">
              <NavLink
                to={`/campaigns/${step}`}
                className={({ isActive }) =>
                  `w-10 h-10 flex items-center justify-center rounded-full text-white font-bold transition ${
                    isActive
                      ? "bg-gradient-to-r from-purple-500 to-blue-500"
                      : "bg-gray-300"
                  }`
                }
              >
                {step}
              </NavLink>
            </div>
            {index < 3 && <div className="w-1/6 h-[2px] bg-gray-300"></div>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
