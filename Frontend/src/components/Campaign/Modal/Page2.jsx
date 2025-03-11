import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Page2 = () => {
  const [rewardType, setRewardType] = useState("instant");
  const [rewardFormat, setRewardFormat] = useState("discount");
  const [discountValue, setDiscountValue] = useState("");
  const [selectedDiscount, setSelectedDiscount] = useState(null);
  const [notes, setNotes] = useState([]);

  const navigate = useNavigate();
  const { id } = useParams(); // Get campaign ID from the URL
  const campaignId = parseInt(id) || 1;

  const discountOptions = [
    { label: "20% off", description: "Most popular for first-time customers", value: "20" },
    { label: "15% off", description: "Balanced for repeat purchases", value: "15" },
    { label: "25% off", description: "High impact for premium services", value: "25" },
  ];

  const noteOptions = [
    "Valid for first-time customers only",
    "Minimum purchase value of $50 required",
    "Cannot be combined with other offers",
    "Reward will be credited within 24 hours",
  ];

  const toggleNote = (note) => {
    setNotes((prev) =>
      prev.includes(note) ? prev.filter((n) => n !== note) : [...prev, note]
    );
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold mb-4">Reward Setup</h2>

      {/* Reward Type */}
      <label className="block mb-2 font-medium">Reward Type *</label>
      <div className="flex gap-2 mb-4">
        <button
          className={`flex-1 py-2 rounded border transition ${
            rewardType === "instant" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setRewardType("instant")}
        >
          ⚡ Instant Reward
        </button>
        <button
          className={`flex-1 py-2 rounded border transition ${
            rewardType === "conversion" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setRewardType("conversion")}
        >
          ➤ Conversion-based
        </button>
      </div>

      {/* Reward Format */}
      <label className="block mb-2 font-medium">Reward Format *</label>
      <div className="flex gap-2 mb-4">
        <button
          className={`flex-1 py-2 rounded border transition ${
            rewardFormat === "discount" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setRewardFormat("discount")}
        >
          Discount
        </button>
        <button
          className={`flex-1 py-2 rounded border transition ${
            rewardFormat === "cash" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setRewardFormat("cash")}
        >
          Cash Equivalent
        </button>
      </div>

      {/* Discount Value */}
      <label className="block mb-2 font-medium">Discount Value *</label>
      <div className="grid grid-cols-3 gap-2 mb-4">
        {discountOptions.map((option) => (
          <button
            key={option.value}
            className={`p-3 rounded border text-center transition ${
              selectedDiscount === option.value ? "bg-blue-500 text-white" : "bg-gray-100"
            }`}
            onClick={() => {
              setSelectedDiscount(option.value);
              setDiscountValue(option.value);
            }}
          >
            <span className="font-bold">{option.label}</span>
            <p className="text-xs text-gray-500">{option.description}</p>
          </button>
        ))}
      </div>

      {/* Custom Discount Input */}
      <input
        type="text"
        className="w-full p-2 border rounded mb-4"
        placeholder="% e.g., 20"
        value={discountValue}
        onChange={(e) => {
          setSelectedDiscount(null);
          setDiscountValue(e.target.value);
        }}
      />

      {/* Additional Notes */}
      <label className="block mb-2 font-medium">Additional Notes</label>
      <div className="flex flex-wrap gap-2">
        {noteOptions.map((note) => (
          <button
            key={note}
            className={`px-3 py-2 rounded border text-sm transition ${
              notes.includes(note) ? "bg-blue-500 text-white" : "bg-gray-100"
            }`}
            onClick={() => toggleNote(note)}
          >
            {note}
          </button>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <button onClick={() => navigate(`/campaigns/${campaignId - 1}`)} disabled={campaignId <= 1} className="px-4 py-2 border rounded bg-gray-200">Back</button>
        <button onClick={() => navigate(`/campaigns/${campaignId + 1}`)} className="px-4 py-2 border rounded bg-blue-500 text-white">Next</button>
      </div>
    </div>
  );
};

export default Page2;
