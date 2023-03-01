import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import imgTemplate1 from 'seassets/template1.jpg'
import Grid from '@mui/material/Grid';
import imgTemplate1 from './assets/template1.jpg'
import imgTemplate2 from './assets/template2.jpg'
import imgTemplate3 from './assets/template3.png'
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ContentCut from '@mui/icons-material/ContentCut';
// import ContentCopy from '@mui/icons-material/ContentCopy';
// import ContentPaste from '@mui/icons-material/ContentPaste';
// import Cloud from '@mui/icons-material/Cloud';

const  ProductsAndServices = ()  => {
   const data = [
    {
      id:1,title: 'Template 1', description:'Esta es la descripcion del template 1', 
      category: 'Technology', price: '10$', img: imgTemplate1
    },
    {
      id:2,title: 'Template 2', description:'Esta es la descripcion del template 2', 
      category: 'Bussines', price: '20$', img: imgTemplate2 
    },
    {
      id:3,title: 'Template 3', description:'Esta es la descripcion del template 3', 
      category: 'Technology', price: '30$', img: imgTemplate3
    },
    
  ]

  console.log(typeof data[0].img)
    return (
      <> 
      <Grid container spacing={2}>
        <Grid item md={6}>
        <Paper sx={{ width: 320, maxWidth: '100%' }}>
      <MenuList>
        <MenuItem>
          {/* <ListItemIcon>
            <ContentCut fontSize="small" />
          </ListItemIcon> */}
          <ListItemText>Cut</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘X
          </Typography>
        </MenuItem>
        <MenuItem>
          {/* <ListItemIcon>
            <ContentCopy fontSize="small" />
          </ListItemIcon> */}
          <ListItemText>Copy</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘C
          </Typography>
        </MenuItem>
        <MenuItem>
          {/* <ListItemIcon>
            <ContentPaste fontSize="small" />
          </ListItemIcon> */}
          <ListItemText>Paste</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘V
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem>
          {/* <ListItemIcon>
            <Cloud fontSize="small" />
          </ListItemIcon> */}
          <ListItemText>Web Clipboard</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
        </Grid>
        <Grid item md={6}>
        {
          data.map( (item) => (
            <Card key={item.id} sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt={item.alt}
                height="140"
                image={item.img}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Agregar</Button>
              </CardActions>
            </Card>
            )
          )}
        </Grid>
      </Grid>
      
      </>
    );
  }
  
  export default ProductsAndServices;
  