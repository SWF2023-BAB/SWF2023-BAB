// 현재 회사 정보
import { Link } from "react-router-dom";

import styled from "styled-components";
import palette from "../../styles/colorPalette";

import backBtn from "../../contents/ic_back_btn.svg";
import menuBtn from "../../contents/ic_menu_btn.svg";
import companyImage from "../../contents/img_pikachu.svg";

const PresentCompany = () => {

  return (
    <Container>
      {/* 헤더 */}
      <HeaderLine/>
        <Header>
        <Link
          to={`/`}
          style={{ textDecoration: "none" }}>
          <BackBtn src={backBtn}/>
        </Link>
          <HeaderTitle>전력 공사 소개</HeaderTitle>
          <MenuBtn src={menuBtn}/>
        </Header>
      <HeaderLine/>

      <CompanyImage src={companyImage}/>

      <CompanyInfo>
        <Period>
          <PeriodFront>함께한지</PeriodFront>
          <PeriodBack>&nbsp;3년 째</PeriodBack>
        </Period>

        <CompanyName>
          <CompanyNameText>Pikachu</CompanyNameText>
          <CompanyNameLine/>
        </CompanyName>

        <CompanyContent>허리도 가늘군 만지면 부러지리</CompanyContent>
        <CompanyContent>02-123-4567</CompanyContent>

      </CompanyInfo>

      <HomepageBtn>
        <HomepageText>Pikachu Homepage</HomepageText>
      </HomepageBtn>

      <ContractBtn>
        <ContractText>표준계약서</ContractText>
      </ContractBtn>

    </Container>
  );
}

const Container = styled.div`
  display: block;
  padding-bottom: 4vw;
  position: relative;
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
  width: 4vw;
  height: 8vw;
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

const CompanyImage = styled.img`
  width: 100vw;
`;
const CompanyInfo = styled.div`
  margin: 5vw 6vw 5vw 6vw;
`;
const Period = styled.div`
  display: flex;
  margin-bottom: 2vw;
`;
const PeriodFront = styled.div`
  font-size: 14px;
  color: ${palette.gray87};
  font-weight: 400;
`;
const PeriodBack = styled.div`
  font-size: 14px;
  color: ${palette.gray87};
  font-weight: 700;
`;

const CompanyName = styled.div`
  display: flex;
  position: relative;
`;
const CompanyNameText = styled.div`
  position: absolute;
  font-size: 28px;
  font-family: ChakraPetch-Bold;
`;
const CompanyNameLine = styled.div`
  margin-top: 6vw;
  margin-bottom: 8vw;
  width: 26vw;
  height: 3.2vw;
  background-color: ${palette.yellow};
`;
const CompanyContent = styled.div`
  margin-bottom: 2vw;
  font-size: 14px;
  color: ${palette.gray87};
  font-weight: 400;
`;

const HomepageBtn = styled.div`
  display: flex;
  width: 88;
  margin: 0 6vw 2vw 6vw;
  padding: 3.2vw 0 3.2vw 0;
  border: 1px solid ${palette.black11};
  justify-items: center;
  align-items: center;
`;
const HomepageText = styled.div`
  margin: auto;
  font-size: 14px;
  color: ${palette.black11};
  font-weight: 400;
`;
const ContractBtn = styled.div`
  display: flex;
  width: 88;
  margin: 0 6vw 2vw 6vw;
  padding: 3.2vw 0 3.2vw 0;
  border: 1px solid ${palette.black11};
  background-color: ${palette.yellow};
  justify-items: center;
  align-items: center;
`;
const ContractText = styled.div`
  margin: auto;
  font-size: 14px;
  color: ${palette.black11};
  font-weight: 400;
`;

export default PresentCompany;