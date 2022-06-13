import React, { useState } from "react";
import { useRef, useEffect } from "react";
import styled from "styled-components"
import { keyframes } from "styled-components";
import Card from 'react-bootstrap/Card'
import Menu from "./menu";
import { Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//한식 중식 일식 넘어가는 라우터 페이지 카드 클릭시 이동
const Main = (props) => {
   
    const navigate = useNavigate()

  return (
    <>
      <div style={{ display: "flex" }}>
        <BigBox>
        
        <Card style={{ 
          width: '13rem',
          border:"1px solid red", 
          borderRadius:"100px",
          height:"200px",
          justifyContent:"center",
          display:"flex",
          flexDirection:"column",
          alignItems:"center",
          marginRight:"10px",
          marginBottom:"20px"
          }} onClick={()=>{navigate(`/menu/한식`)}}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Text>
              한식
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ 
          width: '13rem',
          border:"1px solid red", 
          borderRadius:"100px",
          height:"200px",
          justifyContent:"center",
          display:"flex",
          flexDirection:"column",
          alignItems:"center",
          marginRight:"10px",
          marginBottom:"20px"
          }} onClick={()=>{navigate(`/menu/중식`)}}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Text>
              중식
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ 
          width: '13rem',
          border:"1px solid red", 
          borderRadius:"100px",
          height:"200px",
          justifyContent:"center",
          display:"flex",
          flexDirection:"column",
          alignItems:"center",
          marginRight:"10px",
          marginBottom:"20px"
          }} onClick={()=>{navigate(`/menu/일식`)}}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Text>
              일식
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ 
          width: '13rem',
          border:"1px solid red", 
          borderRadius:"100px",
          height:"200px",
          justifyContent:"center",
          display:"flex",
          flexDirection:"column",
          alignItems:"center",
          marginRight:"10px",
          marginBottom:"20px"
          }} onClick={()=>{navigate(`/menu/양식`)}}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Text>
              양식
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ 
          width: '13rem',
          border:"1px solid red", 
          borderRadius:"100px",
          height:"200px",
          justifyContent:"center",
          display:"flex",
          flexDirection:"column",
          alignItems:"center",
          marginRight:"10px",
          marginBottom:"20px"
          }} onClick={()=>{navigate(`/menu/치킨`)}}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Text>
              치킨
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ 
          width: '13rem',
          border:"1px solid red", 
          borderRadius:"100px",
          height:"200px",
          justifyContent:"center",
          display:"flex",
          flexDirection:"column",
          alignItems:"center",
          marginRight:"10px",
          marginBottom:"20px"
          }} onClick={()=>{navigate(`/menu/피자`)}}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Text>
              피자
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ 
          width: '13rem',
          border:"1px solid red", 
          borderRadius:"100px",
          height:"200px",
          justifyContent:"center",
          display:"flex",
          flexDirection:"column",
          alignItems:"center",
          marginRight:"10px",
          marginBottom:"20px"
          }} onClick={()=>{navigate(`/menu/분식`)}}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Text>
              분식
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ 
          width: '13rem',
          border:"1px solid red", 
          borderRadius:"100px",
          height:"200px",
          justifyContent:"center",
          display:"flex",
          flexDirection:"column",
          alignItems:"center",
          marginRight:"10px",
          marginBottom:"20px"
          }} onClick={()=>{navigate(`/menu/패스트푸드`)}}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Text>
              패스트푸드
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ 
          width: '13rem',
          border:"1px solid red", 
          borderRadius:"100px",
          height:"200px",
          justifyContent:"center",
          display:"flex",
          flexDirection:"column",
          alignItems:"center",
          marginRight:"10px",
          marginBottom:"20px"
          }} onClick={()=>{navigate("/mypage")}}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Text>
              나만의 레시피!
            </Card.Text>
          </Card.Body>
        </Card>



        

       
        
        </BigBox>
       
       
        
      </div>

    </>
  )
}
const Ani = keyframes`
 0% {
    opacity: 0;
    transform: translateY(150px);
  }
  50%{
    opacity: 0.5;
    transition: 1s;
  }
  100%{
    opacity: 1;
    transform: translateY(0);
  }
`
const BigBox = styled.div`
  width:880px;
  animation: ${Ani} 5s 1;
  display:flex;
  flex-wrap: wrap;
  margin: 0 auto 0 auto;
  overflow-x: hidden;
`;






export default Main;