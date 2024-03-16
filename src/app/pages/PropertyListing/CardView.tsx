import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {AlertDialog} from './ModalPopUp';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard(props:any) {
    const {leadListing,refreshData} = props;
    const [expanded, setExpanded] = React.useState(false);
    const [propertyId, setPropertyId] = React.useState();
    console.log('hi', leadListing)
  const [deleteFlagModal, setDeleteFlagModal] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const deleteProperty = (id:any) => {
    setDeleteFlagModal(!deleteFlagModal); 
    
    setPropertyId(id);
  }
  

  return (
    <>
   {deleteFlagModal && ( <AlertDialog id = {propertyId} handleCloseModal = { () => {setDeleteFlagModal(!deleteFlagModal);refreshData();} }></AlertDialog>)}
      <Box style = {{padding:'1%'}} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
       
    {leadListing?.map((listItem: any, index: any) => (   
     <Grid item xs={4} key = {index}>
    <Card sx={{ maxWidth: 345 }}>
  
      <CardMedia
        component="img"
        height="194"
        image={listItem.files[0]}
        alt="Paella dish"
      />
      <CardContent>
        <h3>{listItem.address_details.area}</h3>
    
      <div>
      <h5>   Rs. {listItem.monthly_rent? listItem.monthly_rent: 0}</h5>  
        <div>
      
                
      <Typography variant="body2" color="text.secondary"><span className=' fs-8 fw-bold'>Area : </span>  {listItem.built_up_area}  <strong>sq Yd  </strong> </Typography> 
      </div>
      
                    
                
                    <Typography variant="body2" color="text.secondary">
                    <span className=' fs-8 fw-bold'>Last Added : </span>
                          {(listItem.updatedAt?.split('T'))[0]}
                          </Typography>
                  </div>

                 
        
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Edit Detail">
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => deleteProperty(listItem._id)} aria-label="Delete">
          <DeleteIcon  />
        </IconButton>
        <span className='badge badge-light-primary fs-8 fw-bold'>In Progress</span>
       
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card> </Grid>))}
   
    </Grid>
    </Box>
    </>
  );
}
