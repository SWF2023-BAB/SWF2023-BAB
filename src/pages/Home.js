import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import palette from "../styles/colorPalette";
import btnOff from "../contents/image_btn_down.png";
import btnOn from "../contents/image_btn_up.png";
import Detail from '../contents/image_detail.png';

// react-icons -----------------------------------------------------
import { TbPointFilled } from "react-icons/tb";

// svg -------------------------------------------------------------
import { ReactComponent as LineTra }  from "../contents/Line.svg";
import { ReactComponent as Menu } from "../contents/Menu.svg";
import { ReactComponent as Help } from "../contents/Help.svg";
import { ReactComponent as Trangle } from "../contents/Trangle.svg";
import Price from '../contents/ic_price.svg';

const PageContainer = styled.div`
  background-color: white;
  min-height: 100%;
  margin: 0 auto;
  max-width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  display: flex;
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
  font-size: 16px;
  text-align: center;
  margin: auto;
`;

const Line = styled.hr`
  width: 100%;
  border: 1px solid #111111;
`;

const SubLine = styled.hr`
  display: flex;
  width: 345px;
  color: #111111;
  justify-items: center;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const Text = styled.div`
  font-size: 14px;
  font-family: "NotoSansKR-Light";
  color: #878787;
  justify-items: left;
`;

const Money = styled.div`
  font-size: 45px;
  font-family: "ChakraPetch-SemiBold";
  z-index: 1;
`;

const MiddleTextBox = styled.div`
  width: 345px;
  height: 45px;
  border: 1px solid #111111;
  background-color: #F4F4F4;
  display: flex;
  align-items: center;
`;

const MiddleText = styled.div`
  font-size: 14px;
  color: #111111;
  margin-left: 23px;
`;

const MiddleSubText = styled.div`
  font-size: 12px;
  color: #5F5F5F;
  margin-left: 115px;
`;

const BottomDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  justify-content: center;
`;

const BottomTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #5F5F5F;
  text-align: center;
`;

const BottomText = styled.div`
  font-size: 14px;
  font-family: "NotoSansKR-Light";
  color: #5F5F5F;
  margin-left: 50px;
`;

const BottomBtnBox = styled.div`
  width: 345px;
  height: 45px;
  border: 1px solid #111111;
  background-color: #FFD74B;
  justify-content: center;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
