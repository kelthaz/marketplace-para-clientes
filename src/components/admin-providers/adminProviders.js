import TableAdminProviders from "./tableAdminProviders";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const  AdminProviders = ()  => {
    return (
      <>  
        <Grid container >
          <Grid item xs={12}>
            <Typography variant="h3" gutterBottom>
              Administracion de proveedores
            </Typography>
          </Grid>
          <Grid item xs={12}>
          < TableAdminProviders/>
          </Grid>
        </Grid>
      </>
    );
  }
  
  export default AdminProviders;
  