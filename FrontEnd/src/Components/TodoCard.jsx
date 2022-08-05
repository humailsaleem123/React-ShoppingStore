import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { styled } from '@mui/material/styles';
// import JData from '../data.json';
import { useState , useContext, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import shopContext from '../Context/shopContext';
import HEADER from './Header';
import '../App.css';
import Box from '@mui/material/Box';
import Slider from './Slider/Slider'

function TodoCard() {



  const useStyles = styled (({ theme }) => ({

  card:{

    marginLeft:0,
    display:'block !important'

  }

}));

const classes = useStyles();

const [search , setSearch] = useState("");


const inputEvent = (event) => {
  const cart_data = event.target.value;

  setSearch(cart_data);
}






  return (


    <>

    <shopContext.Consumer>
      
      {context => (

        <React.Fragment >
          
          <HEADER
            cartItemNumber = {context.cart.reduce((count, curItem) => {
              return count + curItem.quantity;
            } , 0)}  searchItems={inputEvent}
          />
        <Slider/>
              
            <Grid container >

      
              {context.products
              .filter((val) => {

                if (search === "") {
                  return val;
              }
              else if (val.name.toLowerCase().includes(search.toLowerCase())){
                  return val;
              }
            
              })
              .map(product => {


                return (
               
                <Grid item xs={12} sm={6} md={4}> 
                  <Box m={14} pt={0} >
                  <Card key={product.id} sx={{ maxWidth: 345 }} className={classes.card} style={{marginTop:"100px"}}>
                            
                          <CardActionArea style={{display : "block"}}>
                            <CardMedia
                              component="img"
                              height="200"
                              image={product.imgsrc}
                              alt={product.name}
                            />
                            <CardContent>
                              <Typography gutterBottom variant="h5" component="div">
                              {product.name}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {product.name}
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                          <CardActions>
                            
                            <Button size="medium" color="primary" style={{color: '#202020'}}  onClick={context.addProductCart.bind(this, product)}>

                              Add To Cart

                            </Button>
                          </CardActions>
                
                </Card>
                </Box>

                </Grid>

                )
           
                  
                
              })}

            
            </Grid>
            
        </React.Fragment>
      )}


    </shopContext.Consumer>


    </>
  );
}
export default TodoCard;







{/*     
    <Grid container > {JData.map((Data,index) =>{

      return( 


         

            <Grid item xs={12} sm={6} md={4}>

  <Card key={index} sx={{ maxWidth: 345 }} className={classes.card} style={{marginTop:"100px"}}>
     
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={Data.imgsrc}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {Data.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {Data.name}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Add To Cart
          </Button>
        </CardActions>
      
      </Card>

      </Grid>




      )


    })}

</Grid>
     */}