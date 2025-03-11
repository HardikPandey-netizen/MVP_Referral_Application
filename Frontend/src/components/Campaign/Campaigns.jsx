import { Plus, Search, Filter, SortAsc } from "lucide-react";
import CampCard from "./CampCard";
import { Pause,Play } from "lucide-react";
import Modal from "./Modal/Modal";
import { useState } from "react";

const Campaigns = () => {
  const [showModal, setshowModal] = useState(false);
  return (
    <>
      <div className="flex flex-col gap-8 ml-3">
        <div className="p-6 rounded-2xl  w-full max-w-3xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-3xl text-center font-bold">
                Your Referral Campaigns
              </h2>
              <p className="text-gray-500 text-sm">2 Campaigns • 1 Active</p>
            </div>
            <button onClick={()=>{setshowModal(true)}} className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700">
              <Plus className="w-4 h-4" />
              Create Campaign
            </button>
          </div>

          {/* Search & Filter Section */}
          <div className="mt-4 flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search campaigns..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100">
              <Filter className="w-4 h-4" />
              Filter
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100">
              <SortAsc className="w-4 h-4" />
              Sort
            </button>
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          <CampCard
            title="Summer Referral Program"
            dateOne="5/31/2024"
            dateEnd="8/30/2024"
            active={true}
            referrals={245}
            conversion={32}
            ROI={287}
          />
          <CampCard
            title="Early Bird Special"
            dateOne="4/30/2024"
            dateEnd="5/30/2024"
            active={false}
            referrals={123}
            conversion={28}
            ROI={250}
          />
        </div>
      </div>
      {showModal && <Modal onClose={()=>setshowModal(false)}/>}
    </>
  );
};

export default Campaigns;
