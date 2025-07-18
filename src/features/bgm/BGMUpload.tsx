import { useDispatch } from "react-redux";
import { setBGM } from "../../store/bgmSlice";
import { MdAudiotrack } from "react-icons/md";

const BGMUpload = () => {
  const dispatch = useDispatch();

  const handleAudioUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target?.files?.[0];
    if (file) dispatch(setBGM(file));
  };

  return (
    <div className="text-center">
      <label
        htmlFor="bgm-upload"
        className="inline-block  hover:bg-cyan-900 hover:text-slate-200 hover:scale-x-110 duration-150 transition-all shadow-[1px_1px_10px] shadow-cyan-400 text-slate-900 px-5 py-2 rounded cursor-pointer"
      >
        <div className="flex items-center justify-center gap-2">
          <MdAudiotrack /> Upload Background Music
        </div>
      </label>

      <input
        id="bgm-upload"
        type="file"
        accept="audio/*"
        onChange={handleAudioUpload}
        className="hidden"
      />
    </div>
  );
};

export default BGMUpload;
