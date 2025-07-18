import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

const IntroOutroPreview = () => {
  const { intro, outro, introUrl, outroUrl } = useSelector(
    (state: RootState) => state.introOutro
  );

  const isVideo = (file: File | null) => file?.type.startsWith("video");
  const isImage = (file: File | null) => file?.type.startsWith("image");

  return (
    <div className="flex justify-center gap-8 mt-8 flex-wrap">
      {/* Intro */}
      {intro && introUrl && (
        <div className="flex flex-col items-center">
          <div className="w-64 h-40 bg-black rounded overflow-hidden shadow">
            {isVideo(intro) ? (
              <video
                src={introUrl}
                controls
                className="w-full h-full object-cover"
              />
            ) : isImage(intro) ? (
              <img
                src={introUrl}
                alt="Intro"
                className="w-full h-full object-contain"
              />
            ) : null}
          </div>
        </div>
      )}

      {/* Outro */}
      {outro && outroUrl && (
        <div className="flex flex-col items-center">
          <div className="w-64 h-40 bg-black rounded overflow-hidden shadow">
            {isVideo(outro) ? (
              <video
                src={outroUrl}
                controls
                className="w-full h-full object-cover"
              />
            ) : isImage(outro) ? (
              <img
                src={outroUrl}
                alt="Outro"
                className="w-full h-full object-contain"
              />
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};

export default IntroOutroPreview;
