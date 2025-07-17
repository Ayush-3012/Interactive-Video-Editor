import { useDispatch } from "react-redux";
import { setBGM } from "../../store/bgmSlice";

const BGMUpload = () => {
  const dispatch = useDispatch();

  const handleAudioUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target?.files?.[0];
    if (file) dispatch(setBGM(file));
  };

  return (
    <>
      <div className="text-center mt-6">
        <label className="block font-medium mb-1">
          Upload Background Music
        </label>
        <input type="file" accept="audio/*" onChange={handleAudioUpload} />
      </div>
    </>
  );
};

export default BGMUpload;
