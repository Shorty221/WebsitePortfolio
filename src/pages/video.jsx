export default function Video() {
  return (
    <main>
      <h2>Video Page</h2>

      <figure>
        <video
          width="100%"
          controls
        >
          <source src="/sample-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <figcaption>Sample Video</figcaption>
      </figure>
    </main>
  );
}
