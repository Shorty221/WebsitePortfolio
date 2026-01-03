import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom"; // ✅ make sure to import these

import "./67.css";
import Video from "./pages/video";
import {
  Header,
  Navbar,
  Footer,
  SectionBox,
  ArticleBox,
  AsideBox,
  FigureBox,
  DetailsBox,
} from "./components";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [boxText, setBoxText] = useState("This is the original text.");

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDark = () => setDarkMode(!darkMode);
  const showAlert = () => alert("Button clicked!");
  const changeText = () => setBoxText("The text has been changed!");
  const reloadSite = () => window.location.reload();

  return (
    <>
      <Header />
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <main>
              <SectionBox />
              <ArticleBox />
              <AsideBox />
              <FigureBox />
              <DetailsBox />

              <p>
                DON'T CLICK THIS{" "}
                <a
                  href="https://youtu.be/E9de-cmycx8?si=C2MkrpHpfO2KfrlN"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="cool link"
                >
                  LINK
                </a>
                .
              </p>

              <button onClick={toggleDark}>
                {darkMode ? "Turn Light Mode" : "Turn Dark Mode"}
              </button>
              <button onClick={showAlert}>Show Alert</button>
              <button onClick={changeText}>Change Text</button>
              <button onClick={reloadSite}>Reload website</button>
            </main>
          }
        />

        <Route
          path="/about"
          element={
            <main>
              <h2>About Page</h2>
              <p>This page is handled by react-router-dom.</p>
            </main>
          }
        />

        <Route path="/video" element={<Video />} />
      </Routes>

      <Footer />
    </>
  );
}
