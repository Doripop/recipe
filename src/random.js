import React, { useState, useRef } from "react";
import styled from "styled-components"
import { Route, Routes } from "react-router-dom"
import Main from "./main";


const Random = (props) => {


    const menu = ["밥", "김말이", "치킨", "떡볶이", "김밥", "치즈 돈까스"]






    return (
        <>
            <div>
                <Title>뭐<Small>해</Small>먹<Small>지</Small>?</Title>
            </div>

           

            <Routes>
                <Route path='/' element={<Main />} />
            </Routes>
        </>

    )
}

const Title = styled.h1`
    font-size:70px;
    flex-direction:row;
    display:flex;
    align-items: flex-end;
    color: #bb965d;
    margin-top: -10px;
    margin-bottom: 80px;
`;

const Small = styled.h3`
font-size: 20px;
`;
export default Random;