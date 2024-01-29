import React from "react";
import styled from "styled-components";
import downloadapp from "../images/download_app02.jpg";
import homeImage from "../images/home-bg_opt1.jpg";
import specialistImage from "../images/logo.png";


const Body = () => {
    return (
        <MainContainerBody>
            <FirstInnerContainerBody>
            <h1>Here I need to add the homepage filter</h1>            
            </FirstInnerContainerBody>

            <SecondInnerContainerBody>
            <h1>Here I need to add the info about the business</h1>            
            </SecondInnerContainerBody>

            <ThirdInnerContainerBody></ThirdInnerContainerBody>
            
        </MainContainerBody>
)};

export default Body;

// Main Container
const MainContainerBody = styled.div`    
    background-color: white;
`;

const FirstInnerContainerBody = styled.div`
    background: url(${homeImage}) no-repeat center ;
    background-size: cover;
    height: 60vh;
    background-color: #e59524;
`;

const SecondInnerContainerBody = styled.div`
    background: url(${specialistImage}) no-repeat center;
    height: 60vh;
    background-color: #e59524;
`;

const ThirdInnerContainerBody = styled.div`
    background: url(${downloadapp}) no-repeat center;
    background-size: cover;
    height: 70vh;
    background-color: white;
    margin-bottom:10vh;
`;