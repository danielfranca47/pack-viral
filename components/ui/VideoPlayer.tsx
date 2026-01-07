import Video from "next-video";

const testUrl = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4";
const testThumbnail = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg";

const VideoPlayer = () => {
   return <Video width={900} src={testUrl} className="**:mx-auto aspect-auto!" />;
};
export default VideoPlayer;
