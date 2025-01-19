type VideoDisplayerProps = {
  videoId: string
}

export default function VideoDisplayer({ videoId }: VideoDisplayerProps) {
  return (
    <div>
      <div className="relative">
        <div className="-mb-3 mt-4">
          <div
            className="relative overflow-hidden"
            style={{ marginRight: '0px' }}
          >
            <div className="relative overflow-auto rounded-xl p-8">
              <iframe
                className="aspect-video w-full rounded-lg shadow-lg"
                src={`https://www.youtube.com/embed/${videoId}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
