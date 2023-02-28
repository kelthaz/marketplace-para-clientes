import * as React from 'react';
import{ useState } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


 const AdminForm = ( {showTableFunction} ) => {

    const [showTable, setShowTable] = useState(false)
    const [name, setName] = useState('')
    const [userName, setUserName] = useState('')
    const [rol, setRol] = useState('')

   const saveData = () => {
      if (showTable === false){
        setShowTable(true)
      } 
   }

   const onChangeName = (event) => { setName(event.target.value)} 
   const onChangeUserName = (event) => { setUserName(event.target.value)}
   const onChangeRol = (event) => { setRol(event.target.value)}

  return (
    <Grid container justifyContent={'center'} >
        <Grid item xs={2} />
        <Grid item xs={10} mt={6}>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                >
                <TextField id="Nombre" label="Nombre" variant="outlined" onChange={onChangeName}  />
                <TextField id="usuario" label="usuario" variant="outlined" onChange={onChangeUserName} />
                <TextField id="Rol" label="Rol" variant="outlined" onChange={onChangeRol} />
            </Box>
        </Grid>
        <Grid item xs={2} />
        <Grid item xs={2} mt={4}>
            <Button variant="contained" color={'error'} onClick={showTableFunction}>Cancelar</Button>
        </Grid>
        <Grid item xs={6} mt={4}>
            <Button variant="contained" color={'success'} onClick={saveData}>Guardar</Button>
        </Grid>
    </Grid>
  );
}

export default AdminForm