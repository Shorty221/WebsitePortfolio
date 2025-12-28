
//  src/components/ArticleBox.jsx

export default function ArticleBox() {
  return (
    <article className="highlight-box">
      <h2>Article Content</h2>
      <p >This is an article. It is independent content.</p>
      <p>
        Published on <time dateTime="2025-02-01">February 1, 2025</time>.
      </p>
    </article>
  );
}