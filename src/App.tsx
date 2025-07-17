import BGMUpload from "./features/bgm/BGMUpload";
import IntroOutroPreview from "./features/introOutro/IntroOutroPreview";
import IntroOutroUpload from "./features/introOutro/IntroOutroUpload";
import Timeline from "./features/timeline/Timeline";
import VideoPlayer from "./features/video/VideoPlayer";
import VideoUpload from "./features/video/VideoUpload";

const App = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-4 text-center">Video Editor</h1>
        <VideoUpload />
        <VideoPlayer />
        <IntroOutroUpload />
        <IntroOutroPreview />
        <BGMUpload />
        <Timeline />
      </div>
    </>
  );
};

export default App;
