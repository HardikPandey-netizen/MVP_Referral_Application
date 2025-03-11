import { Pause,Play,Pencil, Trash, ArrowRight, Bot } from "lucide-react";

const CampCard = (props) => {
  const Icon = props.active ? Pause : Play;
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 w-80">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-lg font-bold">{props.title}</h2>
          <p className="text-gray-500 text-sm">{props.dateOne} - {props.dateEnd}</p>
        </div>
        <span className={props.active ? "bg-green-100  text-green-600 text-xs font-medium px-2 py-1 rounded-lg":"bg-green-100  text-gray-600 text-xs font-medium px-2 py-1 rounded-lg"}>
          {props.active ? "Active" : "Inactive"}
        </span>
      </div>

      {/* Metrics */}
      <div className="mt-4 flex justify-between text-center">
        <div>
          <p className="text-gray-500 text-sm">Referrals</p>
          <p className="text-xl font-semibold">{props.referrals}</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Conversion</p>
          <p className="text-xl font-semibold">{props.conversion}%</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">ROI</p>
          <p className="text-xl font-semibold">{props.ROI}%</p>
        </div>
      </div>

      {/* AI Suggestion */}
      <div className="mt-4 bg-blue-50 p-3 rounded-lg text-gray-700 text-sm flex gap-2 items-start">
        <Bot className="w-4 h-4 text-blue-500 mt-0.5" />
        <p>
          <span className="font-medium">AI</span> Increase reward by 10% to boost conversion rates
          during peak season
        </p>
      </div>

      {/* Actions */}
      <div className="mt-4 flex justify-between text-gray-500">
      <button className="p-2 hover:text-gray-700">
          <Icon className="w-5 h-5" />
        </button>
        <button className="p-2 hover:text-gray-700">
          <Pencil className="w-5 h-5" />
        </button>
        <button className="p-2 hover:text-red-500">
          <Trash className="w-5 h-5" />
        </button>
        <button className="p-2 hover:text-gray-700">
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default CampCard;
