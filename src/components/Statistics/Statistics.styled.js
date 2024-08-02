import styled from "styled-components";

const getBgColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i += 1){
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

export const StatisticsWrap = styled.section`
background-color: aliceblue;
width: 300px; 
margin: 0 auto;
margin-top: 20px;
border: 2px solid gray;`

export const StatisticsTitle = styled.h2`
text-transform: uppercase;
color: #474a48;
text-align: center;
margin-bottom: 20px;
padding-top: 20px;`

export const StatisticsList = styled.ul`
display: flex;
align-items: center;
justify-content: center;`

export const StatisticsItem = styled.li`
display: flex;
flex-direction: column;
gap: 8px;
align-items: center;
justify-content: center;
width: 100%;
border-top: 1px solid gray;
padding: 8px;
background-color: ${getBgColor};`

export const ItemTitle = styled.span`
font-size: large;
font-weight: 500;`