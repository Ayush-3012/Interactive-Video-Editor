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
    <div className="min-h-screen bg-gray-100 p-6 font-mono space-y-10">
      <h1 className="text-3xl font-bold text-center">
        🎞️ Interactive Video Editor
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-start gap-6">
        <VideoUpload />
        <BGMUpload />
      </div>

      <VideoPlayer />

      <div className="space-y-6">
        <IntroOutroUpload />
        <IntroOutroPreview />
        <IntroOutroDurationSliders />
      </div>

      <div className="space-y-8">
        <PreviewPlayer />
        <Timeline />
      </div>
    </div>
  );
};

export default App;
