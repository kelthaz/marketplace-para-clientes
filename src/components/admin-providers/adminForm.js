import * as React from 'react';
import{ useState } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';


 const AdminForm = ( {showTableFunction,dataProvider} ) => {

    const [name, setName] = useState(dataProvider.nombre)
    const [userName, setUserName] = useState(dataProvider.usuario)
    const [rol, setRol] = useState(dataProvider.rol)

    const saveData = () => {
     axios.post('http://localhost:3000/adminProviders/create-provider', {
        nombre: name,
        usuario: userName,
        rol: rol
     }).then((response) => {
        console.log('response',response)
     })


   }

   const onChangeName = (event) => { setName(event.target.value)} 
   const onChangeUserName = (event) => { setUserName(event.target.value)}
   const onChangeRol = (event) => { setRol(event.target.value)}

    const cancelButton = () =>{
        setName('')
        setUserName('')
        setRol('')
    }

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
                <TextField id="Nombre" label="Nombre" variant="outlined" onChange={onChangeName} value={name}  />
                <TextField id="usuario" label="usuario" variant="outlined" onChange={onChangeUserName} value={userName}/>
                <TextField id="Rol" label="Rol" variant="outlined" onChange={onChangeRol} value={rol}/>
            </Box>
        </Grid>
        <Grid item xs={2} />
        <Grid item xs={2} mt={4}>
            <Button variant="contained" color={'error'} onClick={() => { showTableFunction(); cancelButton()} }>Cancelar</Button>
        </Grid>
        <Grid item xs={6} mt={4}>
            <Button variant="contained" color={'success'} onClick={() => {saveData(); showTableFunction()} }>Guardar</Button>
        </Grid>
    </Grid>
  );
}

export default AdminForm