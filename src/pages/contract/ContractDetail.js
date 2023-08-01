// 표준 계약서 내용
import { Link } from "react-router-dom";

import styled from "styled-components";
import palette from "../../styles/colorPalette";

import backBtn from "../../contents/ic_back_btn.svg";
import menuBtn from "../../contents/ic_menu_btn.svg";

const ContractDetail = () => {

  return (
    <Container>
      {/* 헤더 */}
      <HeaderLine/>
      <Header>
        <BackBtn src={backBtn}/>
        <HeaderTitle>표준계약서</HeaderTitle>
        <MenuBtn src={menuBtn}/>
      </Header>
      <HeaderLine/>

      {/* 계약서 내용 */}
      <GrayBox>
        <Paper>
          <ContractTitle>표준 계약서</ContractTitle>
          <ContractContent>
            전력공사 대표이사 OOO (이하 ‘갑’이라 한다)와 전력 사용자 OOO (이하 을이라 한다)는 아래와 같이 종합계약을 체결한다.
          </ContractContent>
          <ContractLine/>
          <ContractContent>
            제 1조 . 전기요금의 적용
          </ContractContent>
          <ContractContentTab>
            ‘갑’이 ‘을’에게 부담할 전기요금은 ‘갑’의 호별 전기사용전력량에 합산한 후 호별로 ‘을’의 전기공급규정에 의한 주택용전력의 요을에 의하여 계산한다.
          </ContractContentTab>
          <ContractContentTab>
            이 경우 ‘갑’의 구내에 있는 공동설비에 대하여는 ‘갑’의 희망에 따라 다음중의 OO 방법을 적용한다.
          </ContractContentTab>
          <ContractContentTab>
            1. 공동설비에 대한 사용전력량을 호별로 배분하여 호별 전기사용전력량에 합산한 후 호별로 ‘을’의 전기공급규정에 의한 주택용전력의 요을에 따라 요금을 계산하는 방법
          </ContractContentTab>
          <ContractContentTab>
            2. 동설비에 대한 요금적용전력 및 사용전력량을 ‘을’의 전기공급규정에 의한 업무용전력의 요올에 따라 요금을 계산하는 방법
          </ContractContentTab>

          <ContractContent>
            제 2조 . 공동동설비의 요금적용전력
          </ContractContent>
          <ContractContentTab>
            공동설비에 대한 요금을 제1조 2항에 의하여 업무용전력으로 계산하는 경우의 공동설비에 대한 요금적용전력은 매뭘 아파트 전체 요금적용전력을 아파트 전체 사용 전력량에 대한 공동설비 사용전력량 비례로 안분한 것으로 한다.
          </ContractContentTab>

          <ContractContent>
            제 3조 . 호별 사용전력량의 제출 
          </ContractContent>
          <ContractContentTab>
            ‘을’은 매월 정기검침일에 종합전력량계를 검침하여 ‘갑’에게 등고하고, ‘갑’은 호별 사용전력을 검침한 후 그 내역에 대하여 관리자 또는 대표자의 날인 후 정기검침일의 다음날 까지 ‘을’에게 제출한다.
          </ContractContentTab>
          <ContractContentTab>
            이 경우 ‘갑’이 제출한 호별 전용사용전력량과 공동설비 사용전력량의 합계치는 ‘을’이 검침한 종합전력량계의 사용전력량과 같아야 한다.
          </ContractContentTab>

          <ContractContent>
            제 4조 . 전기요금의 청구
          </ContractContent>
          <ContractContentTab>
            ‘을’은 제 1조 및 제 2조에 의하여 계산한 전기요금을 전기요금 청구서 및 영수증표 1매로 ‘갑’에게 일괄 청구하되, 호별 전기요금 내역을 ‘갑’ 에게 교부한다.
          </ContractContentTab>

          <ContractContent>
            제 5조 . 검침수당의 지급
          </ContractContent>
          <ContractContentTab>
            1. 갑이 소정 납기내에 전기요금을 전액 납부할 경우 ‘을’은 호별 검침 및 수금을 담당하는 ‘갑’의 대표에게 주택 1호당 70원의 수당을 지급한다.
          </ContractContentTab>
          <ContractContentTab>
            2. 수당 지급일은 다음달 25일로 하며 25일이 공휴일인 경우에는 그 전일로 한다.
          </ContractContentTab>

          <ContractContent>
            제 6조 . 호별 사용전력량 미제출 및 사용전력량 임의 조작시 요금적용 
          </ContractContent>
          <ContractContentTab>
            1. ‘갑’이 제 3조에 의한 호별 사용전력량 (공동설비에 대하여 주택용전력 적용시는 공동설비 사용전력량의 호별 배분전력량 포함)을 정기검침일의 다음날까지 ‘을;에게 제출하지 아니할 경우에는 당해 월의 여금을 단일계약방법으로 계산한다.
          </ContractContentTab>
          <ContractContentTab>
            이 경우 “단일계약방법”이라함은 ‘을’의 전기공급규정 제 63조 [주택용전력] 제2항 본문에서 규정한 방법을 말한다.
          </ContractContentTab>
          <ContractContentTab>
            2. ‘갑’이 2회 이상 계속 제 1항의 호별 사용전력량을 제출하지 아니한 경우 또는 전기요금 면탈을 목적으로 호별 사용전력량을 임의 조작한 경우에는 종합계약을 해지하고 단일 계약방법으로 변경한다.
          </ContractContentTab>
          
        </Paper>
      </GrayBox>

      <Link
        to={`/`}
        style={{ textDecoration: "none" }}>
        <HomeBtn>
          <HomeText>돌아가기</HomeText>
        </HomeBtn>
      </Link>

    </Container>
  );
}

