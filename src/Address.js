import styled from "styled-components";
import { Link } from "react-router-dom";
import 등록문의전화 from "./assets/img/등록문의전화.png";
import 네이버톡톡 from "./assets/img/네이버톡톡.png";
import React, { useEffect } from "react";
import 메인사진 from "./assets/img/곰돌.png";

const Header = styled.div``;

const Img = styled.img`
  width: 100%;
  height: 600px;
  background-color: gray;
`;

const MenuBar = styled.div`
  margin: 0 auto;
  background-color: #c9c9c9;
  width: 70%;
  height: 80px;
  display: grid;
  grid-template-columns: 1.7fr 1fr 1fr 1fr 1.7fr;
  margin-top: 20px;
  border-radius: 50px;
`;

const MenuTitle = styled(Link)`
  margin: 20px;
  text-decoration: none;
  color: black;
  font-size: 1.3rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 23px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 60%;
  margin: auto;
  margin-left: 550px;
  font-family: GmarketMedium;
`;

const Line = styled.div`
  height: 5px;
  background-color: black;
  width: 150px;
`;

const AddressTitle = styled.div`
  display: flex;
  margin: 150px 0 35px 0;
  align-items: center;
`;

const AddressTitleText = styled.div`
  margin-left: 15px;
  margin-top: 8px;
  font-size: 2.5rem;
  font-family: GmarketBold;
`;

const AddressText1 = styled.div`
  font-size: 23px;
  margin-left: 15px;
  margin-bottom: 20px;
`;

const AddressText2 = styled.div`
  font-size: 20px;
  margin-left: 15px;
  margin-bottom: 30px;
  margin: 30px 10px;
  font-family: GmarketMedium;
`;

const AddressNaver = styled.div`
  width: 400px;
  height: 80px;
`;
const Naver = styled.img`
  width: 100%;
  height: 100%;
`;

const KakaoMap = styled.div`
  width: 800px;
  height: 600px;
`;

const MapKakao = styled.div`
  width: 800px;
  height: 700px;
  border: 1px solid #dadada;
  margin: 20px 0 300px 0;
`;

const KakaoMap1 = styled.div`
  width: 800px;
  height: 100px;
`;

const MapText1 = styled.div`
  margin: 20px 0 10px 23px;
  font-size: 20px;
  font-weight: bold;
`;

const MapText2 = styled.div`
  margin-left: 23px;
  font-size: 18px;
  color: #858585;
`;

export function Address() {
  useEffect(() => {
    const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
    const options = {
      // 지도를 생성할 때 필요한 기본 옵션
      center: new window.kakao.maps.LatLng(36.361403, 127.344851), // 지도의 중심좌표
      level: 3, // 지도의 레벨(확대, 축소 정도)
    };
    const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

    const markerPosition = new window.kakao.maps.LatLng(36.361403, 127.344851); // 마커가 표시될 위치입니다

    // 마커를 생성합니다
    const marker = new window.kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
  }, []);

  return (
    <>
      <Header>
        <Img src={메인사진} />
        <MenuBar>
          <div></div>
          <MenuTitle to="/intro/about">About Us</MenuTitle>
          <MenuTitle to="/intro/curriculum">커리큘럼</MenuTitle>
          <TitleWrapper>
            <MenuTitle to="/intro/address">오시는 길</MenuTitle>
            <Line />
          </TitleWrapper>
          <div></div>
        </MenuBar>
      </Header>
      <Container>
        <AddressTitle>
          <img src={등록문의전화} width={40} height={40} alt="등록문의 전화" />
          <AddressTitleText>등록문의</AddressTitleText>
        </AddressTitle>
        <AddressText1>• 전화 : 042 - 822 - 2414</AddressText1>
        <AddressText1>• 위치 : 대전 유성구 대학로 88 4층</AddressText1>
        <AddressText2>
          지금 바로 등록하고 겨울 방학을 토익 고득점으로 마무리 하세요!
          인투어학원과 함께라면 가능합니다.
        </AddressText2>
        <AddressNaver>
          <Naver src={네이버톡톡} alt="네이버 톡톡" />
        </AddressNaver>
        <MapKakao>
          <KakaoMap id="map"></KakaoMap>
          <KakaoMap1>
            <MapText1>인투어학원</MapText1>
            <MapText2>대전광역시 유성구 대학로 88 4층</MapText2>
          </KakaoMap1>
        </MapKakao>
      </Container>
    </>
  );
}
