
//  src/components/DetailsBox.jsx

export default function DetailsBox() {
  return (
    <details className="highlight-box">
      <summary>Click to expand details</summary>
      <p>This content is inside a details element.</p>
      <p>
        You can also <mark>highlight text</mark> using the mark element.
      </p>
    </details>
  );
}