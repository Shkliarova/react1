import { TableWrap, TableHead, TableBody, TableItem, TableTitle, TableRow } from "./TransactionHistory.styled"

export const TransactionHistory = ({ items }) => {
    return (
        <TableWrap>
            <TableHead>
                <tr>
                    <TableTitle>Type</TableTitle>
                    <TableTitle>Amount</TableTitle>
                    <TableTitle>Currency</TableTitle>
                </tr>
            </TableHead>
            <TableBody>
                {items.map(item => 
                <TableRow key={item.id}>
                    <TableItem>{item.type}</TableItem>
                    <TableItem>{item.amount}</TableItem>
                    <TableItem>{item.currency}</TableItem>
                </TableRow>
                )}
            </TableBody>
        </TableWrap>
    )
}