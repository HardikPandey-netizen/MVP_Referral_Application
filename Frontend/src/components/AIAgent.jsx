import { useState } from "react";
import { X, MessageSquare, Send } from "lucide-react";

export default function AIAgent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5">
      {/* Floating Chat Icon */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      )}

      {/* Chatbox */}
      {isOpen && (
        <div className="w-80 bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="flex justify-between items-center p-3 bg-gray-100">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-purple-500 text-white flex items-center justify-center rounded-md">
                <span className="text-sm">💼</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">Referral AI Assistant</p>
                <p className="text-xs text-gray-500">Campaigns Support</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)}>
              <X className="w-5 h-5 text-gray-500 hover:text-gray-700" />
            </button>
          </div>

          {/* Message */}
          <div className="p-3 text-sm text-gray-800 bg-purple-100 rounded-md mx-3 mt-2">
            I see you're managing campaigns. Need help optimizing your reward strategy?
          </div>

          {/* Options */}
          <div className="p-3 space-y-2">
            <button className="w-full py-2 px-3 bg-gray-100 text-gray-900 rounded-md hover:bg-gray-200 text-sm text-left">
              Create a new campaign
            </button>
            <div className="flex space-x-2">
              <button className="flex-1 py-2 px-3 bg-gray-100 text-gray-900 rounded-md hover:bg-gray-200 text-sm">
                Optimize reward strategy
              </button>
              <button className="flex-1 py-2 px-3 bg-gray-100 text-gray-900 rounded-md hover:bg-gray-200 text-sm">
                View campaign analytics
              </button>
            </div>
            <button className="w-full py-2 px-3 bg-gray-100 text-gray-900 rounded-md hover:bg-gray-200 text-sm text-left">
              Edit campaign settings
            </button>
          </div>

          {/* Input */}
          <div className="border-t px-3 py-2 flex items-center">
            <input
              type="text"
              placeholder="Ask me anything..."
              className="flex-1 text-sm outline-none border-none p-2"
            />
            <button className="text-blue-600 hover:text-blue-800">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
