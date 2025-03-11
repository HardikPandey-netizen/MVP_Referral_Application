import React from "react";
import { Info } from "lucide-react";
import { useState } from "react";

const CMessage = (props) => {
  return (
    <div className="bg-white shadow-md font-semibold h-16 w-7xs">{props.message}</div>
  );
};

const Page3 = () => {
  const [selectedMessage, setSelectedMessage] = useState("");
  const camp_message = [
    "Share this exclusive offer with your friends! They'll get 20% off their first purchase, and you'll earn a $25 reward when they complete their transaction.",
    "Invite your friends to try our service! They'll receive a special newcomer discount, and you'll get rewarded when they make their first purchase.",
    "Share the love! Your friends get a special welcome discount, and you'll earn rewards for spreading the word.",
  ];
  return (
     <div className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Campaign Message <span className="text-red-500">*</span>
      </label>
      <div className="space-y-2">
        {camp_message.map((msg, index) => (
          <button
            key={index}
            className={`w-full text-left p-3 border rounded-lg transition ${
              selectedMessage === msg ? "border-blue-500 bg-blue-50" : "border-gray-300 bg-white"
            }`}
            onClick={() => setSelectedMessage(msg)}
          >
            {msg}
          </button>
        ))}
      </div>
      <textarea
        className="w-full mt-3 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
        placeholder="Enter your campaign message..."
        value={selectedMessage}
        onChange={(e) => setSelectedMessage(e.target.value)}
        rows={3}
      />
      <div className="flex justify-between mt-4">
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg">Back</button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">Next</button>
      </div>
    </div>
  );
};

export default Page3;
