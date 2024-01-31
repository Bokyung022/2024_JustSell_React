// https://www.youtube.com/watch?v=1yMrdBsep-A
import styled from "styled-components";
import downloadapp from "../images/download_app02.jpg";
import homeImage from "../images/home-bg_opt1.jpg";
import specialistImage from "../images/logo.png";



// Main Container
export const MainContainerBody = styled.div`    
    background-color: white;
`;

export const FirstInnerContainerBody = styled.div`
    background: url(${homeImage}) no-repeat center ;
    background-size: cover;
    height: 60vh;
    background-color: #e59524;
`;

export const SecondInnerContainerBody = styled.div`
    //background: url(${specialistImage}) no-repeat center;
    height: 100vh;
    background-color: white;
`;

export const ThirdInnerContainerBody = styled.div`
    background: url(${downloadapp}) no-repeat center;
    background-size: cover;
    height: 70vh;
    background-color: white;
    margin-bottom:10vh;
`;