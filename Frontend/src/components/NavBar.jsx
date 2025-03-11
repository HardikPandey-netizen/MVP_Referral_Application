import { Bell } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white">
      {/* Left Section */}
      <div className="flex items-center space-x-2">
        <img className="h-10 w-10" src="/Logos/breifcase.svg" alt=""/>
        <span className="text-lg font-semibold text-gray-900">Referral AI</span>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        <Bell className="w-5 h-5 text-gray-600 cursor-pointer" />
        
        <div className="flex items-center space-x-2 bg-gray-100 px-3 py-1 rounded-lg">
          <div className="w-6 h-6 flex items-center justify-center bg-gray-300 rounded-full">
            <span className="text-sm font-medium text-gray-700">JD</span>
          </div>
          <div className="text-sm">
            <p className="font-medium text-gray-900">John Doe</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
