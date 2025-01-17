import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 60%;
  margin: auto;
`;
const MyLectureTitle = styled.div`
  padding: 200px 0 140px;
  font-size: 48px;
  font-family: GmarketBold;
  text-align: center;
`;

const LectureList = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 0.6fr;
  margin: 30px 0;
  align-items: center;
`;

const LectureImg = styled.div`
  width: 260px;
  height: 150px;
  background-color: #d9d9d9;
`;
const LectureText = styled.div``;
const LectureText1 = styled.div`
  font-size: 15px;
  color: #7d7d7d;
`;
const LectureText2 = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin-top: 5px;
`;
const LectureText3 = styled.div`
  width: 50px;
  height: 25px;
  color: white;
  background-color: #0d3276;
  text-align: center;
  margin-top: 10px;
  line-height: 25px;
  font-size: 12px;
  border-radius: 8px;
`;
const Progress = styled.div``;
const LectureText4 = styled.div`
  margin-top: 40px;
  font-size: 15px;
  color: #7d7d7d;
`;
const LectureText5 = styled.div`
  width: 207px;
  height: 9px;
  background-color: #d9d9d9;
  border-radius: 15px;
  margin-top: 10px;
`;
const LectureGo = styled.div`
  width: 100px;
  height: 40px;
  background-color: #0d3276;
  color: white;
  font-size: 15px;
  text-align: center;
  line-height: 38px;
  align-self: self-end;
  border-radius: 15px;
  font-weight: 500;
  margin-bottom: 30px;
`;
const LectureMargin = styled.div`
  height: 20px;
`;
const LectureMargin1 = styled.div`
  height: 150px;
`;

const LoadingMessage = styled.div``;
const MyLectureMenu = styled.div`
  display: grid;
  grid-template-columns: 7.4fr 4fr 2.7fr;
  background-color: #c9c9c9;
  height: 40px;
  line-height: 5px;
  width: 1200px;
  text-align: center;
  font-size: 17px;
  margin-top: 20px;
`;
const LectureLine = styled.div`
  box-shadow: 0.3px 0.3px 0.3px 0.3px #d9d9d9;
  width: 1200px;
`;

export function MyLecture() {
  const [purchases, setPurchases] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    const jwtToken = sessionStorage.getItem("JWT-Token");
    if (jwtToken == null) {
      return;
    }
    axios
      .get(`/api/purchase`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })
      .then((response) => {
        console.log("데이터", response.data);

        const purchasesArray = Array.isArray(response.data)
          ? response.data
          : [response.data];
        setPurchases(purchasesArray);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
        setIsLoading(false);
      });
  }, []);

  const handleLectureClick = (storeItemId) => {
    navigate(`/lectureView/${storeItemId}`);
  };

  return (
    <>
      <Container>
        <MyLectureTitle>수강현황</MyLectureTitle>
        <MyLectureMenu>
          <p>강의</p>
          <p>진도율</p>
          <p>강의실이동</p>
        </MyLectureMenu>
        {isLoading ? (
          <LoadingMessage>강의 정보를 불러오는 중입니다...</LoadingMessage>
        ) : purchases.some(
            (purchase) => purchase.lectures && purchase.lectures.length > 0
          ) ? (
          purchases.map((purchase) =>
            purchase.lectures && purchase.lectures.length > 0 ? (
              <React.Fragment key={purchase.purchaseId}>
                <LectureList>
                  <LectureImg></LectureImg>
                  <LectureText>
                    <LectureText1>
                      {purchase.lectures[0].subject || "과목 정보 없음"}
                    </LectureText1>
                    <LectureText2>
                      {purchase.lectures[0].lectureName || "강의명 없음"}
                    </LectureText2>
                    <LectureText3>
                      {purchase.lectures[0].lectureClass || "분류 없음"}
                    </LectureText3>
                  </LectureText>
                  <Progress>
                    <LectureText4>진도율</LectureText4>
                    <LectureText5></LectureText5>
                  </Progress>

                  <LectureGo
                    onClick={() =>
                      handleLectureClick(purchase.lectures[0].storeItemId)
                    }
                  >
                    강의듣기
                  </LectureGo>
                </LectureList>
                <LectureLine></LectureLine>
                <LectureMargin></LectureMargin>
              </React.Fragment>
            ) : null
          )
        ) : (
          <LoadingMessage>구매한 강의가 없습니다.</LoadingMessage>
        )}
        <LectureMargin1></LectureMargin1>
      </Container>
    </>
  );
}