const Container = styled.div`
  display: block;
  position: relative;
  padding-bottom: 0.5vw;
  height: max-content;
  min-width: 100vw;
  min-height: 100vh;
  background-color: ${palette.white};
`;

const HeaderLine = styled.div`
  width: 100vw;
  height: 2px;
  background-color: ${palette.black11};
  border: 0;
`;
const Header = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
`;
const BackBtn = styled.img`
  opacity: 0;
  width: 5vw;
  height: 10vw;
  padding: 1vw;
  margin: 2.5vw;
`;
const HeaderTitle = styled.header`
  margin: auto;
  font-size: 16px;
  color: ${palette.black11};
  font-weight: 600;
`;
const MenuBtn = styled.img`
  width: 7.2vw;
  height: 5vw;
  padding: 1vw;
  margin: 2.5vw;
`;

const GrayBox = styled.div`
  padding: 3vw 6vw 4vw 6vw;
  background-color: ${palette.grayD9};
`;
const Paper = styled.div`
  padding: 4.5vw 4.5vw 10vw 4.5vw;
  background-color: ${palette.white};
`;
const ContractTitle = styled.div`
  margin-left: 0.5vw;
  margin-bottom: 14vw;
  font-size: 16px;
  color: ${palette.gray5F};
  font-weight: 800;
`;
const ContractContent = styled.div`
  margin-top: 5vw;
  margin-bottom: 2vw;
  font-size: 10px;
  color: ${palette.gray5F};
  font-weight: 400;
`;
const ContractContentTab = styled.div`
  margin-left: 8vw;
  font-size: 10px;
  color: ${palette.gray5F};
  font-weight: 400;
`;
const ContractLine = styled.div`
  margin-bottom: 1vw;
  width: auto;
  height: 0.5px;
  background-color: ${palette.black11};
  border: 0;
`;

const HomeBtn = styled.div`
  display: flex;
  width: 88;
  margin: 4vw 6vw 10vw 6vw;
  padding: 3.2vw 0 3.2vw 0;
  border: 1px solid ${palette.black11};
  justify-items: center;
  align-items: center;
`;

const HomeText = styled.div`
  margin: auto;
  font-size: 14px;
  color: ${palette.black11};
  font-weight: 400;
`;

export default ContractDetail;