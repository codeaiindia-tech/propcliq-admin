import { FC, useState, useEffect } from "react";
import { Dropzone, FileMosaic } from "@dropzone-ui/react";
import { DropzoneArea } from "mui-file-dropzone";
import { SaveStep3 } from '../../Apis/AddPropertyApiList';
import { Button } from '@mui/material';


const Step3: FC<any> = (props: any) => {

  const [files, setFiles] = useState([]);
  const [propertyId, setPropertyId] = useState('');

  const updateFiles = (incommingFiles:any) => {
    setFiles(incommingFiles);
    const url: URL = new URL(window.location.href);
    const params: URLSearchParams = url.searchParams;
    const property_id: any = params.get('id');
    setPropertyId(property_id);
  };

 const  onUpload = async () => {
  const url: URL = new URL(window.location.href);
            const params: URLSearchParams = url.searchParams;
            const propertyId: any = params.get('id');
  const getData = await SaveStep3(files, propertyId);
  props.handleSubmitStep3();
  props.sendDataToReview(getData);
 }
  console.log('setFiles', files)
  return (
    <>
      <div className="w-100">
      <h2 className="fw-bolder d-flex align-items-center text-gray-900">
                 Add Address Details
            </h2>
           <div>
    <Dropzone onChange={updateFiles} value={files} uploadConfig={{
      url: `https://api.propcliq.com/property/step3/image/${propertyId}`,
      method: "POST",
      headers: {
          Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWQyMjVkMTFmNzRlODJlZmRmODRmYmMiLCJpYXQiOjE3MDkyMzE5ODcsImV4cCI6MTcwOTIzNTU4N30.I_OuXmBXdtnP8fTSly7p4vdZ2OkzHIi4YchRSDY8I7U",
      },
      cleanOnUpload: true,
    }}>
      {files.map((file:any, key:any) => (
        <FileMosaic key={key} {...file} preview />
      ))}
    </Dropzone>
    </div>
    <div>
    {/* <Button variant="contained" color="primary" onClick={onUpload} style={{ marginTop: '20%' }}>
                Save Photos
            </Button> */}
    </div>
    
    </div>
    

  
            </>
  );
}
export { Step3 };