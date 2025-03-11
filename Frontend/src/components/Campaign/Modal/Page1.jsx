import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate, useParams } from "react-router-dom";

const Page1 = () => {
  const [campaignName, setCampaignName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [status, setStatus] = useState(true);

  const navigate = useNavigate();
  const { id } = useParams(); // Get campaign ID from the URL
  const campaignId = parseInt(id) || 1;

  return (
    <div className="w-full max-w-lg mx-auto p-4 bg-white rounded shadow">
      <label className="block mb-2 font-medium">Campaign Name *</label>
      <input
        type="text"
        className="w-full p-2 border rounded"
        placeholder="e.g., Summer Referral Special"
        value={campaignName}
        onChange={(e) => setCampaignName(e.target.value)}
      />

      <label className="block mt-4 mb-2 font-medium">Description *</label>
      <textarea
        className="w-full p-2 border rounded"
        placeholder="Describe your campaign and its goals..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      <label className="block mt-4 mb-2 font-medium">Campaign Duration <span className="text-red-500">*</span></label>
      <div className="flex gap-4">
        <div>
          <span className="block text-sm font-normal">Start Date</span>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <span className="block text-sm font-normal">End Date</span>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>

      <label className="block mt-4 mb-2 font-medium">Campaign Status *</label>
      <div className="flex items-center">
        <input
          type="checkbox"
          className="mr-2"
          checked={status}
          onChange={() => setStatus(!status)}
        />
        <span>Enable to activate the campaign immediately</span>
      </div>

      <div className="flex justify-between mt-6">
        <button onClick={() => navigate(`/campaigns/${campaignId - 1}`)} disabled={campaignId <= 1} className="px-4 py-2 border rounded bg-gray-200">Back</button>
        <button onClick={() => navigate(`/campaigns/${campaignId + 1}`)} className="px-4 py-2 border rounded bg-blue-500 text-white">
          Next
        </button>
      </div>
    </div>
  );
};

export default Page1;
