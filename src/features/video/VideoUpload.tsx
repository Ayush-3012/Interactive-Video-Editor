import { useDispatch } from "react-redux";
import { setVideoFile } from "../../store/videoSlice.ts";

const VideoUpload = () => {
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target?.files?.[0];
    if (file) dispatch(setVideoFile(file));
  };

  return (
    <>
      <div className="p-4">
        <input type="file" accept="video/mp4" onChange={handleChange} />
      </div>
    </>
  );
};

export default VideoUpload;
