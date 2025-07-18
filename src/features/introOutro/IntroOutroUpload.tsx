import { useDispatch } from "react-redux";
import { setIntro, setOutro } from "../../store/introOutroSlice";

const IntroOutroUpload = () => {
  const dispatch = useDispatch();

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "intro" | "outro"
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      type === "intro" ? dispatch(setIntro(file)) : dispatch(setOutro(file));
    }
  };

  return (
    <div className="flex justify-center gap-6 mt-6 flex-wrap">
      <div className="text-center">
        <label htmlFor="intro-upload" className="block mb-2 font-medium">
          Upload Intro
        </label>
        <label
          htmlFor="intro-upload"
          className="inline-block shadow-[1px_1px_10px] hover:bg-green-900 shadow-green-400 text-slate-900 hover:scale-x-110 duration-150 transition-all hover:text-slate-200 px-4 py-2 rounded cursor-pointer"
        >
          Choose File
        </label>
        <input
          id="intro-upload"
          type="file"
          accept="video/*,image/*"
          onChange={(e) => handleFileChange(e, "intro")}
          className="hidden"
        />
      </div>

      {/* Outro Upload */}
      <div className="text-center">
        <label htmlFor="outro-upload" className="block mb-2 font-medium">
          Upload Outro
        </label>
        <label
          htmlFor="outro-upload"
          className="inline-block shadow-[1px_1px_10px] hover:bg-purple-900 shadow-purple-400 text-slate-900 hover:scale-x-110 duration-150 transition-all hover:text-slate-200 px-4 py-2 rounded cursor-pointer"
        >
          Choose File
        </label>
        <input
          id="outro-upload"
          type="file"
          accept="video/*,image/*"
          onChange={(e) => handleFileChange(e, "outro")}
          className="hidden"
        />
      </div>
    </div>
  );
};

export default IntroOutroUpload;
