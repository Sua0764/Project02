import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.div`
  width: 100%;
  background-color: white;
  height: 70px;
  display: grid;
  grid-template-columns: 0.7fr 1fr 4fr 1.5fr 0.7fr;
`;

const Img = styled.img``;

const MenuBtn = styled(Link)`
  padding: 20px;
  text-decoration: none;
  color: black;
`;

const Center = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Right = styled.div`
  display: flex;
  justify-content: right;
`;

export function Menu() {
  return (
    <>
      <Header>
        <div></div>
        <Img></Img>
        <Center>
          <MenuBtn to="/about">학원소개</MenuBtn>
          <MenuBtn to="/lecture">강의</MenuBtn>
          <MenuBtn to="/store">스토어</MenuBtn>
          <MenuBtn to="/test"> 모의고사</MenuBtn>
          <MenuBtn to="/game">게임</MenuBtn>
          <MenuBtn to="/studyroom">스터디룸</MenuBtn>
          <MenuBtn to="/customer">고객센터</MenuBtn>
        </Center>
        <Right>
          <MenuBtn to="/login">Login</MenuBtn>
          <MenuBtn to="/signup">Sign Up</MenuBtn>
        </Right>
      </Header>
    </>
  );
}
