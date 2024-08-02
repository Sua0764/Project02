import styled from "styled-components";
import { Menu } from "./Menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./About";
import { Customer } from "./Customer";
import { Game } from "./Game";
import { Lecture } from "./Lecture";
import { Login } from "./Login";
import { Main } from "./Main";
import { SignUp } from "./SignUp";
import { Store } from "./Store";
import { StudyRoom } from "./StudyRoom";
import { Test } from "./Test";

const Container = styled.div`
  width: 100%;
`;
const Menubar = styled.div``;
const Body = styled.div`
  width: 100%;
`;

export function Into() {
  console.log("로드됨");
  return (
    <>
      <BrowserRouter>
        <Container>
          <Menubar>
            <Menu />
          </Menubar>
          <Body>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/about" element={<About />} />
              <Route path="/lecture" element={<Lecture />} />
              <Route path="/store" element={<Store />} />
              <Route path="/test" element={<Test />} />
              <Route path="/game" element={<Game />} />
              <Route path="/studyroom" element={<StudyRoom />} />
              <Route path="/customer" element={<Customer />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </Body>
        </Container>
      </BrowserRouter>
    </>
  );
}
