import React, {useState, useEffect} from 'react';
import ImageUploading from 'react-images-uploading';
import clsx from 'clsx'
import { Box } from '@mui/material';
import { getPropertyDetailById} from "../../Apis/AddPropertyApiList";
const API_URL = import.meta.env.VITE_APP_API_URL;

const PhotoApp: React.FC<any> = () => {
  const [images, setImages] = React.useState<any>([]);
  const [property, setProperty] = React.useState<any>({});
  const maxNumber = 69;
  const [activeIndex, setActiveIndex] = useState(0);
  const url: URL = new URL(window.location.href);
  const params: URLSearchParams = url.searchParams;
  const property_id: any = params.get('id');
  const onChange = async (imageList :any, addUpdateIndex:any) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const getPropertyDetail = async() => {
    const url: URL = new URL(window.location.href);
    const params: URLSearchParams = url.searchParams;
    const propertyId: any = params.get('id');
    const fetchPropertyDetail = await getPropertyDetailById({id:propertyId});
    setProperty(fetchPropertyDetail);
  }

  useEffect(() =>  {
    const url: URL = new URL(window.location.href);
    const params: URLSearchParams = url.searchParams;
    const propertyId: any = params.get('id');
    if(propertyId){
      getPropertyDetail();
    }      
   },[])

  const onUploadImages = async () => {
    const formData = new FormData();
    for (const file of images) {
      formData.append('files', file.file);
    }
    formData.append('default', `${activeIndex}`);
    try {
      const response = await fetch(`${API_URL}/property/step3/images/${property_id}`, {
        method: 'POST',
        headers: {
          'Authorization': JSON.parse(JSON.stringify(localStorage.getItem("Auth_Token")))
        },
        body: formData
      });
      const jsonResponse = await response.json();
      console.log('reponse' , jsonResponse )
      return jsonResponse.data;
    } catch (error) {
      throw error;
    }  
  }

  const onError = (errors:any, files:any) => {
    console.log(errors, files);
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
        onError={onError}
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
           <button className='btn btn-sm btn-primary' onClick={onUploadImages}>Upload</button>
           {imageList.length > 0 && (<h2 style= {{marginTop:'3%'}}>Preview Photos</h2>)}
           <div style={{ display: 'flex', flexWrap:'wrap' }}>



           {/* <>
           {property && property.files.map((item: any,  index:any) => (
            <Box key={index} position="relative" width="300px" height="200px">
              <img src={item.path} alt="Background" style={{ width: '100%', height: '100%' }} />
            </Box>
           ))}
           
      </> */}
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

export { PhotoApp };