`;

const Home = () => {
  const [isOpenArea, setOpenArea] = useState(false);
  const movePage = useNavigate();

  const onClickOpen = () => {
    setOpenArea(isOpenArea => (!isOpenArea));
  }

  return (
    <PageContainer>
      <Line/>
      <HeaderContainer>
        <Help/>
        <div style={{ 
            display: "flex",
            flexDirection: "row",
            margin: "0px 53px" 
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
        <Menu onClick={() => movePage('/menu')}/>
      </HeaderContainer>
      <Line/>
      <>
        <Text style={{ marginTop: "20px" }}> 
          납부 마감일 2023/08/31 
        </Text>
        <Text style={{ 
            marginTop: "3px", 
            color: "black" 
        }}> 
          2023년 8월 
        </Text>
      </>
        <>
          {(isOpenArea) ? (
            <div style={{ 
              width: "100%",
              alignItems: "center",
              marginTop: "45px",
              marginBottom: "30px",
              padding: "0 30px",
              display: "block"
            }}>
              {/* <Money> ₩ 7,020 </Money>
              <p style={{
                  width: "170px", 
                  height: "14px", 
                  backgroundColor: "#FFD74B",
                  position: "relative",
                  top: "-20px"
              }}/> */}
              <img src={Price}/>
              <img 
                alt="버튼"
                src={btnOff} 
                style={{ 
                  width: "43px", 
                  height: "43px",
                  position: "relative",
                  marginLeft: "275px",
                  top: "-50px"
                }}
                onClick={onClickOpen}
              />
            </div>
            ) : (
              <div style={{ 
                width: "100%",
                alignItems: "center",
                marginTop: "45px",
                marginBottom: "30px",
                padding: "0 30px",
                display: "block"
              }}>
                <>
                  {/* <Money style={{ zIndex: "3" }}> ₩ 7,020 </Money>
                  <p style={{
                    width: "170px", 
                    height: "14px", 
                    backgroundColor: "#FFD74B",
                    position: "relative",
                    top: "-20px",
                  }}/> */}
                  <img src={Price}/>
                  <img 
                    alt="버튼"
                    src={btnOn} 
                    style={{ 
                      width: "43px", 
                      height: "43px",
                      position: "relative",
                      marginLeft: "275px",
                      top: "-50px"
                    }}
                    onClick={onClickOpen}
                  />
                </>
                <img 
                  alt="버튼"
                  src={Detail}
                  style={{ 
                    width: "100%",
                    height: "410px",
                    backgroundColor: "#D9D9D9"
                  }}
                > 
                </img>
              </div>
            )}
        </>
      {/* </div> */}
      <LineTra/>
      <Text style={{ 
        marginTop: "35px",
        marginBottom: "5px",
        marginRight: "10px"
         }}> 납입자번호 : 480422
      </Text>
      <Text style={{ 
        marginTop: "3px",
        marginBottom: "35px" }}> 허리도 가늘고 만지면 부러지리 1149-12 
      </Text>
      <div style={{ 
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyItems: "center"
      }}>
        <MiddleTextBox style={{ marginBottom: "15px"}}>
          <MiddleText> 납부방법 : 자동이체 </MiddleText>
          <MiddleSubText> 입금전용계좌 </MiddleSubText>
          <Trangle style={{ marginLeft: "5px" }}/>
        </MiddleTextBox>
        <MiddleTextBox style={{ marginBottom: "40px" }}>
          <MiddleText> 경감대상 : 미대상 </MiddleText>
          <MiddleSubText style={{ marginLeft: "127px"}}> 경감혜택 안내 </MiddleSubText>
          <Trangle style={{ marginLeft: "5px" }}/>
        </MiddleTextBox>
      </div>
      <Line/>

      {/* 하단 01_ 우리집 전력 공사 */}
      <BottomDiv>
        <BottomTitle style={{ margin: "auto", left: "0"}}> 01. 우리집 전력 공사 </BottomTitle>
        <BottomTitle> 3년 </BottomTitle>
      </BottomDiv>
      <SubLine/>
      <BottomText style={{ 
        fontWeight: "bold",
        marginBottom: "15px" }}> Pikachu </BottomText>
      <BottomText> 경상남도 창원시 와와로 강강길 32-2 </BottomText>
      <SubLine style={{ border: "1px dashed #111111"}}/>
      <>
        <Link
          to={`/presentcompany`}
          style={{ textDecoration: "none" }}>
          <BottomBtnBox> 우리집 전력공사 규정 확인하기 </BottomBtnBox>
        </Link>
      </>
      <Line/>

      {/* 하단 02_ 변경될 전력 공사 */}
      <BottomDiv>
        <BottomTitle style={{ justifyContent: "flex-start"}}> 02. 변경될 전력 공사 </BottomTitle>
        <BottomTitle> D - 14 </BottomTitle>
      </BottomDiv>
      <SubLine/>
      <BottomText style={{ 
        fontWeight: "bold",
        marginBottom: "15px" }}> Raichu </BottomText>
      <BottomText> 전라북도 전주시 바바로 기린길 13-8 </BottomText>
      <SubLine style={{ border: "1px dashed #111111"}}/>
      <>
        <Link
          to={`/nextcompany`}
          style={{ textDecoration: "none" }}>
          <BottomBtnBox style={{ 
            backgroundColor: "#F4F4F4",
          }}> 변경 될 전력공사 규정 확인하기  </BottomBtnBox>
        </Link>
      </>
    </PageContainer>
  );
}
export default Home;