import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import FormControl from 'react-bootstrap/Card'
import { recipeUpdate } from "../redux/module/crud";


const Repair = (props) => {

    const [imageSrc, setImageSrc] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const comment = React.useRef(null);
    const title = React.useRef(null);
    
    const encodeFileToBase64 =(fileBlob) => {
        const reader = new FileReader();
        reader.readAsDataURL(fileBlob);
        return new Promise((resolve) => {
        reader.onload = () => {
            setImageSrc(reader.result);
            resolve();
        };
        });
    };
    // console.log(imageSrc);
    
    const parm = useParams()
    
    const recipe_list = useSelector((state) => state.crud.list);
    
    const recipe_idx = recipe_list.findIndex((index) => {
        
        return index.id === parseInt(parm.id);
      });

    const orginImage = recipe_list[recipe_idx].image
      console.log(recipe_list[recipe_idx].contents)
      
      const newRecipe = () => {
        dispatch(recipeUpdate({
            contents: comment.current.value == ""?recipe_list[recipe_idx].contents : comment.current.value,
            image : imageSrc ==null? orginImage : imageSrc,
            title : title.current.value == ""? recipe_list[recipe_idx].title : title.current.value,
            id : recipe_list[recipe_idx].id
        }))
        navigate("/")
    }
    

    

    return (
        <>
            <Box>
                <Htag>
                    레시피 수정~!
                </Htag>
                <Htag>요리 이름!! : </Htag>
                    <Bar ref={title} placeholder={recipe_list[recipe_idx].title} style={{marginBottom:"-10px"}}></Bar>
                <div style={{ display: "flex", justifyContent: "center", flexDirection:"column" }}>
                    <Htag>레시피 : </Htag>
                    <FormControl ref={comment} as="textarea" aria-label="With textarea" style={{width:"195px", height:"91px"}}/>
                </div>
                    <Htag>레시피 사진 : </Htag> 
                    <Bar type={"file"} onChange={(e) => {
                    encodeFileToBase64(e.target.files[0]);
                }}></Bar>
                <div style={{ height: "180px", width: "200px", backgroundColor: "gray", marginBottom: "20px" }}>
                    {imageSrc && <Image src={imageSrc} alt="preview-img" />}
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <But onClick={() => { newRecipe() }}>Save~!</But>
                    <But onClick={() => { navigate("/") }}>Back</But>
                </div>
            </Box>
        </>
    )

}


const Box = styled.div`
    width:450px;
    height:733px;
    border: none;
    margin: 100px auto 0px auto;
    align-items:center;
    justify-content:center;
    flex-direction: column;
    text-align:center;
    display:flex;
`;

const Htag = styled.h1`
    font-style:30px;
    margin-bottom: 0px;
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


const Image = styled.img`
    width:200px;
    height:180px;
`;

export default Repair;