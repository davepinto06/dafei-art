import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

type VideoDisplayerProps = {
  videoId: string
  videoTitle: string
}

export default function VideoDisplayer({
  videoId,
  videoTitle,
}: VideoDisplayerProps) {
  return (
    <div>
      <div className="relative">
        <div className="-mb-3 mt-4">
          <div
            className="relative overflow-hidden"
            style={{ marginRight: '0px' }}
          >
            <div className="relative overflow-auto rounded-xl p-8">
              <LiteYouTubeEmbed id={videoId} title={videoTitle} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
