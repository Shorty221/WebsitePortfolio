//Imports
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./67.css";
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

//Export Default App
export default function App() {
  //For Dark and Light Mode
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDark = () => setDarkMode(!darkMode);
  const showAlert = () =>
    alert(`Never gonna give you up
Never gonna let you down
Never gonna run around and desert you
Never gonna make you cry
Never gonna say goodbye
Never gonna tell a lie and hurt you`);

  const reloadSite = () => window.location.reload();

  return (
    <>
      {/*Render Header, Navbar, Aside box, DetailsBox, ArticleBox*/}
      <Header />
      <Navbar />

      {/*Routes (FigureBox, ArticleBox, DetailsBox, and AsideBox) */}
      <Routes>
        <Route
          path="/"
          element={
            <main className="container my-4">
              <div className="row">
                <FigureBox />
                <div className="col-md-8">
                  <SectionBox />
                  <ArticleBox />
                </div>
                <div className="col-md-4">
                  <AsideBox />
                </div>

                <DetailsBox />
              </div>
              <p>
                {/*This will direct you to hacked Cia codes don't click */}
                DON'T CLICK THIS{" "}
                <a
                  href="https://streamable.com/lf027o"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="cool link"
                >
                  LINK
                </a>
                {""}Don't be mad at me when you regret it.
              </p>

              {/*Buttons for dark mode, Reload Website and Show Alert */}
              <button className="btn btn-primary" onClick={toggleDark}>
                {darkMode ? "Turn Light Mode" : "Turn Dark Mode"}
              </button>
              <button className="btn btn-primary" onClick={showAlert}>
                Show Alert
              </button>

              <button className="btn btn-primary" onClick={reloadSite}>
                Reload website
              </button>
            </main>
          }
        />
      </Routes>

      <Footer />
    </>
  );
}
