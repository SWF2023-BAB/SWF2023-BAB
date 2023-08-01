import styled from "styled-components";
import palette from "../styles/colorPalette";

const ContractList = () => {
  return (
    <Container>
      {/* 헤더 */}
      <HeaderLine/>

      {/* 리스트 */}
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

const HeaderLine = styled.hr`
  width: 100vw;
  height: 2px;
  background-color: ${palette.black};
`;

export default ContractList;