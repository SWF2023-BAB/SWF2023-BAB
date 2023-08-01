// 이전 하는 회사
import { Link } from "react-router-dom";

import styled from "styled-components";
import palette from "../../styles/colorPalette";

import backBtn from "../../contents/ic_back_btn.svg";
import menuBtn from "../../contents/ic_menu_btn.svg";

import changeCompany from "../../contents/ic_change_company.svg"
import notice from "../../contents/ic_notice.svg";
import changeRule from "../../contents/ic_change_rule.svg";
import moreInfo from "../../contents/ic_more_info.svg";

const NextCompany = () => {

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
          <HeaderTitle>전력 공사 이전</HeaderTitle>
          <MenuBtn src={menuBtn}/>
        </Header>
      <HeaderLine/>

      <TopBack>
        <InnerBack>
          <Info1>이전일까지</Info1>
          <RemainDate>
            <RemainDateText>
              10일 남음
            </RemainDateText>
            <RemainDateLine/>
          </RemainDate>
          <NextnoticeText>BAB 님은 Pikachu 전력에서 Raichu 전력으로 변경 될 예정입니다.</NextnoticeText>
        </InnerBack>
      </TopBack>
        
      <TopLine/>

      <ChangeMoney>
        <ChangeMoneyTitle>01. 요금 변동 사항</ChangeMoneyTitle>
        <ChangeEnergy src={changeCompany}/>
        <NoticeIcon src={notice}/>

        <ChangeMoneyTitle>02. 서비스 및 규정 변동사항</ChangeMoneyTitle>
        <ChangeRule src={changeRule} />
      </ChangeMoney>

      <HomepageBtn>
        <HomepageText>Pikachu Homepage</HomepageText>
      </HomepageBtn>
      <HomepageBtn>
        <HomepageText>Raichu Homepage</HomepageText>
      </HomepageBtn>

      <ChangeMoney>
        <ChangeMoneyTitle2>03. 불편사항이 생길 때</ChangeMoneyTitle2>
        <ChangeMoneyContent2>아래 방법으로 문의 해 주세요.</ChangeMoneyContent2>
      </ChangeMoney>

      <BottomBack>
        <MoreInfo src={moreInfo}/>
      </BottomBack>

    </Container>
  );
}

const Container = styled.div`
  display: block;
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

const TopBack = styled.div`
  padding-top: 7vw;
  background-color: ${palette.grayF4};
  z-index: 1;
`;
const InnerBack = styled.div`
  margin: 0vw 6vw 0vw 6vw;
  padding: 7vw 4.5vw 7vw 4.5vw;
  background-color: ${palette.white};
  border-radius: 1.25vw 1.25vw 0 0;
  z-index: 2;
`;
const Info1 = styled.div`
  font-size: 14px;
  color: ${palette.black11};
  font-weight: 400;
`;

const RemainDate = styled.div`
  display: flex;
  position: relative;
  margin-top: 2.5vw;
`;
const RemainDateText = styled.div`
  position: absolute;
  font-size: 28px;
  font-weight: 700;
`;
const RemainDateLine = styled.div`
  margin-top: 6vw;
  margin-bottom: 8vw;
  width: 28vw;
  height: 3.2vw;
  background-color: ${palette.yellow};
`;
const NextnoticeText = styled.div`
  font-size: 12px;
  margin-right: 22vw;
  color: ${palette.black11};
  font-weight: 400;
`;
const TopLine = styled.div`
  width: 100vw;
  height: 1px;
  background-color: ${palette.grayD9};
  border: 0;
`;

const ChangeEnergy = styled.img`
  margin-top: 4.5vw;
  width: 86vw;
`;

const ChangeMoney = styled.div`
  margin: 8vw 7vw 3vw 7vw;
`;
const ChangeMoneyTitle = styled.div`
  font-size: 16px;
  color: ${palette.black11};
  font-weight: 700;
`;
const ChangeMoneyTitle2 = styled.div`
  margin-top: 8vw;
  font-size: 16px;
  color: ${palette.black11};
  font-weight: 700;
`;
const ChangeMoneyContent2 = styled.div`
  margin: 2vw 0vw 2vw 4.5vw;
  font-size: 14px;
  color: ${palette.black11};
  font-weight: 300;
`;

const NoticeIcon = styled.img`
  margin: 2vw 6vw 11vw 5vw;
  width: 75vw;
`;
const ChangeRule = styled.img`
  margin: 8vw 7vw 4vw 7vw;
  width: 72vw;
`;

const HomepageBtn = styled.div`
  display: flex;
  width: 88;
  margin: 0 6vw 3vw 6vw;
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

const BottomBack = styled.div`
  padding: 4vw 6vw 6.5vw 6vw;
  background-color: ${palette.grayF4};
`;
const MoreInfo = styled.img`
  width: 88vw;
`;

export default NextCompany;