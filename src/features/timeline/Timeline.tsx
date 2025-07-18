import type { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const Timeline = () => {
  const videoUrl = useSelector((state: RootState) => state.video.url);
  const bgmUrl = useSelector((state: RootState) => state.bgm.url);

  if (!videoUrl) return null;

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 space-y-4">
      <div className="text-center text-lg font-semibold text-gray-700">
        Timeline
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative h-6 bg-gray-300 rounded overflow-hidden shadow"
      >
        <div
          className="absolute left-0 h-full bg-green-400"
          style={{ width: "10%" }}
        />
        <div
          className="absolute left-[10%] h-full bg-blue-500"
          style={{ width: "80%" }}
        />
        <div
          className="absolute right-0 h-full bg-red-400"
          style={{ width: "10%" }}
        />
      </motion.div>

      <div className="flex justify-between text-xs text-gray-600 px-2">
        <span className="text-green-600">Intro</span>
        <span className="text-blue-600">Main</span>
        <span className="text-red-600">Outro</span>
      </div>

      {bgmUrl && (
        <>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
            className="origin-left h-4 bg-purple-300 w-full rounded-full shadow-inner"
          />
          <div className="text-xs text-center text-purple-600">
            Background Music Timeline
          </div>
        </>
      )}
    </div>
  );
};

export default Timeline;
