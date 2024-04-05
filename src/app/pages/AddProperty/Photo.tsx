import React, {useState} from 'react';
import ImageUploading from 'react-images-uploading';
import clsx from 'clsx'
import { Box } from '@mui/material';


export function PhotoApp() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
  const [activeIndex, setActiveIndex] = useState(null);
  const onChange = (imageList :any, addUpdateIndex:any) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  const handleClick = (index:any) => {
    setActiveIndex(index);
  };
  return (
    <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageRemove,
          dragProps,
        }: any) => (
          // write your building UI

          <div className="upload__image-wrapper">
          <div className="card-body d-flex flex-column justify-content-between" style={{borderStyle:'dashed'}} >          
          <div style = {{margin:'auto', padding:'10%', width:'50%'}}className="bg-white">
   
               <img style = {{ height:'125px'}} src = "https://th.bing.com/th?id=OIP.ZOh05y4RAhKrC3E8lLFpoQAAAA&w=226&h=149&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"></img>
               <button 
         style={{marginTop:'5%'}}
         onClick={onImageUpload}
         {...dragProps}
           className='btn btn-sm btn-primary' data-kt-menu-dismiss='true'>
             Upload your Property Image 
          </button>
           </div>
           <div className='d-flex justify-content-end'>
          <button 
         style={{margin:'1%'}}
         onClick={onImageRemoveAll}
         {...dragProps}
           className='btn btn-sm btn-danger' data-kt-menu-dismiss='true'>
            Remove all Photos 
          </button>

        </div>
           </div>
           {imageList.length > 0 && (<h2 style= {{marginTop:'3%'}}>Preview Photos</h2>)}
           <div style={{ display: 'flex', flexWrap:'wrap' }}>
           {imageList.map((image: any, index:any) => (
            <>
           <Box key ={index} style = {{border: index === activeIndex ? '5px solid #1b84ff' : '', flex: '0 1 calc(33.333% - 10px)' , margin: '5%'}} position="relative" width="300px" height="200px">
      <img src={image['data_url']} alt="Background" style={{ width: '100%', height: '100%' }} />

      <button 
     key ={index}
    style={{  marginTop:'4%'}}
    onClick={() => handleClick(index)}
    {...dragProps}
    className={clsx('btn  btn-outline btn-sm btn-active-light-primary me-2')}
       data-kt-menu-dismiss='true'>
       Set as Default 
     </button>
     <button 
    style={{float:'right', marginTop:'4%'}}
    onClick={() => onImageRemove(index)}
    {...dragProps}
      className='btn btn-sm btn-danger' data-kt-menu-dismiss='true'>
       Delete  
     </button>
    </Box>
    
     </>
    ))}
    </div>
            
          
          </div>
        )}
      </ImageUploading>
    </div>
  );
}