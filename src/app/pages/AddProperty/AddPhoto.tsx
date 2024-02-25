import { FC, useState, useEffect } from "react";
import { Dropzone, FileMosaic } from "@dropzone-ui/react";
import { DropzoneArea } from "mui-file-dropzone";

const Step3: FC<any> = (props: any) => {

  const [files, setFiles] = useState([]);
  const updateFiles = (incommingFiles:any) => {
    setFiles(incommingFiles);
  };
  return (
    <Dropzone onChange={updateFiles} value={files}>
      {files.map((file:any) => (
        <FileMosaic {...file} preview />
      ))}
    </Dropzone>
  );
}
export { Step3 };