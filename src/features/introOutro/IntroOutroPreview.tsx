import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

const IntroOutroPreview = () => {
  const { intro, outro, introUrl, outroUrl } = useSelector(
    (state: RootState) => state.introOutro
  );

  const isVideo = (file: File | null) => {
    return file?.type.startsWith("video");
  };

  const isImage = (file: File | null) => {
    return file?.type.startsWith("image");
  };

  return (
    <div className="flex justify-center gap-8 mt-4">
      {/* Intro */}
      {intro && introUrl && (
        <div>
          {isVideo(intro) ? (
            <video src={introUrl} controls className="w-64 rounded shadow" />
          ) : isImage(intro) ? (
            <img src={introUrl} alt="Intro" className="w-64 rounded shadow" />
          ) : null}
        </div>
      )}

      {/* Outro */}
      {outro && outroUrl && (
        <div>
          {isVideo(outro) ? (
            <video src={outroUrl} controls className="w-64 rounded shadow" />
          ) : isImage(outro) ? (
            <img src={outroUrl} alt="Outro" className="w-64 rounded shadow" />
          ) : null}
        </div>
      )}
    </div>
  );
};

export default IntroOutroPreview;
