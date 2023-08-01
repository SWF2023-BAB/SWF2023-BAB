import { useState } from "react";
import styled from "styled-components";
import palette from "../styles/colorPalette";

// react-icons -----------------------------------------------------
import { TbPointFilled } from "react-icons/tb";

// svg -------------------------------------------------------------
import { ReactComponent as LineTra }  from "../contents/Line.svg";
import { ReactComponent as Menu } from "../contents/Menu.svg";
import { ReactComponent as Help } from "../contents/Help.svg";
import { ReactComponent as Button } from "../contents/Button.svg";

const PageContainer = styled.div`
  background-color: white;
  min-height: 100%;
  margin: 0 auto;
  max-width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;

const HeaderContainer = styled.div`
  display: flex;  
  align-items: center;
  justify-content: center;
  margin: 1.1rem 0px;
`;

const Point = styled(TbPointFilled)`
  width: 4px;
  height: 4px;
  color: #D9D9D9;
  margin: 8.5px 3px;
`;

const Title = styled.p`
  fontSize: 16px;
  text-align: center;
  margin: auto;
`;

const Line = styled.hr`
  border: 1px solid #111111;
`;

const Text = styled.div`
  fontSize: 14px;
  fontFamily: NotoSansKR-Light;
`;

const Money = styled.div`
  font-size: 45px;
  font-family: ChakraPetch-Bold;
`;

const Home = () => {
  const [count, setCount] = useState(7020);

  return (
    <PageContainer>
      <Line/>
      <HeaderContainer>
        <Help/>
        <div style={{ 
            display: "flex",
            flexDirection: "row",
            margin: "0px 43px" 
        }}>
          <Title style={{ fontFamily: "ChakraPetch-Bold" }}> 
            SAZ 
          </Title>
          <div style={{ 
            display: "flex", 
            flexDirection: "column",
          }}>
            <Point style={{ marginBottom: "0px"}}/>
            <Point style={{ marginTop: "0px"}}/>
          </div>
          <Title style={{ fontFamily: "ChakraPetch-light" }}> 
            Secure Adapter Zone 
          </Title>
        </div>
          <Menu/>
      </HeaderContainer>
      <Line/>
      <Text style={{
        color: "#878787",
        margin: "20px 0 0 22px"
      }}> 
        납부 마감일 2023/08/31 
      </Text>
      <Text style={{
        color: "black",
        marginLeft: "22px"
      }}> 
        2023년 8월 
      </Text>
      <div style={{ 
          width: "100%",
          display: "flex", 
          alignItems: "center",
          marginTop: "100px"
      }}>
        <Money> ₩ {count} </Money>
        <Button/>
      </div>
      <LineTra/>
    </PageContainer>
  );
}

export default Home;