import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

const VideoPlayer = () => {
  const videoUrl = useSelector((state: RootState) => state.video.url);
  const bgmUrl = useSelector((state: RootState) => state.bgm.url);

  if (!videoUrl) return null;

  return (
    <>
      <div className="p-4">
        <video
          src={videoUrl}
          controls
          className="w-full max-w-2xl mx-auto rounded shadow"
        />
        {bgmUrl && <audio src={bgmUrl} controls className="mt-4" />}
      </div>
    </>
  );
};

export default VideoPlayer;
