import { useState } from "react";
import reactLogo from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="container mx-auto">
        <h1 className="text-6xl text-center font-poppins font-semibold leading-normal mt-4">
          TailwindCSS + ReactJs + Vite Starter Template
        </h1>
      </div>
    </div>
  );
}

export default App;
