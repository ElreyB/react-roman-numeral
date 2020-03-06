import React from "react";
import styled from "styled-components";
import Form from "./components/Form";
import panelBackground from "./styles/images/panel_background.png";

const Main = styled.main`
  background-color: white;
  min-height: 246px;
  width: 475px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Panel = styled.div`
  background-image: url(${panelBackground});
  padding: 15px;
  font-weight: bold;
`;

const Line = styled.div`
  background-color: #333333;
  width: 443px;
  height: 3px;
  margin-top: 20px;
`;

function App() {
  return (
    <Main>
      <Panel>
        <Form converter="roman" />
        <Line />
        <Form converter="arabic" />
      </Panel>
    </Main>
  );
}

export default App;
