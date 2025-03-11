import { Clock, User } from "lucide-react";

const referrals = [
  { name: "John Smith", email: "john@example.com" },
  { name: "Alice Brown", email: "alice@example.com" },
  { name: "Mike Johnson", email: "mike@example.com" },
  { name: "Sarah Wilson", email: "sarah@example.com" },
];

const RecentReferrals = () => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 w-80">
      {/* Header */}
      <div className="flex items-center gap-2 text-gray-600 font-semibold text-lg">
        <Clock className="w-5 h-5 text-blue-500" />
        <span className="font-bold text-black">Recent Referrals</span>
      </div>

      {/* Referral List */}
      <div className="mt-4 space-y-4">
        {referrals.map((referral, index) => (
          <div key={index} className="flex items-center gap-3">
            {/* User Icon */}
            <div className="bg-blue-100 p-2 rounded-full">
              <User className="text-blue-500 w-5 h-5" />
            </div>
            {/* User Info */}
            <div>
              <p className="text-gray-800 font-medium">{referral.name}</p>
              <p className="text-gray-500 text-sm">{referral.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentReferrals;
