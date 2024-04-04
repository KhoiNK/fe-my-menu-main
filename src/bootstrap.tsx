import React from "react";
import { createRoot } from "react-dom/client";
import Main from "./pages";

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <div>Main 1</div>
    </React.StrictMode>
  );
};

const container = document.getElementById("root-main") as HTMLElement;
const root = createRoot(container);
root.render(<App />);