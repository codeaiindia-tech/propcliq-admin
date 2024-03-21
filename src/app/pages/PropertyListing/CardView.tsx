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
import {ImagesGallery} from './ImageGallery';
import { useNavigate } from 'react-router';

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
    const [propertyId, setPropertyId] = React.useState();

  const [deleteFlagModal, setDeleteFlagModal] = React.useState(false);
  const navigate = useNavigate();
  const handleEditClick = (id:any) => {
    navigate(`/edit-property?id=${id}`);
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
  
    <ImagesGallery></ImagesGallery> 
      <CardContent>

        <h3>{listItem?.address_details?.area}</h3>
    
      <div>
      <h5>   Rs. {listItem?.monthly_rent? listItem?.monthly_rent: 0}</h5>  
        <div>
      
                
      <Typography variant="body2" color="text.secondary"><span className=' fs-8 fw-bold'>Area : </span>  {listItem.built_up_area}  <strong>sq Yd  </strong> </Typography> 
      </div>
      
                    
                
                    <Typography variant="body2" color="text.secondary">
                    <span className=' fs-8 fw-bold'>Last Added : </span>
                          {(listItem?.updatedAt?.split('T'))[0]}
                          </Typography>
                  </div>

                 
        
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Edit Detail">
          <EditIcon  onClick={() => handleEditClick(listItem._id)}/>
        </IconButton>
        <IconButton onClick={() => deleteProperty(listItem._id)} aria-label="Delete">
          <DeleteIcon  />
        </IconButton>
        <span className='badge badge-light-primary fs-8 fw-bold'>In Progress</span>
       
      </CardActions>
  
    </Card> </Grid>
    
    
    
    
    ))}
   
    </Grid>
    </Box>
    </>
  );
}
