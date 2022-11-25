import { Table, TableHead, TableRow, TableCell, TableBody, Chip } from "@mui/material";

export default function CustomersTable(props: { customers: any[], handleClick: (item: any) => void }) {
    return <>
        <Table sx={{ minWidth: 500 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell align="center">Nombre</TableCell>
                    <TableCell align="center">Ciudad</TableCell>
                    <TableCell align="center">Estatus</TableCell>
                    <TableCell align="center">Último Pago</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {props.customers.map((row: any) => (
                    <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 }, ":hover": { backgroundColor: 'lightgray' } }}
                        onClick={() => props.handleClick(row)}
                    >
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell align="center">{row.city}</TableCell>
                        <TableCell align="center" >
                            <Chip onClick={() => { }} label={row.paymentStatus} sx={{ color: row.paymentStatus == 'COMPLETO' ? 'green' : 'orange' }} variant="outlined" />
                        </TableCell>
                        <TableCell align="center">{row.lastPayment}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </>
}