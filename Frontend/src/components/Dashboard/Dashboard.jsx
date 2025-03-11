import React from "react";
import StatisticCard from "./StatisticCard";
import { User, Percent, DollarSign } from "lucide-react";
import RecentReferrals from "./RecentRef";

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col gap-8 ml-3">
        <div className="ml-6">
        <h1 className="font-bold text-3xl">Welcome Back</h1>
        <p className="text-gray-500 ">Here's an overview of your referral campaign performance</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <StatisticCard
            title="Total Referrals"
            number={1234}
            available={true}
            increase={true}
            difference={12}
            symbol={User}
          />
          <StatisticCard
            title="Conversion Rate"
            number={23.5 + "%"}
            available={true}
            increase={false}
            difference={2.4}
            symbol={Percent}
          />
          <StatisticCard
            title="Revenue Impact"
            number={"$" + 12 + "," + 345}
            available={true}
            increase={true}
            difference={8.7}
            symbol={DollarSign}
          />
        </div>
        <RecentReferrals />
      </div>
    </>
  );
};

export default Dashboard;
