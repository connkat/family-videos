import VideoPlayer from './VideoPlayer.jsx';
function VideoCard() {
  return (
    <div className="video-card">
        <VideoPlayer embedId=""/>
        <p>year: </p>
        <p>month: </p>
        <p>holiday: </p>
        <p>family member name: </p>
        <p>others: </p>
        <p>video link: </p>
    </div>
  );
}

export default VideoCard;
