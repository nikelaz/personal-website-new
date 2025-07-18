import VideosView from "@/components/videos-view";
import videos from "@/data/videos";

type VideoPageProps = Readonly<{
  params: Promise<{
    number: string;
  }>,
}>;

const VideoPage = async (props: VideoPageProps) => { 
  const params = await props.params;
  const number = params.number ? parseInt(params.number, 10) : 1;

  return (
    <VideosView
      videos={videos}
      page={number}
    />
  );
};

export const generateStaticParams = async () => {
  const totalVideos = videos.length;
  const perPage = 12;
  const totalPages = Math.ceil(totalVideos / perPage);
  
  return Array.from({ length: totalPages }, (_, index) => ({
    number: (index + 1).toString(),
  })).slice(1);
};

export default VideoPage;
