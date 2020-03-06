import React from "react";
import Form from "./components/Form";

function App() {
  return (
    <div>
      {/* <video
        playsInline
        autoPlay
        muted
        loop
        poster="./styles/img/background.jpg"
        id="bgvid"
      >
        <source src="./styles/video/Countdown.webm" type="video/webm" />
        <source src="./styles/video/Countdown.mp4" type="video/mp4" />
      </video> */}
      <Form converter="arabic" />
    </div>
  );
}

export default App;
