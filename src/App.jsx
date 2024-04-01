/*eslint no-undef: "error"*/

import ReactLogo from "./assets/react.svg";
import ViteLogo from "../public/vite.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  // const [decrease, setDecrease] = useState(count);

  const handleClick = () => {
    setCount(count + 1);
    console.log(count);
  };

  const handleContextMenu = (event) => {
    event.preventDefault();
    setCount(count - 1);
    console.log(count);
    // setDecrease(decrease - 1);
    // console.log(decrease);
  };

  const handleMouseClick = (event) => {
    if (event.button === 0) {
      handleClick();
    } else if (event.button === 2) {
      handleContextMenu();
    }
  };

  // console.log(count);
  // console.log(setCount);

  const urlPrint = import.meta.url;

  useEffect(() => {
    const scriptElements = document.getElementsByTagName("script");
    const currentScript = scriptElements[scriptElements.length - 1];
    const currentScriptSrc = currentScript.src;
    console.log("Đường dẫn của file App.jsx:", currentScriptSrc);
  }, []);

  const handleClickImageVite = () => {
    window.location.href = "https://vitejs.dev/";
  };

  return (
    <>
      <div>
        <img
          src={ViteLogo}
          alt="vite Image"
          className="logo"
          onClick={handleClickImageVite}
        />
        <img src={ReactLogo} alt="react Image" className="logo" />
      </div>
      <div>
        <h1>Vite + React</h1>
      </div>
      <div>
        <button
          className="button"
          onClick={handleClick}
          onContextMenu={handleContextMenu}
        >
          Count is {count}
        </button>
      </div>
      <div>
        <p>Edit {urlPrint} and save to test HMR </p>
      </div>
    </>
  );
}

export default App;
