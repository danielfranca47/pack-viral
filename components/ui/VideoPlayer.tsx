import Video from "next-video";

const testUrl = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4";
const testThumbnail = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg";

// TODO: Mais tarde implementar um poster muito mais melhor
// TODO: Estudar mais sobre a API em https://next-video.dev/docs#main

const VideoPlayer = () => {
   return <Video width={900} src={testUrl} className="**:mx-auto aspect-auto! *:border-2 *:w-[80%]! md:*:w-150! xl:*:w-225!" />;
};
export default VideoPlayer;
