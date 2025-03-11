
const Page4 = () => {
  const campaign = {
    name: "Summer Referral Special",
    status: "Active",
    dateRange: "Starting Feb 19, 2025",
    rewardType: "Instant",
    rewardFormat: "Discount",
    rewardValue: "15%",
    message:
      "Share this exclusive offer with your friends! They'll get 20% off their first purchase, and you'll earn a $25 reward when they complete their transaction.",
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md">
      <div className="border rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-3">Campaign Details</h2>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-500">Name:</span>
            <span className="font-medium">{campaign.name}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-500">Status:</span>
            <span className="text-green-500 font-medium">{campaign.status}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-500">Date Range:</span>
            <span className="font-medium">{campaign.dateRange}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-500">Reward Type:</span>
            <span className="font-medium">{campaign.rewardType}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-500">Reward Format:</span>
            <span className="font-medium">{campaign.rewardFormat}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Reward Value:</span>
            <span className="font-medium">{campaign.rewardValue}</span>
          </div>
        </div>
      </div>

      <div className="mt-4 border rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-2">Message Preview</h2>
        <p className="text-gray-700 text-sm">{campaign.message}</p>
      </div>

      <div className="flex justify-between mt-4">
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg">Back</button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">Launch</button>
      </div>
    </div>
  );
};

export default Page4;
