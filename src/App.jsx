import { useState, useEffect } from "react";

function App() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const fullText = "< Hello World />";
  useEffect(() => {
    if (index >= fullText.length) return; 
    const timeout = setTimeout(() => {
      setText((prev) => prev + fullText[index]);
      setIndex((i) => i + 1);
    }, 120);

    return () => clearTimeout(timeout);
  }, [index, fullText]);

  return (
    <>
      <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center min-h-screen">
        <div className="mb-4 text-4xl font-mono font-bold ">
          <span>{text}</span>
          <span>|</span>
        </div>
        <div className="w-[200px] h-0.5 bg-gray-800 rounded overflow-hidden">
          <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar" />
        </div>
      </div>
    </>
  );
}

export default App;
