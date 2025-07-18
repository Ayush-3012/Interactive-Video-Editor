import Instructions from "./components/Instructions";
import BGMUpload from "./features/bgm/BGMUpload";
import IntroOutroDurationSliders from "./features/introOutro/IntroOutroDurationSliders";
import IntroOutroPreview from "./features/introOutro/IntroOutroPreview";
import IntroOutroUpload from "./features/introOutro/IntroOutroUpload";
import PreviewPlayer from "./features/preview/PreviewPlayer";
import Timeline from "./features/timeline/Timeline";
import VideoPlayer from "./features/video/VideoPlayer";
import VideoUpload from "./features/video/VideoUpload";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-200 m-4 rounded-xl p-6 font-mono space-y-10">
      <h1 className="text-3xl font-bold underline text-center">
        🎞️ Interactive Video Editor
      </h1>

      <Instructions />
      {/* Preview & Timeline */}
      <div className="rounded-lg p-4 shadow bg-slate-50">
        <PreviewPlayer />
        <Timeline />
      </div>

      {/* Video & Audio Upload */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-6">
        <div className=" p-4 bg-slate-50 rounded shadow w-full md:w-1/2">
          <VideoUpload />
        </div>
        <div className=" p-4 bg-slate-50 rounded shadow w-full md:w-1/2">
          <BGMUpload />
        </div>
      </div>

      <VideoPlayer />

      {/* Intro / Outro */}
      <div className="space-y-6 p-4 bg-slate-50 rounded shadow">
        <IntroOutroUpload />
        <IntroOutroPreview />
        <IntroOutroDurationSliders />
      </div>
    </div>
  );
};

export default App;
