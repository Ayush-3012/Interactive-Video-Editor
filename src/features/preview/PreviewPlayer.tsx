import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import toast from "react-hot-toast";

const PreviewPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [showPreviewBox, setShowPreviewBox] = useState(false);

  const { intro, outro, introUrl, outroUrl, introDuration, outroDuration } =
    useSelector((state: RootState) => state.introOutro);
  const videoUrl = useSelector((state: RootState) => state.video.url);
  const bgmUrl = useSelector((state: RootState) => state.bgm.url);

  const handlePreview = async () => {
    setShowPreviewBox(true);
    toast.success(
      "Click Again to show the preview, But make sure video is uploaded"
    );

    const previewBox = document.getElementById("preview-box");
    if (!previewBox) return;

    previewBox.innerHTML = "";
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      await audioRef.current.play().catch(() => {});
    }

    // ▶️ Intro
    if (intro && introUrl) {
      if (intro.type.startsWith("video")) {
        const introVideo = document.createElement("video");
        introVideo.src = introUrl;
        introVideo.muted = true;
        introVideo.setAttribute("muted", "true");
        introVideo.setAttribute("playsInline", "true");
        introVideo.controls = false;
        introVideo.style.width = "100%";

        previewBox.appendChild(introVideo);

        await new Promise<void>((resolve) => {
          introVideo.onloadeddata = () => {
            introVideo.play().catch(() => {});
          };
          introVideo.onended = () => {
            resolve();
          };
        });

        previewBox.innerHTML = "";
      } else if (intro.type.startsWith("image")) {
        const introImage = document.createElement("img");
        introImage.src = introUrl;
        introImage.style.width = "100%";
        introImage.style.objectFit = "contain";

        previewBox.appendChild(introImage);

        await new Promise((resolve) =>
          setTimeout(resolve, introDuration * 1000)
        );
        previewBox.innerHTML = "";
      }
    }

    // ▶️ Main
    if (videoRef.current) {
      const mainVideo = videoRef.current;
      mainVideo.controls = true;
      mainVideo.style.display = "block";
      mainVideo.style.width = "100%";
      mainVideo.style.border = "2px solid #3b82f6";
      mainVideo.play();

      previewBox.appendChild(mainVideo);
      mainVideo.currentTime = 0;

      await new Promise<void>((resolve) => {
        mainVideo.onended = () => resolve();
        mainVideo.onloadeddata = () => {
          mainVideo.play().catch(() => {});
        };
      });

      previewBox.innerHTML = "";
    }

    // ▶️ Outro
    if (outro && outroUrl) {
      if (outro.type.startsWith("video")) {
        const outroVideo = document.createElement("video");
        outroVideo.src = outroUrl;
        outroVideo.muted = true;
        outroVideo.setAttribute("muted", "true");
        outroVideo.setAttribute("playsInline", "true");
        outroVideo.controls = false;
        outroVideo.style.width = "100%";

        previewBox.appendChild(outroVideo);

        await new Promise<void>((resolve) => {
          outroVideo.onloadeddata = () => {
            outroVideo.play().catch(() => {});
          };
          outroVideo.onended = () => resolve();
        });

        previewBox.innerHTML = "";
      } else if (outro.type.startsWith("image")) {
        const outroImage = document.createElement("img");
        outroImage.src = outroUrl;
        outroImage.style.width = "100%";
        outroImage.style.objectFit = "contain";

        previewBox.appendChild(outroImage);

        await new Promise((resolve) =>
          setTimeout(resolve, outroDuration * 1000)
        );
        previewBox.innerHTML = "";
      }
    }

    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  return (
    <div className="text-center">
      <motion.button
        onClick={handlePreview}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        className="inline-block shadow-[1px_1px_10px] hover:bg-blue-900 shadow-blue-400 text-slate-900 hover:scale-x-110 duration-150 transition-all hover:text-slate-200 px-4 py-2 rounded cursor-pointer"
      >
        <div className="flex items-center justify-center gap-2">
          <FaPlay /> Preview Full Sequence
        </div>
      </motion.button>

      {showPreviewBox && (
        <motion.div
          id="preview-box"
          className="mt-6 w-full max-w-2xl mx-auto aspect-video bg-black rounded shadow overflow-hidden"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, type: "spring", bounce: 0.6 }}
        />
      )}

      {bgmUrl && <audio ref={audioRef} src={bgmUrl} />}

      {videoUrl && (
        <video
          ref={videoRef}
          src={videoUrl}
          style={{ display: "none" }}
          controls
        />
      )}
    </div>
  );
};

export default PreviewPlayer;
