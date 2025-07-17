import type { RootState } from "../../store/store";
import { useSelector } from "react-redux";

const Timeline = () => {
  const videoUrl = useSelector((state: RootState) => state.video.url);
  const bgmUrl = useSelector((state: RootState) => state.bgm.url);

  if (!videoUrl) return null;

  return (
    <>
      <div className="w-full max-w-4xl mx-auto mt-4 space-y-3">
        {/* Video Timeline */}
        <div className="relative h-6 bg-gray-300 rounded overflow-hidden">
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
        </div>
        <div className="text-xs text-center text-gray-600">
          Timeline: Intro | Main | Outro
        </div>

        {/* BGM Placeholder */}
        {bgmUrl && (
          <div className="h-4 bg-purple-300 w-full rounded-full">
            {/* Just a placeholder for waveform */}
          </div>
        )}
        {bgmUrl && (
          <div className="text-xs text-center text-purple-600">
            BGM Waveform
          </div>
        )}
      </div>
    </>
  );
};

export default Timeline;
