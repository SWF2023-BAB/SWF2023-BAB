// 표준 계약서
import { useState } from "react";
import { Link } from "react-router-dom";


import styled from "styled-components";
import palette from "../../styles/colorPalette";

import backBtn from "../../contents/ic_back_btn.svg";
import menuBtn from "../../contents/ic_menu_btn.svg";
import toggleClose from "../../contents/ic_toggle_close.svg";
import toggleOpen from "../../contents/ic_toggle_open.svg";

const ContractList = () => {
  const areas = ["전체", "서울", "강원", "인천/경기", "충청/대전", "전라/광주", "경북/대구", "경남/부산/울산", "제주"];
  const lists = ["Pikachu", "Raichu", "서울 전력 공사"];

  const [isOpenArea, setOpenArea] = useState("");

  const onClickArea = (area) =>{
    if(area === isOpenArea) setOpenArea("");
    else setOpenArea(area);
  }

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
        <HeaderTitle>표준계약서</HeaderTitle>
        <MenuBtn src={menuBtn}/>
      </Header>
      <HeaderLine/>

      {/* 리스트 */}
      <Company>
        <CompanyTitle>전력 공사 찾기</CompanyTitle>
        <CompanyTopLine/>
        {areas.map(area => (
          <div>
            {(area === isOpenArea) ?
              (<SelectDiv>
                <AreaBtn onClick={() => onClickArea(area)}>
                  <AreaText>{area}</AreaText>
                  <ToggleBtn src={toggleOpen}/>
                </AreaBtn>
                <AreaDashLine/>
                {lists.map(list => (
                  <Link
                    to={`/contractdetail`}
                    style={{ textDecoration: "none" }}>
                    <SelectList>{list}</SelectList>
                  </Link>
                ))}
                <AreaLine/>
              </SelectDiv>)
              :
              (<div>
                <AreaBtn onClick={() => onClickArea(area)}>
                  <AreaText>{area}</AreaText>
                  <ToggleBtn src={toggleClose}/>
                </AreaBtn>
                <AreaLine/>
              </div>
            )}
          </div>
        ))}
      </Company>

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

const Company = styled.div`
  display: block;
  margin-top: 6vw;
  margin-bottom: 6vw;
`;

const CompanyTitle = styled.div`
  margin-left: 6vw;
  margin-bottom: 4.5vw;
  font-size: 16px;
  color: ${palette.gray5F};
  font-weight: 800;
`;
const CompanyTopLine = styled.div`
  width: 88vw;
  height: 1px;
  margin: 0 auto 0 auto;
  background-color: ${palette.black11};
  border: 0;
`;
const AreaBtn = styled.div`
  display: flex;
  margin: 5vw 10vw 5vw 10vw;
  padding: 1vw;
  justify-items: center;
  align-items: center;
`;
const AreaText = styled.div`
  font-size: 14px;
  color: ${palette.gray5F};
  font-weight: 800;
`;
const ToggleBtn = styled.img`
  margin-left: auto;
  width: 3vw;
  height: 1.5vw;
`;
const AreaLine = styled.div`
  width: auto;
  height: 0.5px;
  margin: 0 10vw 0 10vw;
  background-color: ${palette.black11};
  border: 0;
`;
const AreaDashLine = styled.hr`
  width: auto;
  margin: 0 10vw 2vw 10vw;
  border: 0.5px dashed ${palette.black11};
`;
const SelectList = styled.div`
  margin: 6vw 11vw 6vw 11vw;
  font-size: 12px;
  color: ${palette.gray5F};
  font-weight: 400;
`;
const SelectDiv = styled.div`
  margin-bottom: 2vw;
`;

export default ContractList;