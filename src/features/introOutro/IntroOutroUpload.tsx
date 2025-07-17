import { useDispatch } from "react-redux";
import { setIntro, setOutro } from "../../store/introOutroSlice";

const IntroOutroUpload = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex gap-4 justify-center mt-6">
        <div>
          <label className="block font-medium">Upload Intro</label>
          <input
            type="file"
            accept="video/*,image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) dispatch(setIntro(file));
            }}
          />
        </div>
        <div>
          <label className="block font-medium">Upload Outro</label>
          <input
            type="file"
            accept="video/*,image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) dispatch(setOutro(file));
            }}
          />
        </div>
      </div>
    </>
  );
};

export default IntroOutroUpload;
