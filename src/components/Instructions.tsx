import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWindowClose } from "react-icons/fa";

const Instructions = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <>
      {!visible && (
        <button
          onClick={() => setVisible(true)}
          className="fixed bottom-6 cursor-pointer right-6 text-slate-900 px-4 py-2 rounded-full shadow-[1px_1px_10px] hover:scale-x-110 duration-200 transition-all z-50 shadow-blue-950"
        >
          Show Instructions
        </button>
      )}

      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 w-80 max-w-full bg-white rounded-xl shadow-xl border p-4 z-50"
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold text-gray-800">
                📋 Instructions
              </h2>
              <button
                onClick={() => setVisible(false)}
                className="cursor-pointer hover:-translate-y-1 duration-200 transition-all text-red-500 hover:text-red-700"
              >
                <FaWindowClose className="text-2xl" />
              </button>
            </div>

            <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
              <li>Upload your main video file (MP4).</li>
              <li>Optionally upload background music (MP3).</li>
              <li>Upload an intro & outro (image/video).</li>
              <li>Set intro/outro durations (for images).</li>
              <li>Click Preview to watch combined output.</li>
              <li>Review the visual timeline below.</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Instructions;
