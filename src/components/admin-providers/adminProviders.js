import{ useState } from 'react';
import TableAdminProviders from "./tableAdminProviders";
import AdminForm from "./adminForm.js"
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


const  AdminProviders = ()  => {

  const [showForm, setShowForm] = useState(false)

   const showFormFunction = () => {
      if (showForm === false){
        setShowForm(true)
      } 
   }

   const showTableFunction = (value) => {
     if (value) {
      setShowForm(false)
     }
   }

    return (
      <>  
        <Grid container justifyContent={'center'} >
          <Grid container>
            <Grid item xs={8}>
              <Typography variant="h3" gutterBottom>
                  Administracion de proveedores
                </Typography>
            </Grid>
          </Grid>
          
          {showForm ?
            <Grid item xs={10}>
              <AdminForm  showTableFunction={showTableFunction}/>
            </Grid>
             :
            <Grid container justifyContent={'center'}>
            <Grid item xs={8}/>
            <Grid item xs={2} mb={2}>
              <Button variant="contained" onClick={showFormFunction}>Nuevo registro</Button>
            </Grid>
            <Grid item xs={10}>
              <TableAdminProviders />
            </Grid>
           </Grid>
          }
        </Grid>
      </>
    );
  }
  
  export default AdminProviders;
  