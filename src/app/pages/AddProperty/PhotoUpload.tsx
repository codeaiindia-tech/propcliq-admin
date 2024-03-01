// import React, { useState } from 'react'
// import ReactDOM from 'react-dom'

// // Import React FilePond
// import { FilePond, File, registerPlugin } from 'react-filepond'

// // Import FilePond styles
// import 'filepond/dist/filepond.min.css'

// // Import the Image EXIF Orientation and Image Preview pluzins
// // Note: These need to be installed separately
// // `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
// import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
// import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
// import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

// // Register the plugins
// registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

// // Our app
// const Previews = () => {
//   const [files, setFiles] = useState([])
//   let pond:any = null;

//   const onSubmit = () => {
//     const formData = new FormData();
//     // files
//     //   .map((item) => item.file)
//     //   .forEach((file) => formData.append("my-file", file));
//     // console.log(formData);
//     console.log("pond", pond);

//     if (pond) {
//       // pond.setOptions({
//       //   server: {
//       //     url: "https://httpbin.org/post",
//       //     timeout: 7000
//       //     // process: {
//       //     //   url: "./process",
//       //     //   method: "POST",
//       //     //   headers: {
//       //     //     "x-customheader": "Hello World"
//       //     //   },
//       //     //   withCredentials: false,
//       //     //   onload: (response) => response.key,
//       //     //   onerror: (response) => response.data,
//       //     //   ondata: (formData) => {
//       //     //     formData.append("Hello", "World");
//       //     //     return formData;
//       //     //   }
//       //     // },
//       //     // revert: "./revert",
//       //     // restore: "./restore/",
//       //     // load: "./load/",
//       //     // fetch: "./fetch/"
//       //   }
//       // });

//       const files = pond.getFiles();
//       files.forEach((file:any) => {
//         console.log("each file", file, file.getFileEncodeBase64String());
//       });

//       pond
//         .processFiles(files)
//         .then((res:any) => console.log(res))
//         .catch((error:any) => console.log("err", error));
//     }
//   };

//   return (
//     <>
//     <div className="App">
//     <FilePond
//         files={files}
//         ref={(ref) => {
//           pond = ref;
//         }}
//         required
//         acceptedFileTypes={["application/pdf", "image/*"]}
//         imagePreviewHeight={400}
//         // onupdatefiles={setFiles}
//         instantUpload={false}
//         allowMultiple={true}
//         maxFiles={3}
//         server="https://httpbin.org/post"
//         name="files"
//         labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
//       />
//     </div>
//     </>
//   )
// }
// export { Previews };