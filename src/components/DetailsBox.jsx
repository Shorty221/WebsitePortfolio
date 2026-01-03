//  src/components/DetailsBox.jsx

export default function DetailsBox() {
  return (
    <details className="highlight-box">
      <summary>Click to expand details</summary>
      <figure>
        <img
          src="https://variety.com/wp-content/uploads/2021/07/Rick-Astley-Never-Gonna-Give-You-Up.png?w=1000&h=667&crop=1&resize=1000%2C667"
          alt="Placeholder image"
        />
        <figcaption>Never Gonna Give You Up.</figcaption>
      </figure>
    </details>
  );
}
