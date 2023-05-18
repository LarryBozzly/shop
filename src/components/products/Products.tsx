import './Products.scss';
import { IProduct } from '../../models/index';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Fab from "@mui/material/Fab";


type Props = {
  products: IProduct[],
  onChangeProduct: any
}
const Products = ({ products,onChangeProduct }: Props) => {

  const handleAddToFavorite = (product: IProduct) => {
    try {
      const modifiedProd:IProduct = {
        ...product,
        isFavorite: true
      };
      onChangeProduct(modifiedProd);


      const favoriteProducts = localStorage.getItem('favorite-product');
      let parsedFavoriteProducts;
      let allProducts;
      if(favoriteProducts) {
        parsedFavoriteProducts = JSON.parse(favoriteProducts);
      }
      if(parsedFavoriteProducts) {
        allProducts = [...parsedFavoriteProducts,modifiedProd]
      } else {
        allProducts = [modifiedProd]
      }
      const serializedAllProducts = JSON.stringify(allProducts);
      localStorage.setItem('favorite-product', serializedAllProducts);
    } catch (error) {
      console.error('Error saving object to local storage:', error);
    }
  };

  return (
    <div>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card sx={{
              borderRadius: '0.75rem',
              boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px'
            }}>
              <div className="flex items-center justify-between">
                <CardHeader
                  title={product.title}
                  subheader="September 14, 2016"
                />
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites" onClick={() => handleAddToFavorite(product)}>
                    {!product.isFavorite ? <FavoriteIcon sx={{ color: 'red'}} /> : ''}
                  </IconButton>
                </CardActions>
              </div>
              <div className='img-wrapper hover:scale-110 transition-all duration-500 cursor-pointer'>
                <CardMedia
                  component="img"
                  height="194"
                  image={product.image}
                  alt="Paella dish"
                />
              </div>
              <Typography variant="h6" color="primary" sx={{ m: '0.5rem' }}>
                Price: ${product.price}
              </Typography>
            </Card>
          </Grid>
        ))}

      </Grid>
      <Fab className="fab" color="secondary" aria-label="edit">
        <FavoriteIcon />
      </Fab>
    </div>
  )
};

export default Products;
