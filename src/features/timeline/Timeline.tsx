import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { motion } from "framer-motion";

const Timeline = () => {
  const videoUrl = useSelector((state: RootState) => state.video.url);
  const bgmUrl = useSelector((state: RootState) => state.bgm.url);
  const { introDuration, outroDuration } = useSelector(
    (state: RootState) => state.introOutro
  );
  const videoDuration = useSelector((state: RootState) => state.video.duration);

  if (!videoUrl) return null;

  const totalDuration = introDuration + videoDuration + outroDuration;
  const introWidth = (introDuration / totalDuration) * 100;
  const mainWidth = (videoDuration / totalDuration) * 100;
  const outroWidth = (outroDuration / totalDuration) * 100;

  console.log(introWidth);
  if (videoDuration === 0) return null;

  return (
    <div className="w-full max-w-4xl mx-auto mt-10 space-y-6">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center text-2xl font-semibold text-gray-800"
      >
        Timeline Overview
      </motion.div>

      {/* Video Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative h-6 bg-gray-200 rounded overflow-hidden shadow"
      >
        <div
          className={`absolute h-full bg-green-400 `}
          style={{
            left: `0%`,
            width: `${introWidth}%`,
          }}
        />
        <div
          className={`absolute right-0 h-full bg-blue-500`}
          style={{ left: `${introWidth}%`, width: `${mainWidth}%` }}
        />
        <div
          className={`absolute right-0 h-full bg-red-400 `}
          style={{
            left: `${introWidth + mainWidth}%`,
              width: `${outroWidth}%`,
          }}
        />
      </motion.div>

      <div className="text-xs text-center text-gray-600 space-x-2">
        <span className="text-green-600">Intro: {introDuration}s</span>
        <span className="text-blue-600">Main: {videoDuration.toFixed(1)}s</span>
        <span className="text-red-600">Outro: {outroDuration}s</span>
        <span className="text-gray-800 font-medium">
          | Total: {totalDuration.toFixed(1)}s
        </span>
      </div>

      {/* BGM Timeline */}
      {bgmUrl && (
        <>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
            className="origin-left h-4 bg-purple-400 w-full rounded-full shadow-inner"
          />
          <div className="text-xs text-center text-purple-700 mt-1">
            Background Music
          </div>
        </>
      )}
    </div>
  );
};

export default Timeline;
