import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

const VideoPlayer = () => {
  const videoUrl = useSelector((state: RootState) => state.video.url);
  const bgmUrl = useSelector((state: RootState) => state.bgm.url);

  if (!videoUrl) return null;

  return (
    <div className="p-4 text-center">
      <h2 className="text-xl font-semibold mb-2">Main Video Preview</h2>

      <video
        src={videoUrl}
        controls
        className="w-full max-w-xl mx-auto rounded shadow-lg shadow-black"
      />

      {bgmUrl && (
        <audio src={bgmUrl} controls className="mt-4 mx-auto block max-w-xl shadow-black" />
      )}
    </div>
  );
};

export default VideoPlayer;
