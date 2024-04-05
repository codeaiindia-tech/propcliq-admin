import { FC, useState, useEffect } from "react";
import { Dropzone, FileMosaic } from "@dropzone-ui/react";
import { DropzoneArea } from "mui-file-dropzone";
import { SaveStep3 } from '../../Apis/AddPropertyApiList';
import { Button } from '@mui/material';
import {PhotoApp} from './Photo'

const Auth_Token = JSON.parse(JSON.stringify(localStorage.getItem("Auth_Token")));

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
  props.handleSubmitStep3();

 }
  console.log('setFiles', files)
  return (
    <>
      <div className="w-100">
      <h2 className="fw-bolder d-flex align-items-center text-gray-900">
                 Add Property Photos
            </h2>
           <div>

           <PhotoApp></PhotoApp>
    {/* <Dropzone onChange={updateFiles} value={files} uploadConfig={{
      url: `https://api.propcliq.com/property/step3/image/${propertyId}`,
      method: "POST",
      headers: {
          Authorization:Auth_Token
      },
      cleanOnUpload: true,
    }}>
      {files.map((file:any, key:any) => (
        <FileMosaic key={key} {...file} preview />
      ))}
    </Dropzone> */}
    </div>
    <div>

    <div
            style={{
              display: "block",
              width: "100%",
              margin: "25px 0px",
              position: "relative",
              bottom: "0px",
              padding: "0px",
            }}
          >
            <button
              onClick={onUpload}
              style={{
                background: "#1B84FF",
                borderRadius: "8px",
                fontWeight: 500,
                fontSize: "14px",
                width: "100%",
                padding: "17px 0px",
                textAlign: "center",
                color: "rgb(255, 255, 255)",
                border: "none",
              }}
            >
             
               Next, Review Property
            </button>
          </div>
 
    </div>
    
    </div>
    

  
            </>
  );
}
export { Step3 };