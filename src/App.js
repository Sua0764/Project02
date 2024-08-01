import { Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: GmarketSansMedium;
  }
`;

const Container = styled.div`
  width: 100%;
  background-color: gray;
`;
const Header = styled.div`
  width: 100%;
  background-color: white;

  height: 70px;
  display: grid;
  grid-template-columns: 2fr 5fr 2fr;
`;
const Body = styled.div``;
const Box1 = styled.div`
  background-color: gray;
  height: 440px;
`;
const Img = styled.img``;
const Menu = styled.a`
  padding: 20px;
`;
const Center = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Right = styled.div``;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>
          <Img></Img>
          <Center>
            <Menu>학원소개</Menu>
            <Menu>스토어</Menu>
            <Menu>모의고사</Menu>
            <Menu>게임</Menu>
            <Menu>스터디룸</Menu>
            <Menu>고객센터</Menu>
          </Center>
          <Right>
            <Menu>Sign Up</Menu>
            <Menu>Login</Menu>
          </Right>
        </Header>
        <Body>
          <Box1></Box1>
          <Box1></Box1>
        </Body>
      </Container>
    </>
  );
}

export default App;
