import React from "react";
import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux"
import { useRef } from "react";
import { logIn } from "./redux/module/login";



const LoginPage = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const user_id = React.useRef(null);
    const user_pw = React.useRef(null);


    const loginCheck = () =>{
        dispatch(logIn({
            username : user_id.current.value,
            password : user_pw.current.value
        }))
    }
    
    return (
        <>
            <Box>
                <Htag>
                    로그인~!
                </Htag>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Htag>ID : </Htag>
                    <Bar ref={user_id} placeholder="아이디를 입력해주세요~"></Bar>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Htag>PW : </Htag>
                    <Bar ref={user_pw} placeholder="비밀번호를 입력해주세요~"></Bar>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <But onClick={() => { loginCheck() }}>login~!</But>
                    <But onClick={() => { navigate("/") }}>back</But>
                </div>
            </Box>
        </>


    )
}



const Box = styled.div`
    width:450px;
    height:500px;
    border: none;
    margin:auto;
    align-items:center;
    justify-content:center;
    flex-direction: column;
    text-align:center;
`;

const Htag = styled.h1`
    font-style:30px;
`;

const Bar = styled.input`
    border:none;
    background-color:transparent;
    outline:none;
    border-bottom: 2px solid rgb(219, 232, 216);
    width:200px;
    font-size:20px;
    margin-bottom:30px;
`;

const But = styled.button`
    border:none;
    width:70px;
    height:45px;
    color:white;
    background-color:#47c8ff;
    border-radius:60px;
    margin-right:20px;
    margin-bottom:10px;
    font-size: 20px;
`;

export default LoginPage;
