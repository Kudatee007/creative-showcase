import { useState, useEffect, lazy, Suspense, useMemo } from "react";
import AnimatedCursor from "./components/AnimatedCursor";
import Footer from "./components/Footer";
import Header from "./components/Header";
const HomePage = lazy(() => import("./page/HomePage"));

function App() {
  const [cursorMode, setCursorMode] = useState<"idle" | "view">("idle");
  const [cursorText, setCursorText] = useState<string>("");

  // Global reveal state
  const [textShown, setTextShown] = useState(false); // start letter/clip animation
  const [textMovedUp, setTextMovedUp] = useState(false); // slide hero up
  const [pageReady, setPageReady] = useState(false); // reveal whole page

  useEffect(() => {
    const timeouts = [
      setTimeout(() => setTextShown(true), 100),
      setTimeout(() => setTextMovedUp(true), 2500),
      setTimeout(() => setPageReady(true), 3000),
    ];
    return () => timeouts.forEach(clearTimeout);
  }, []);

  const cursorHandlers = useMemo(
    () => ({
      setCursorMode,
      setCursorText,
    }),
    []
  );

  return (
    <>
      <AnimatedCursor mode={cursorMode} text={cursorText} />
      <Header
        textShown={textShown}
        textMovedUp={textMovedUp}
        pageReady={pageReady}
      />
        {pageReady && (
        <Suspense fallback={<div className="text-center p-10">Loading content...</div>}>
          <HomePage {...cursorHandlers} />
          <Footer />
        </Suspense>
      )}
    </>
  );
}

export default App;
