import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: gray;
`;

const Body = styled.div``;

const Box1 = styled.div`
  background-color: darkgray;
  height: 900px;
`;

const Box2 = styled.div`
  background-color: gray;
  height: 980px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Title2 = styled.div`
  font-size: 3.5rem;
  font-weight: 600;
  display: flex;
  justify-content: right;
  align-items: center;
  padding: 50px;
  margin: 50px;
`;

const Lanking2 = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 50px;
  margin: 50px;
`;

const LankImg2 = styled.div`
  width: 500px;
  height: 450px;
  background-color: white;
`;
const Box3 = styled.div`
  background-color: darkgray;
  height: 900px;
  padding: 50px;
`;
const Title3 = styled.div`
  padding: 50px;
`;
const Title3_1 = styled.div`
  text-align: center;
  font-size: 2rem;
  padding: 5px;
`;
const Title3_2 = styled.div`
  text-align: center;
  font-size: 3.5rem;
  font-weight: 600;
`;
const Lanking3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
`;

const LankImg3 = styled.div`
  width: 900px;
  height: 450px;
  background-color: white;
`;

const Box4 = styled.div`
  background-color: gray;
  height: 1800px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
`;

const Title4 = styled.div`
  font-size: 3.5rem;
  font-weight: 600;
  padding: 50px 100px;
  margin: 100px;
`;

const Lecture1 = styled.div``;
const Lecture2 = styled.div``;
const Lecture3 = styled.div``;

export function Main() {
  return (
    <>
      <Container>
        <Body>
          <Box1></Box1>
          <Box2>
            <Title2>
              점수가 오르는 학원 <br />
              인투어학원
            </Title2>
            <Lanking2>
              <LankImg2></LankImg2>
            </Lanking2>
          </Box2>
          <Box3>
            <Title3>
              <Title3_1>단기간 점수 향상!</Title3_1>
              <Title3_2>명예의 전당</Title3_2>
            </Title3>
            <Lanking3>
              <LankImg3></LankImg3>
            </Lanking3>
          </Box3>
          <Box4>
            <Title4>
              탁월한 강사진들과 함께하는
              <br />
              LC, RC 쪽집게 강의
            </Title4>
            <div></div>
            <Lecture1></Lecture1>
            <Lecture2></Lecture2>
            <Lecture3></Lecture3>
          </Box4>
        </Body>
      </Container>
    </>
  );
}
