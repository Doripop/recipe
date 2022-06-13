import React from "react";
import styled from "styled-components"
import Card from 'react-bootstrap/Card'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { LoadRecipe } from "./redux/module/login";

const Menu = (props) => {
    const parm = useParams()
    // console.log(parm.menu)
    // const myCard_list = useSelector((state) => state.login.list);
    // console.log(myCard_list);
    // console.log(parm.menu)
    const dispatch = useDispatch()
    React.useEffect(()=>{  
        dispatch(LoadRecipe(parm.menu));
        });

    return (
        <>

            <div>
                <Title>뭐<Small>해</Small>먹<Small>지</Small>?</Title>
                <div style={{ display: "flex" }}>
              
                        <Card style={{
                            width: '13rem',
                            border: "1px solid red",
                            borderRadius: "20px",
                            height: "200px",
                            justifyContent: "center",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            marginRight: "10px",
                            marginBottom: "20px"
                        }}> 
                          
                            <Card.Img variant="top" style={{width:"100px",height:"100px"}} />
                            <Card.Body>
                                <Card.Text>
                                    
                                </Card.Text>
                            </Card.Body>
                        </Card>
               


                </div>

            </div>

            <div>
                {parm.menu} 페이지
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
    justify-content: center;
`;

const Small = styled.h3`
    font-size: 20px;
`;

export default Menu;