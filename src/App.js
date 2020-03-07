import React from "react";
import styled from "styled-components/macro";
import Form from "./components/Form";
import panelBackground from "./styles/images/panel_background.png";
import mainBackground from "./styles/images/roman-background.jpeg";

const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.black};
  min-height: 300px;
`;

const Panel = styled.div`
  background-image: url(${panelBackground});
  padding: 15px;
  font-weight: bold;
`;

const Line = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  height: 3px;
  margin: 20px 0;
`;

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${mainBackground});
  height: 100vh;
  width: 100vw;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0 25px;
`;

function App() {
  return (
    <Background>
      <Main>
        <Panel>
          <Form converter="roman" />
          <Line />
          <Form converter="arabic" />
        </Panel>
      </Main>
    </Background>
  );
}

export default App;
