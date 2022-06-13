import React, { useEffect } from "react";

import styled from "styled-components"

////라우터 페이지
import Random from "./components/random";
import LoginPage from "./components/loginpage";
import SignUp from "./components/signup";
import Writepage from "./components/writepage";
import Menu from "./components/menu";
import MyPage from "./components/mypage";
import Repair from "./components/repair";
//라우터
import { Route, Routes } from "react-router-dom"
import { useNavigate } from "react-router-dom";

//리덕스
import {useDispatch, useSelector} from "react-redux"
//리덕스 리듀서
import { LoadCard, LoadRecipe } from "./redux/module/login";









function App() {

  
  const myCard_list = useSelector((state) => state.crud.list);
  // console.log(myCard_list)
  const dispatch = useDispatch()

  // React.useEffect(()=>{  
  //   dispatch(LoadRecipe());
  //   });
// 여기를 이제 서버에서 받아온 loadCardSV로 디스패치 보내서 받아온다.GET방식




  const navigate = useNavigate();

  return (
    <Background className="App">
      <Head>
        <span onClick={()=>{navigate("/")}}>홈</span> 
        <div>
          <span onClick={()=>{navigate("/login")}}>로그인</span>-
          <span onClick={()=>{navigate("/signup")}}>회원가입</span>
        </div>
      </Head>
      {/* <Random /> */}


        
      <Routes>
      <Route path='/repair/:id' element={<Repair />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/menu/:menu' element={<Menu />} />
        <Route path='/writepage' element={<Writepage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/' element={<Random />} />
      </Routes>
    </Background>
  );
}


const Background = styled.div`
  background-color:#b2bec3;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Head = styled.header`
  font-size: 30px;
  width: 100%;
  position: fixed;
  top: 0;
  text-align:center;
  margin-top: 50px;
  display: flex;
  justify-content:space-around;
`;




export default App;
