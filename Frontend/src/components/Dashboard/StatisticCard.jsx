import { User } from "lucide-react";

const StatisticCard = (props) => {
    const Icon = props.symbol || User; // Default to User if no icon is provided
    return (
    <div className="bg-white rounded-2xl shadow-md p-4 w-60 h-36 flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <p className="text-gray-500 text-sm">{props.title}</p>
        <div className="bg-blue-100 p-2 rounded-full">
          <Icon className="text-blue-500 w-5 h-5" />
        </div>
      </div>
      <h2 className="text-3xl font-bold">{props.number}</h2>

      {/* Growth Indicator */}
      <div className={props.increase ? "text-green-500" : "text-red-500"}>
        <span>{props.increase ? "↑" : "↓"} {props.difference}%</span>
        <span className="text-gray-400">vs last month</span>
      </div>
    </div>
  );
};

export default StatisticCard;
