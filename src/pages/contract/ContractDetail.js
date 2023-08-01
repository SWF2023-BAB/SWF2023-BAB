// 표준 계약서 내용

import styled from "styled-components";
import palette from "../../styles/colorPalette";

import backBtn from "../../contents/ic_back_btn.svg";
import menuBtn from "../../contents/ic_menu_btn.svg";
import contract from "../../contents/img_contract.svg";

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
          <ContractLine/>
          <ContractImage src={contract}/>
        </Paper>
      </GrayBox>

      <HomeBtn>
        <HomeText>돌아가기</HomeText>
      </HomeBtn>

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
  padding: 4.5vw 4.5vw 6vw 4.5vw;
  background-color: ${palette.white};
`;
const ContractTitle = styled.div`
  margin-left: 0.5vw;
  margin-bottom: 4.5vw;
  font-size: 16px;
  color: ${palette.gray5F};
  font-weight: 800;
`;
const ContractLine = styled.div`
  margin-bottom: 5vw;
  width: auto;
  height: 0.5px;
  background-color: ${palette.black11};
  border: 0;
`;
const ContractImage = styled.img`
  width: max-content;
  height: max-content;
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