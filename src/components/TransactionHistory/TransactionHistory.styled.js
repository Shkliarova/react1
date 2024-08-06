import styled from "styled-components";

export const TableWrap = styled.table`
background-color: aliceblue;
width: 700px; 
margin: 0 auto;
margin-top: 20px;
margin-bottom: 20px;
border: 2px solid gray;`

export const TableHead = styled.thead`
width: 100%;`

export const TableBody = styled.tbody`
width: 100%;
text-align: center;`

export const TableRow = styled.tr`
&:nth-child(2n){
    background-color: lightblue; 
}`

export const TableItem = styled.td`
border: 1px solid rgba(128, 128, 128, 0.3);
padding: 20px;`

export const TableTitle = styled.th`
border: 1px solid rgba(128, 128, 128, 0.3);
padding: 20px;
background-color: teal;
color: white;`