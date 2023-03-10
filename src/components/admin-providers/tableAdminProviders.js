import * as React from 'react';
import{ useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

 const TableAdminProviders = ({ editProvider }) => {

  const [data, setData] = useState([])
  const [edit, setEdit] = useState(false)

  const getData = () => {
    axios.get('http://localhost:3000/adminProviders')
      .then(resp => {
        setData(resp.data)
        setEdit(false)
      })
      .catch(error => {
        console.log('Hubo un error consultado los datos', error)
      })
   }

  useEffect(() => {
    getData()
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: 810 }} >
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Usuario</TableCell>
            <TableCell>Rol</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.idproviders}
              onClick={() => {editProvider({row, edit})}}
           
            >
              <TableCell component="th" scope="row">
                {row.idproviders}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.nombre}
              </TableCell>
              <TableCell>{row.usuario}</TableCell>
              <TableCell>{row.rol}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableAdminProviders