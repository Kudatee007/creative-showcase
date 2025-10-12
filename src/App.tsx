import { useState } from "react";
import AnimatedCursor from "./components/AnimatedCursor";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./page/HomePage";

function App() {
  const [cursorMode, setCursorMode] = useState<"idle" | "view">("idle");
  const [cursorText, setCursorText] = useState<string>("");
  

  return (
    <>
     <AnimatedCursor mode={cursorMode} text={cursorText} />
      <Header />
      <HomePage setCursorMode={setCursorMode} setCursorText={setCursorText} />
      <Footer />
    </>
  );
}

export default App;
