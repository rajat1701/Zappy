import { motion } from "framer-motion";
import { Crown } from "lucide-react";

export default function Leaderboard({ leaderboard }) {
  const getRankColor = (rank) => {
    switch (rank) {
      case 0:
        return "bg-gradient-to-r from-amber-400 to-yellow-500";
      case 1:
        return "bg-gradient-to-r from-slate-300 to-gray-400";
      case 2:
        return "bg-gradient-to-r from-amber-600 to-orange-700";
      default:
        return "bg-white/10";
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-center mb-4 text-white">Leaderboard</h2>
      <ul className="space-y-4">
        {leaderboard.map((player, index) => (
          <motion.li
            key={player.name}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`flex items-center justify-between p-4 rounded-lg shadow-lg ${getRankColor(index)}`}
          >
            <div className="flex items-center">
              <span className="text-xl font-bold w-8">{index + 1}</span>
              <span className="text-lg font-semibold">{player.name}</span>
              {index < 3 && <Crown className="ml-2" size={20} />}
            </div>
            <span className="text-xl font-bold">{player.score}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
