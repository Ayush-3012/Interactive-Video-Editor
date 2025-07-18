import { useDispatch, useSelector } from "react-redux";
import {
  setIntroDuration,
  setOutroDuration,
} from "../../store/introOutroSlice";
import type { RootState } from "../../store/store";

const IntroOutroDurationSliders = () => {
  const dispatch = useDispatch();
  const { introDuration, outroDuration, intro, outro } = useSelector(
    (state: RootState) => state.introOutro
  );

  return (
    <div className="flex flex-wrap gap-8 mt-6 justify-center">
      {intro && (
        <div className="text-center">
          <label className="block font-medium mb-1 text-sm text-gray-700">
            Intro Duration: {introDuration}s
          </label>
          <input
            type="range"
            min={1}
            max={10}
            value={introDuration}
            onChange={(e) => dispatch(setIntroDuration(Number(e.target.value)))}
            className="w-48 accent-green-600"
          />
        </div>
      )}

      {outro && (
        <div className="text-center">
          <label className="block font-medium mb-1 text-sm text-gray-700">
            Outro Duration: {outroDuration}s
          </label>
          <input
            type="range"
            min={1}
            max={10}
            value={outroDuration}
            onChange={(e) => dispatch(setOutroDuration(Number(e.target.value)))}
            className="w-48 accent-purple-600"
          />
        </div>
      )}
    </div>
  );
};

export default IntroOutroDurationSliders;
