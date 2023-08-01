import react, { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { TbPointFilled } from "react-icons/tb";
import { ReactComponent as Home } from '../contents/ic_home.svg';
import { ReactComponent as History } from '../contents/ic_history.svg';
import { ReactComponent as Contract } from '../contents/ic_ contract.svg';
import { ReactComponent as MyPage } from '../contents/ic_mypage.svg';

const PageContainer = styled.div`
    width: 80%;
    background-color: #F0F0F0;
    min-height: 100%;
    right: 0;
    margin: 0 auto;
    align-items: center;
    flex-direction: column;
    position: relative;
    display: flex;
`;

const Point = styled(TbPointFilled)`
    width: 4px;
    height: 4px;
    color: #D9D9D9;
    margin: 8.5px 3px;
`;

const Title = styled.p`
    fontSize: 16px;
    margin: 30px 0 15px 0;
    text-align: left;
`;

const Line = styled.hr`
    width: 85%;
    border: 0.8px solid #111111;
`;

const MenuList = styled.div`
    flexDirection: column;
    display: flex; 
    margin: 0 0 40px 0;
`;

const MenuListTitle = styled.p`
    font-size: 16px;
    font-family: "NotoSansKR-Light";
    margin-left: 20px;
`;

const Menu = () => {
    const movePage = useNavigate();

    return (
        <PageContainer>
            <div style={{ 
                display: "flex",
                flexDirection: "row",
                marginRight: "78px",
            }}>
                <Title Title style={{ fontFamily: "ChakraPetch-Bold" }}> 
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
        <Line/>
        <div style={{ 
            width: "80%",
            left: 0,
            flexDirection: "column",
            display: "flex",
            marginTop: "60px",
        }}> 
            <MenuList
                onClick={movePage('/')}>
                <Home/>
                <MenuListTitle> Home </MenuListTitle>
            </MenuList>
            <MenuList
                onClick={movePage('/contract')}>
                <Contract/>
                <MenuListTitle> 표준 계약서 </MenuListTitle>
            </MenuList>
            <MenuList
                onClick={movePage('/contractdetail')}>
                <History/>
                <MenuListTitle> 납부내역 </MenuListTitle>
            </MenuList>
            <MenuList>
                <MyPage/>
                <MenuListTitle> 마이페이지 </MenuListTitle>
            </MenuList>
        </div>
        </PageContainer>
    )
}

export default Menu;