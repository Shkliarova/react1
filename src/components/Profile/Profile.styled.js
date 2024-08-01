import styled from "styled-components";

export const ProfileWrap = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 8px;
background-color: aliceblue;
width: 300px; 
margin: 0 auto;
margin-top: 20px;
padding: 20px;
border: 2px double gray;
border-radius: 20%;
`

export const Img = styled.img`
margin: 10px;`

export const ProfileName = styled.p`
font-size: x-large;
font-weight: 600;
text-align: center;`

export const ProfileTag = styled.p`
text-align: center;
text-decoration: underline;
color: gray;
font-weight: 500;`

export const Location = styled.p`
text-align: center;
font-size: small;
margin-top: 4px;`

export const StatsList = styled.ul`
display: flex;
`

export const StatsItems = styled.li`
display: flex;
flex-direction: column;
align-items: center;
padding: 15px;
background-color: lavender;
border: 1px solid grey;
border-radius: 50%;`

export const StatsTitle = styled.span`
font-weight: 700;`