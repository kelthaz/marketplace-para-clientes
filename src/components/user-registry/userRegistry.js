import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import{ useState } from 'react';
import Button from '@mui/material/Button';

const  UserRegistry = ()  => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

   const onChangeUser = (event) => { setUser(event.target.value)} 
   const onChangePassword = (event) => { setPassword(event.target.value)} 

   const login = () => {
    console.log('Este es el usuario', user)
    console.log('Esta es la contraseña', password)
   }

  return (
    <>  
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={4} sx={{ widht: 900 }} style={{backgroundColor: '#eff1f3'}}>
          <Grid item xs={12} ml={10}>
            <Typography variant="h4" gutterBottom>
              Inicio de sesion
            </Typography>
          </Grid>
          <Grid item xs={12} ml={10}>
            <TextField id="user" label="Usuario" variant="outlined" onChange={onChangeUser}  />
          </Grid>
          <Grid item xs={12} ml={10} mt={4}>
            <TextField id="password" label="Contraseña" type="password" variant="outlined" onChange={onChangePassword}  />
          </Grid>
          <Grid item xs={2} mt={4} ml={10} mb={4}>
            <Button variant="contained" color={'success'} onClick={login}>Ingresar</Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
    </>
  );
}

export default UserRegistry;
