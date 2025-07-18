import { useDispatch } from "react-redux";
import { setVideoFile } from "../../store/videoSlice.ts";
import { FaVideo } from "react-icons/fa";

const VideoUpload = () => {
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target?.files?.[0];
    if (file) dispatch(setVideoFile(file));
  };

  return (
    <div className="text-center mt-8">
      <label htmlFor="bgm-upload" className="block mb-2 font-medium text-lg">
        Upload Main Video
      </label>
      <label htmlFor="video-upload">
        <label
          htmlFor="video-upload"
          className="inline-block shadow-[1px_1px_10px] shadow-rose-400 hover:bg-rose-900 text-slate-900 hover:scale-x-110 duration-150 transition-all hover:text-slate-200 px-5 py-2 rounded cursor-pointer"
        >
          <div className="flex items-center justify-center gap-2">
            <FaVideo /> Upload Main Video
          </div>
        </label>
      </label>

      <input
        id="video-upload"
        type="file"
        accept="video/mp4"
        onChange={handleChange}
        className="hidden"
      />
    </div>
  );
};

export default VideoUpload;
