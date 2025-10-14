import { useState, useEffect } from "react";
import AnimatedCursor from "./components/AnimatedCursor";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./page/HomePage";

function App() {
  const [cursorMode, setCursorMode] = useState<"idle" | "view">("idle");
  const [cursorText, setCursorText] = useState<string>("");

  // Global reveal state 
  const [textShown, setTextShown] = useState(false); // start letter/clip animation
  const [textMovedUp, setTextMovedUp] = useState(false); // slide hero up
  const [pageReady, setPageReady] = useState(false); // reveal whole page

  useEffect(() => {
    const t1 = setTimeout(() => setTextShown(true), 100);
    const t2 = setTimeout(() => setTextMovedUp(true), 2500);
    const t3 = setTimeout(() => setPageReady(true), 2700);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <>
      <AnimatedCursor mode={cursorMode} text={cursorText} />
      <Header
        textShown={textShown}
        textMovedUp={textMovedUp}
        pageReady={pageReady}
      />
      {pageReady && (
        <>
          <HomePage
            setCursorMode={setCursorMode}
            setCursorText={setCursorText}
          />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
