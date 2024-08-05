import styled from "styled-components";

export const ListItem = styled.li`
display: flex;
align-items: center;
justify-content: flex-start;
gap: 16px;
border: 1px solid rgba(128, 128, 128, 0.3);
padding: 20px;`

export const ItemStatus = styled.span`
width: 15px;
height: 15px;
border-radius: 50%;
background-color: ${p => {
    return p.$isOnline ? "green" : "red";
}};`

export const ItemName = styled.p`
font-size: larger;
font-weight: 600;
color: #474a48;`