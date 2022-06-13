import React from "react";
import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import {useDispatch} from "react-redux"
import { signUP } from "../redux/module/login";


const SignUp = () => {
    const reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

    const check = () => {
        if (!reg_email.test(email.current.value)) {
            return false;
        } else {
            return true;
        }
    }
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const email = React.useRef(null);
    const user_pw = React.useRef(null);
    const user_pw_check = React.useRef(null);
    const username = React.useRef(null);

    // window.setTimeout(() => {
    //     console.log(
    //         user_id.current.value, 
    //         user_pw.current.value, 
    //         user_pw_check.current.value, 
    //         user_nic.current.value
    //         )
    // }, 5000);

    const signcheck = ()=>{
        if (user_pw.current.value == user_pw_check.current.value
            && !user_pw.current.value == "" && !username.current.value == "") {

            dispatch(signUP({
                email : email.current.value, //형식상
                password: user_pw.current.value,
                user_pw_check: user_pw_check.current.value,
                username: username.current.value, // 로그인 하는 아이디
            }))
                
            window.alert("회원가입이 완료되었습니다.");
            
            navigate('/');

        } else if (!user_pw.current.value || !user_pw.current.value) {
            window.alert("비밀번호를 입력하세요")
        } else if (user_pw_check.current.value != user_pw.current.value) {
            window.alert("비밀번호가 일치하지 않습니다.")
        } else if (!username.current.value) {
            window.alert("닉네임을 입력하세요!")
        } else {
            window.alert("기재하지 않은곳이 있는지 확인해주세요")
        }
    }

    
    return (
        <>
            <Box>
                <Htag>
                    회원가입~!
                </Htag>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Htag>ID : </Htag>
                    <Bar ref={username} placeholder="아이디를 입력해주세요~"></Bar>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Htag>PW : </Htag>
                    <Bar ref={user_pw} placeholder="비밀번호를 입력해주세요~"></Bar>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Htag>PW CHECK: </Htag>
                    <Bar ref={user_pw_check} placeholder="비밀번호를 확인해주세요~"></Bar>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Htag>NicName : </Htag>
                    <Bar ref={email} placeholder="이메일을 입력해주세요~"></Bar>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <But onClick={() => { check() == true ? signcheck() : (window.alert("이메일 형식이 아닙니다."))}}>login~!</But>
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

export default SignUp;