import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from 'react-bootstrap/Card'
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { recipeDelete, recipeLoadSV } from "../redux/module/crud";




const MyPage = (props) => {

    React.useEffect(()=>{  
        dispatch( recipeLoadSV());
        });
    
        

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const recipe_list = useSelector((state) => state.crud.list);
    console.log(recipe_list);

    return (
        <>
            <Title>나만의 레시피 모아보기</Title>
            <span onClick={() => { navigate("/writepage") }}>글쓰기</span>
            <div style={{ display: "flex", flexDirection: "row" }}>
                {recipe_list.map((item, index) => (
                    <Card style={{
                        width: '13rem',
                        border: "1px solid red",
                        borderRadius: "100px",
                        height: "200px",
                        justifyContent: "center",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        marginRight: "10px",
                        marginBottom: "20px"
                    }} key={index}>
                        {item.title}
                        <Card.Img style={{width:"100px", height:"100px"}} variant="top" src={item.image} />
                        <Card.Body>
                            <Card.Text>
                                {item.contents}
                            </Card.Text>
                        </Card.Body>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <span onClick={() => { navigate(`/repair/${item.id}`) }}>수정하기</span>-
                            <span onClick={() => {dispatch(recipeDelete(item.id))}}>삭제하기</span>
                        </div>

                    </Card>
                ))}
            </div>
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
    margin-bottom: 0px;
    justify-content: center;
`;

export default MyPage;