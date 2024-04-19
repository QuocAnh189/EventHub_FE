import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

const rows = [
  { date: 'March, 01, 2020', code: '#MS-415646', VAT: '10%', total: '100$' },
  { date: 'March, 01, 2020', code: '#MS-415647', VAT: '20%', total: '110$' },
  { date: 'March, 01, 2020', code: '#MS-415648', VAT: '30%', total: '120$' },
  { date: 'March, 01, 2020', code: '#MS-415649', VAT: '40%', total: '130$' },
  { date: 'March, 01, 2020', code: '#MS-4156410', VAT: '50%', total: '140$' },
  { date: 'March, 01, 2020', code: '#MS-415641', VAT: '60%', total: '150$' },
  { date: 'March, 01, 2020', code: '#MS-415642', VAT: '70%', total: '150$' },
  { date: 'March, 01, 2020', code: '#MS-415643', VAT: '80%', total: '160$' },
  { date: 'March, 01, 2020', code: '#MS-415644', VAT: '90%', total: '170$' },
  { date: 'March, 01, 2020', code: '#MS-415645', VAT: '10%', total: '180$' },
  { date: 'March, 01, 2020', code: '#MS-4156411', VAT: '11%', total: '190$' }
]

const Invoice = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold', fontSize: '24px' }}>INVOICE</TableCell>
            <TableCell align='center'>CODE</TableCell>
            <TableCell align='center'>VAT&nbsp;(g)</TableCell>
            <TableCell align='center'>TOTAL&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={`code-${row.code}`} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component='th' scope='row'>
                {row.date}
              </TableCell>
              <TableCell align='center'>{row.code}</TableCell>
              <TableCell align='center'>{row.VAT}</TableCell>
              <TableCell align='center'>{row.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Invoice
