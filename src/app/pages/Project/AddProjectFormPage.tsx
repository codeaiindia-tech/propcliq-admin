
        import { FC,useEffect, useState } from 'react'
        import {KTIcon, toAbsoluteUrl} from '../../../_metronic/helpers';
        import {addProjects} from "../../Apis/ProjectAPIList";
        import { Button } from '@mui/material';
        import InputAdornment from "@mui/material/InputAdornment";
        import clsx from 'clsx'
        import TextField from "@mui/material/TextField";
        import { DatePicker } from "@mui/x-date-pickers/DatePicker";
        import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
        import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
        import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
        import dayjs, { Dayjs } from 'dayjs';
        import Radio from '@mui/material/Radio';
        import RadioGroup from '@mui/material/RadioGroup';
        import FormControlLabel from '@mui/material/FormControlLabel';
        import FormControl from '@mui/material/FormControl';
        import FormLabel from '@mui/material/FormLabel';
        import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';

        type Props = {
        className: string
        }

        interface State extends SnackbarOrigin {
            open: boolean;
          }

        const AddProjectFormPage: FC<Props> = ({className}) => {
            
            const amenitieseMenuItems = ["Dining", "Sofa", "Fridge"];
            const propertyType = ['Residential', 'Commercial' ];
            const projectStatus = ['Delivered', 'InProgress', 'InActive'];
            const [showSnackBar, setShowSnackBar] = useState(false);  
            const [snackBarMessgae, setSnackBarMessage] = useState(""); 
              
            
              const handleClose = () => {
                setShowSnackBar(false)
              };

            const [projectName, setProjectName] = useState("");
            const [projectDisplayName, setProjectDisplayName] = useState("");
            const [builderName, setBuilderName] = useState("");
            const [builderDisplayName, setBuilderDisplayName] = useState("");
            const [stateName, setStateName] = useState("");
            const [countryName, setCountryName] = useState("");
            const [cityName, setCityName] = useState("");
            const [locality, setLocality] = useState("");
            const [suburbs, setSuburbs] = useState("");
            const [projectDescription, setProjectDescription] = useState("");
            const [commercialDescription, setCommercialDescription] = useState("");
            const [projectAddress, setProjectAddress] = useState("");
            const [projectComments, setProjectComments] = useState("");
            const [sourceOfInfo, setSourceOfInfo] = useState("");
            const [propertyTypeValue, setPropertyTypeValue] = useState("");
            const [latitude, setLatitude] = useState("");
            const [longitude, setLongitude] = useState("");
            const [projectStatusValue, setProjectStatusValue] = useState("");
            const [preLauncedDate, setPreLauncedDate] = useState("");
            const [launcedDate, setLauncedDate] = useState("");
            const [promisedCompletionDate, setPromisedCompletionDate] = useState("");
            const [bankLists, setBankLists] = useState("");
            const [applicationFormPdf, setApplicationFormPdf] = useState("");
            const [applicationFormLink, setApplicationFormLink] = useState("");
            const [approvals, setApprovals] = useState("");
            const [projectSize, setProjectSize] = useState("");
            const [openSpace, setOpenSpace] = useState("");
            const [noOfTower, setNoOfTower] = useState("");
            const [powerBackUp, setPowerBackUp] = useState("");
            const [powerBackUpCapacity, setPowerBackUpCapacity] = useState("");
            const [showPriceInWebsite, setShowPriceInWebsite] = useState("");
            const [silentFeature, setSilentFeature] = useState<any>([]);
            const [linkedProjectId, setLinkedProjectId] = useState("");
            const [reraSubCategory, setReraSubCategory] = useState("");
            const [reraRegistrationNo, setReraRegistrationNo] = useState("");
            const [registrationDate, setRegistrationDate] = useState("");
            const [expiryDate, setExpiryDate] = useState("");
            const [reraProjectLink, setReraProjectLink] = useState("");
            const [developerConfirmation, setDeveloperConfirmation] = useState("");
           


            // Error Declaration 
            const [projectNameError, setProjectNameError] = useState("");
            const [projectDisplayNameError, setProjectDisplayNameError] = useState("");
            const [builderNameError, setBuilderNameError] = useState("");
            const [builderDisplayNameError, setBuilderDisplayNameError] = useState("");
            const [stateNameError, setStateNameError] = useState("");
            const [countryNameError, setCountryNameError] = useState("");
            const [cityNameError, setCityNameError] = useState("");
            const [localityError, setLocalityError] = useState("");
            const [suburbsError, setSuburbsError] = useState("");
            const [projectDescriptionError, setProjectDescriptionError] = useState("");
            const [commercialDescriptionError, setCommercialDescriptionError] = useState("");
            const [projectAddressError, setProjectAddressError] = useState("");
            const [projectCommentsError, setProjectCommentsError] = useState("");
            const [sourceOfInfoError, setSourceOfInfoError] = useState("");
            const [propertyTypeValueError, setPropertyTypeValueError] = useState("");
            const [latitudeError, setLatitudeError] = useState("");
            const [longitudeError, setLongitudeError] = useState("");
            const [projectStatusValueError, setProjectStatusValueError] = useState("");
            const [preLauncedDateError, setPreLauncedDateError] = useState("");
            const [launcedDateError, setLauncedDateError] = useState("");
            const [promisedCompletionDateError, setPromisedCompletionDateError] = useState("");
            const [bankListsError, setBankListsError] = useState("");
            const [applicationFormPdfError, setApplicationFormPdfError] = useState("");
            const [applicationFormLinkError, setApplicationFormLinkError] = useState("");
            const [approvalsError, setApprovalsError] = useState("");
            const [projectSizeError, setProjectSizeError] = useState("");
            const [openSpaceError, setOpenSpaceError] = useState("");
            const [noOfTowerError, setNoOfTowerError] = useState("");
            const [powerBackUpError, setPowerBackUpError] = useState("");
            const [powerBackUpCapacityError, setPowerBackUpCapacityError] = useState("");
            const [showPriceInWebsiteError, setShowPriceInWebsiteError] = useState("");
            const [silentFeatureError, setSilentFeatureError] = useState<any>("");
            const [linkedProjectIdError, setLinkedProjectIdError] = useState("");
            const [reraSubCategoryError, setReraSubCategoryError] = useState("");
            const [reraRegistrationNoError, setReraRegistrationNoError] = useState("");
            const [registrationDateError, setRegistrationDateError] = useState("");
            const [expiryDateError, setExpiryDateError] = useState("");
            const [reraProjectLinkError, setReraProjectLinkError] = useState("");
            const [developerConfirmationError, setDeveloperConfirmationError] = useState("");

        const handleAddProject = async() => {

            const errors:any = {
                projectName: !projectName
                  ? "Please Add the Project Name"
                  : "",
                  projectDisplayName: !projectDisplayName
                  ? "Please Add the Project Display Name"
                  : "",
                  builderName: !builderName
                  ? "Please Add the builder Name"
                  : "",
                  builderDisplayName: !builderDisplayName
                  ? "Please Add the builder Display Name"
                  : "",
                  stateName: !stateName
                  ? "Please Add the State Name"
                  : "",
                  countryName: !countryName
                  ? "Please Add the Country Name"
                  : "",
                  cityName: !cityName
                  ? "Please Add the City Name"
                  : "",
                  suburbs: !suburbs
                  ? "Please Add the suburbs Name"
                  : "",
                  locality: !locality
                  ? "Please Add the locality Name"
                  : "",

            }

            setProjectNameError(errors.projectName);
            setProjectDisplayNameError(errors.projectDisplayName);
            setBuilderDisplayNameError(errors.builderDisplayName);
            setBuilderNameError(errors.builderName);
            setCityNameError(errors.cityName);
            setCountryNameError(errors.countryName);
            setSuburbsError(errors.suburbs);
            setLocalityError(errors.locality);
            setStateNameError(errors.stateName)

              // Check if any error exists
            for (const error in errors) {
            if (errors[error]) {
             return;
            }
            }

            const data = {
                "name": projectName,
                "display_name":projectDisplayName,
                "builder_name": builderName,
                "builder_display_name": builderDisplayName,
                "state": stateName,
                "country": countryName,
                "city": cityName,
                "locality": locality,
                "suburbs": suburbs,
                "project_description": projectDescription,
                "commercial_description": commercialDescription,
                "project_address":projectAddress,
                "project_comments":projectComments,
                "source_of_information":sourceOfInfo,
                "property_type":propertyTypeValue,
                "latitude":"28.4303672",
                "longitude":"77.4236336",
                "project_status":projectStatusValue,
                "pre_launch_date":preLauncedDate,
                "launch_date":launcedDate,
                "promised_completion_date":promisedCompletionDate,
                "bank_list":bankLists,
                "application_form_pdf": applicationFormPdf,
                "application_form_link":applicationFormLink,
                "approvals":approvals,
                "project_size": `${projectSize} acre`,
                "open_space":`${openSpace} acre`,
                "number_of_towers": noOfTower,
                "power_backup":`${powerBackUp}KWT`,
                "power_backup_capacity":`${powerBackUpCapacity}KWT`,
                "show_price_on_website":showPriceInWebsite,
                "salient_features":silentFeature.toString,
                "linked_project_id":linkedProjectId,
                "rera_sub_category":reraSubCategory,
                "rera_registration_number":reraRegistrationNo,
                "registration_date":registrationDate,
                "expiry_date":expiryDate,
                "rera_project_link": reraProjectLink,
                "developer_confirmation":developerConfirmation
            }

            const addProject = await addProjects(data);
            if(addProject?.success === true ){
  
                setShowSnackBar(true);
                setSnackBarMessage("Project have been created Successfully !")
                handleResetFormPage();
            } else {
                setShowSnackBar(true);
                setSnackBarMessage("Something Went Wrong ! ")
            }
     
        }

        const handleResetFormPage= () => {
            
            setProjectName("");
            setProjectDisplayName("");
            setBuilderName("");
            setBuilderDisplayName("");
            setStateName("");
            setCountryName("");
            setCityName("");
            setLocality("");
            setSuburbs("");
            setProjectDescription("");
            setCommercialDescription("");
            setProjectAddress("");
            setProjectComments("");
            setSourceOfInfo("");
            setPropertyTypeValue("");
            setLatitude("");
            setLongitude("");
            setProjectStatusValue("");
            setPreLauncedDate("");
            setLauncedDate("")
            setPromisedCompletionDate("");
            setBankLists("");
            setApplicationFormPdf("");
            setApplicationFormLink("");
            setApprovals("");
            setProjectSize("");
            setOpenSpace("");
            setNoOfTower("");
            setPowerBackUp("");
            setPowerBackUpCapacity("");
            setShowPriceInWebsite("");
            setSilentFeature([]);
            setLinkedProjectId("");
            setReraSubCategory("");
            setReraRegistrationNo("");
            setExpiryDate("");
            setRegistrationDate("");
            setReraProjectLink("");
            setDeveloperConfirmation("");

            setProjectNameError("");
            setProjectDisplayNameError("");
            setBuilderDisplayNameError("");
            setBuilderNameError("");
            setCityNameError("");
            setCountryNameError("");
            setSuburbsError("");
            setLocalityError("");
            setStateNameError("");
            setProjectDescriptionError("");
            setCommercialDescriptionError("");
            setProjectAddressError("");
            setProjectCommentsError("");
            setSourceOfInfoError("");
            setPropertyTypeValueError("");
            setLatitudeError("");
            setLongitudeError("");
            setProjectStatusValueError("");
            setPreLauncedDateError("");
            setLauncedDateError("")
            setPromisedCompletionDateError("");
            setBankListsError("");
            setApplicationFormPdfError("");
            setApplicationFormLinkError("");
            setApprovalsError("");
            setProjectSizeError("");
            setOpenSpaceError("");
            setNoOfTowerError("");
            setPowerBackUpError("");
            setPowerBackUpCapacityError("");
            setShowPriceInWebsiteError("");
            setSilentFeatureError([]);
            setLinkedProjectIdError("");
            setReraSubCategoryError("");
            setReraRegistrationNoError("");
            setExpiryDateError("");
            setRegistrationDateError("");
            setReraProjectLinkError("");
            setDeveloperConfirmationError("");
   
        }

        const handleAmenitiesChange = (e:any) => {
            let currentData = silentFeature;
            if( e.target.checked === true){
              setSilentFeature([...currentData, e.target.value])
            }else {
  
              currentData = currentData.filter(function(item:any) {
                return item !== e.target.value
            })
            setSilentFeature(currentData) 
            }
  
  
          }

          const action = (
            <Button onClick = {handleClose} color="secondary" size="small">
              close
            </Button>
          );
        
        
        
        return (
            <>
            <Snackbar
  anchorOrigin={{ vertical:'top', horizontal:'center' }}
  open={showSnackBar}
  autoHideDuration={5000}
  action={action}
  message={snackBarMessgae}
/>
           
            <div className={`card ${className}`}>
            {/* begin::Header */}
            <div className='card-header border-0 pt-5'>
                <h1 className='card-title align-items-start flex-column'>
                Add Project Detail           
                </h1>
              
            </div>
            {/* end::Header */}
            {/* begin::Body */}
            <div className='card-body py-3'>
                {/* begin::Table container */}
                <div className="row">
                <div className="col" >

                <div className="add_property-group" style={{ marginTop: "30px" }}>
                

                    <TextField
                            required
                            id="outlined-required"
                            label="Project Name"
                            variant="outlined"
                            className="age_property"
                            value={projectName}
                            onChange={(e) => {
                              setProjectName(e.target.value);
                              setProjectNameError("");
                            }}
                            error={projectNameError ? true : false}
                            helperText={projectNameError}
                           
                            InputLabelProps={{
                            style: {
                                width: "100%",
                                fontWeight: 400,
                                fontSize: "16px",
                                lineHeight: "20px",
                                color: "rgb(191, 192, 198)",
                            }, // Add your styles here
                            }}
                        />
                 </div>
                 <div className="add_property-group" style={{ marginTop: "30px" }}>
                

                <TextField
                        required
                        id="outlined-required"
                        label="Project Display Name"
                        variant="outlined"
                        className="age_property"
                        value={projectDisplayName}
                        onChange={(e) => {
                          setProjectDisplayName(e.target.value);
                          setProjectDisplayNameError("");
                        }}
                        error={projectDisplayNameError ? true : false}
                        helperText={projectDisplayNameError}
                        InputLabelProps={{
                        style: {
                            width: "100%",
                            fontWeight: 400,
                            fontSize: "16px",
                            lineHeight: "20px",
                            color: "rgb(191, 192, 198)",
                        }, // Add your styles here
                        }}
                    />
             </div>
             <div className="add_property-group" style={{ marginTop: "30px" }}>
                

                <TextField
                        required
                        id="outlined-required"
                        label="Builder Name"
                        variant="outlined"
                        className="age_property"
                        value={builderName}
                        onChange={(e) => {
                          setBuilderName(e.target.value);
                          setBuilderNameError("");
                        }}
                        error={builderNameError ? true : false}
                        helperText={builderNameError}
                
                        InputLabelProps={{
                        style: {
                            width: "100%",
                            fontWeight: 400,
                            fontSize: "16px",
                            lineHeight: "20px",
                            color: "rgb(191, 192, 198)",
                        }, // Add your styles here
                        }}
                    />
             </div>
             <div className="add_property-group" style={{ marginTop: "30px" }}>
                

                <TextField
                        required
                        id="outlined-required"
                        label="Builder Display Name"
                        variant="outlined"
                        className="age_property"
                        value={builderDisplayName}
                        onChange={(e) => {
                          setBuilderDisplayName(e.target.value);
                          setBuilderDisplayNameError("");
                        }}
                        error={builderDisplayNameError ? true : false}
                        helperText={builderDisplayNameError}
                  
                        InputLabelProps={{
                        style: {
                            width: "100%",
                            fontWeight: 400,
                            fontSize: "16px",
                            lineHeight: "20px",
                            color: "rgb(191, 192, 198)",
                        }, // Add your styles here
                        }}
                    />
             </div>
             <div className='row'>
             <div className="col-xl-4">
             <div className="add_property-group" style={{ marginTop: "30px" }}>
                

                <TextField
                        required
                        id="outlined-required"
                        label="State"
                        variant="outlined"
                        className="age_property"
                        value={stateName}
                        onChange={(e) => {
                          setStateName(e.target.value);
                          setStateNameError("");
                        }}
                        error={stateNameError ? true : false}
                        helperText={stateNameError}
                        InputLabelProps={{
                        style: {
                            width: "100%",
                            fontWeight: 400,
                            fontSize: "16px",
                            lineHeight: "20px",
                            color: "rgb(191, 192, 198)",
                        }, // Add your styles here
                        }}
                    />
             </div>
                    </div>
                    <div className="col-xl-4">
             <div className="add_property-group" style={{ marginTop: "30px" }}>
                

                <TextField
                        required
                        id="outlined-required"
                        label="Country"
                        variant="outlined"
                        className="age_property"
                        value={countryName}
                        onChange={(e) => {
                          setCountryName(e.target.value);
                          setCountryNameError("");
                        }}
                        error={countryNameError ? true : false}
                        helperText={countryNameError}
              
                        InputLabelProps={{
                        style: {
                            width: "100%",
                            fontWeight: 400,
                            fontSize: "16px",
                            lineHeight: "20px",
                            color: "rgb(191, 192, 198)",
                        }, // Add your styles here
                        }}
                    />
             </div>
                    </div>
                    <div className="col-xl-4">
             <div className="add_property-group" style={{ marginTop: "30px" }}>
                

                <TextField
                        required
                        id="outlined-required"
                        label="City"
                        variant="outlined"
                        className="age_property"
                        value={cityName}
                        onChange={(e) => {
                          setCityName(e.target.value);
                          setCityNameError("");
                        }}
                        error={cityNameError ? true : false}
                        helperText={cityNameError}
                  
                        InputLabelProps={{
                        style: {
                            width: "100%",
                            fontWeight: 400,
                            fontSize: "16px",
                            lineHeight: "20px",
                            color: "rgb(191, 192, 198)",
                        }, // Add your styles here
                        }}
                    />
             </div>
                    </div>
             </div>

             <div className='row'>
             <div className="col-xl-6">
             <div className="add_property-group" style={{ marginTop: "30px" }}>
                

                <TextField
                        required
                        id="outlined-required"
                        label="Locality"
                        variant="outlined"
                        className="age_property"
                        value={locality}
                        onChange={(e) => {
                          setLocality(e.target.value);
                          setLocalityError("");
                        }}
                        error={localityError ? true : false}
                        helperText={localityError}
                   
                        InputLabelProps={{
                        style: {
                            width: "100%",
                            fontWeight: 400,
                            fontSize: "16px",
                            lineHeight: "20px",
                            color: "rgb(191, 192, 198)",
                        }, // Add your styles here
                        }}
                    />
             </div>
                    </div>
                    <div className="col-xl-6">
             <div className="add_property-group" style={{ marginTop: "30px" }}>
                

                <TextField
                        required
                        id="outlined-required"
                        label="Suburb"
                        variant="outlined"
                        className="age_property"
                        value={suburbs}
                        onChange={(e) => {
                          setSuburbs(e.target.value);
                          setSuburbsError("");
                        }}
                        error={suburbsError ? true : false}
                        helperText={suburbsError}
                 
                        InputLabelProps={{
                        style: {
                            width: "100%",
                            fontWeight: 400,
                            fontSize: "16px",
                            lineHeight: "20px",
                            color: "rgb(191, 192, 198)",
                        }, // Add your styles here
                        }}
                    />
             </div>
                    </div>
                  
             </div>
            
            
          
             <div className="add_property-group" style={{ marginTop: "30px" }}>
                

                <TextField
                        required
                        id="outlined-required"
                        label="Project Address"
                        variant="outlined"
                        className="age_property"
                        value={projectAddress}
                        onChange={(e) => {
                          setProjectAddress(e.target.value);
                          setProjectAddressError("");
                        }}
                        error={projectAddressError ? true : false}
                        helperText={projectAddressError}

                        InputLabelProps={{
                        style: {
                            width: "100%",
                            fontWeight: 400,
                            fontSize: "16px",
                            lineHeight: "20px",
                            color: "rgb(191, 192, 198)",
                        }, // Add your styles here
                        }}
                    />
             </div>
             <div className="add_property-group" style={{ marginTop: "30px" }}>
                

                <TextField
                        required
                        id="outlined-required"
                        label="Project Description"
                        variant="outlined"
                        className="age_property"
                        value={projectDescription}
                        onChange={(e) => {
                          setProjectDescription(e.target.value);
                          setProjectDescriptionError("");
                        }}
                        error={projectDescriptionError ? true : false}
                        helperText={projectDescriptionError}
                      
                        InputLabelProps={{
                        style: {
                            width: "100%",
                            fontWeight: 400,
                            fontSize: "16px",
                            lineHeight: "20px",
                            color: "rgb(191, 192, 198)",
                        }, // Add your styles here
                        }}
                    />
             </div>

             <div className="add_property-group" style={{ marginTop: "30px" }}>
                

                <TextField
                        required
                        id="outlined-required"
                        label="Commercial Description"
                        variant="outlined"
                        className="age_property"
                        value={commercialDescription}
                        onChange={(e) => {
                          setCommercialDescription(e.target.value);
                          setCommercialDescriptionError("");
                        }}
                        error={commercialDescriptionError ? true : false}
                        helperText={commercialDescriptionError}
                        InputLabelProps={{
                        style: {
                            width: "100%",
                            fontWeight: 400,
                            fontSize: "16px",
                            lineHeight: "20px",
                            color: "rgb(191, 192, 198)",
                        }, // Add your styles here
                        }}
                    />
             </div>
             <div className="add_property-group" style={{ marginTop: "30px" }}>
                

                <TextField
                        required
                        id="outlined-required"
                        label="Project comments"
                        variant="outlined"
                        className="age_property"
                        value={projectComments}
                        onChange={(e) => {
                          setProjectComments(e.target.value);
                          setProjectCommentsError("");
                        }}
                        error={projectCommentsError ? true : false}
                        helperText={projectCommentsError}
                      
                        InputLabelProps={{
                        style: {
                            width: "100%",
                            fontWeight: 400,
                            fontSize: "16px",
                            lineHeight: "20px",
                            color: "rgb(191, 192, 198)",
                        }, // Add your styles here
                        }}
                    />
             </div>
             <div className="add_property-group" style={{ marginTop: "30px" }}>
                  <div className="label_for_label">
                    Silent Feature
                    <span className="mandatoryMarker">*</span>
                  </div>
                  
                  <div className="d-flex flex-wrap" style={{ gap: "16px" }}>
                    {/* {tenantTypeMenuItems.map((val, index) => {
                      return (
                        <RadioButtonBox
                          key={index}
                          label={val}
                          active={val === tenantTypeActive}
                          handleClick={() => {
                            settenantTypeActive(val);
                            setTenantTypeError("");
                          }}
                        />
                      );
                    })} */}
                    <div className='d-flex' style = {{marginTop:'4%'}}>
            {amenitieseMenuItems.map((val:any, index:any) => {
                  return ( <label className='form-check form-check-sm form-check-custom form-check-solid me-5'>
                <input 
                onChange = { handleAmenitiesChange}
                 className='form-check-input' 
                //  checked= {tenantTypeActiveValues.includes(val)}
                  type='checkbox' key = {index} value={val} />
                <span className='form-check-label'>{val}</span>
              </label>)})}
            </div>
                  </div>
                  {silentFeatureError && (
                    <div style={{ color: "#e02727", padding: "10px 0px" }}>
                      {silentFeatureError}
                    </div>
                  )}
                </div>

                <div className='row'>
             <div className="col-xl-4">
             <div className="add_property-group" style={{ marginTop: "30px" }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]}>
                      <DatePicker
                        label="Pre launched date"
                        className="data_container-component"
                        value={dayjs(preLauncedDate) }
                        onChange={(newValue: any) => setPreLauncedDate(newValue?.$d?.toISOString())}
                        slotProps={{
                          textField: {
                          error: false,
                          },
                          }}
                          format="DD-MM-YYYY"
                        
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                  {preLauncedDateError && (
                    <div style={{ color: "#e02727", padding: "10px 0px" }}>
                      {preLauncedDateError}
                    </div>
                  )}
                </div>
                    </div>
                    <div className="col-xl-4">
                    <div className="add_property-group" style={{ marginTop: "30px" }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]}>
                      <DatePicker
                        label="Launched date"
                        className="data_container-component"
                        value={dayjs(launcedDate) }
                        onChange={(newValue: any) => setLauncedDate(newValue?.$d?.toISOString())}
                        slotProps={{
                          textField: {
                          error: false,
                          },
                          }}
                        
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                  {launcedDateError && (
                    <div style={{ color: "#e02727", padding: "10px 0px" }}>
                      {launcedDateError}
                    </div>
                  )}
                </div>
                    </div>

                    <div className="col-xl-4">
                    <div className="add_property-group" style={{ marginTop: "30px" }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]}>
                      <DatePicker
                        label="Promised completion date"
                        className="data_container-component"
                        value={dayjs(promisedCompletionDate) }
                        onChange={(newValue: any) => setPromisedCompletionDate(newValue?.$d?.toISOString())}
                        slotProps={{
                          textField: {
                          error: false,
                          },
                          }}
                        
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                  {promisedCompletionDateError && (
                    <div style={{ color: "#e02727", padding: "10px 0px" }}>
                      {promisedCompletionDateError}
                    </div>
                  )}
                </div>
                    </div>
                  
             </div>
                
               

             

                <div className='mb-10'>
          <label className='form-label fw-semibold'>Property Type:</label>

          <div>
            <select
              className='form-select form-select-solid'
              data-kt-select2='true'
              data-placeholder='Select option'
              data-allow-clear='true'
              defaultValue={'Select'}
              value={propertyTypeValue} 
              onChange={(e) => setPropertyTypeValue(e.target.value)} 
            >
            <option value='Select'>Select</option>
            {propertyType.map( (x) => (
              <option value={x} >{x}</option>
            )
              
              )}  
             
             
            </select>
          </div>
        </div>
             <div className="add_property-group" style={{ marginTop: "30px" }}>
                

                <TextField
                        required
                        id="outlined-required"
                        label="Source of Informatiom"
                        variant="outlined"
                        className="age_property"
                        value={sourceOfInfo}
                        onChange={(e) => {
                          setSourceOfInfo(e.target.value);
                          setSourceOfInfoError("");
                        }}
                        error={sourceOfInfoError ? true : false}
                        helperText={sourceOfInfoError}
                      
                        InputLabelProps={{
                        style: {
                            width: "100%",
                            fontWeight: 400,
                            fontSize: "16px",
                            lineHeight: "20px",
                            color: "rgb(191, 192, 198)",
                        }, // Add your styles here
                        }}
                    />
             </div>

             <div className='mb-10'>
          <label className='form-label fw-semibold'>Project status:</label>

          <div>
            <select
              className='form-select form-select-solid'
              data-kt-select2='true'
              data-placeholder='Select option'
              data-allow-clear='true'
              defaultValue={'Select'}
              value={projectStatusValue} 
              onChange={(e) => setProjectStatusValue(e.target.value)} 
            >
            <option value='Select'>Select</option>
            {projectStatus.map( (x) => (
              <option value={x} >{x}</option>
            )
              
              )}  
             
             
            </select>
          </div>
        </div>
             <div className="add_property-group" style={{ marginTop: "30px" }}>
                

                <TextField
                        required
                        id="outlined-required"
                        label="Bank Lists"
                        variant="outlined"
                        className="age_property"
                        value={bankLists}
                        onChange={(e) => {
                          setBankLists(e.target.value);
                          setBankListsError("");
                        }}
                        error={bankListsError ? true : false}
                        helperText={bankListsError}
                      
                        InputLabelProps={{
                        style: {
                            width: "100%",
                            fontWeight: 400,
                            fontSize: "16px",
                            lineHeight: "20px",
                            color: "rgb(191, 192, 198)",
                        }, // Add your styles here
                        }}
                    />
             </div>
             <div className='mb-10'>
        

          <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Application Form PDF:</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={(e, value) => setApplicationFormPdf(value)}
      >
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="no" control={<Radio />} label="No" />

      </RadioGroup>
    </FormControl>
        </div>
             <div className="add_property-group" style={{ marginTop: "30px" }}>
                

                <TextField
                        required
                        id="outlined-required"
                        label="Application Form link"
                        variant="outlined"
                        className="age_property"
                        value={applicationFormLink}
                        onChange={(e) => {
                          setApplicationFormLink(e.target.value);
                          setApplicationFormLinkError("");
                        }}
                        error={applicationFormLinkError ? true : false}
                        helperText={applicationFormLinkError}
                     
                        InputLabelProps={{
                        style: {
                            width: "100%",
                            fontWeight: 400,
                            fontSize: "16px",
                            lineHeight: "20px",
                            color: "rgb(191, 192, 198)",
                        }, // Add your styles here
                        }}
                    />
             </div>
             <div className="add_property-group" style={{ marginTop: "30px" }}>
                

                <TextField
                        required
                        id="outlined-required"
                        label="Approval"
                        variant="outlined"
                        className="age_property"
                        value={approvals}
                        onChange={(e) => {
                          setApprovals(e.target.value);
                          setApprovalsError("");
                        }}
                        error={approvalsError ? true : false}
                        helperText={approvalsError}
                      
                        InputLabelProps={{
                        style: {
                            width: "100%",
                            fontWeight: 400,
                            fontSize: "16px",
                            lineHeight: "20px",
                            color: "rgb(191, 192, 198)",
                        }, // Add your styles here
                        }}
                    />
             </div>
             <div className="add_property-group" style={{ marginTop: "30px" }}>
                

                <TextField
                        required
                        id="outlined-required"
                        label="Project Size"
                        variant="outlined"
                        className="age_property"
                        value={projectSize}
                        onChange={(e) => {
                          setProjectSize(e.target.value);
                          setProjectSizeError("");
                        }}
                        error={projectSizeError ? true : false}
                        helperText={projectSizeError}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">acre</InputAdornment>
                          ),
                        }}
                        InputLabelProps={{
                        style: {
                            width: "100%",
                            fontWeight: 400,
                            fontSize: "16px",
                            lineHeight: "20px",
                            color: "rgb(191, 192, 198)",
                        }, // Add your styles here
                        }}
                    />
             </div>
             <div className="add_property-group" style={{ marginTop: "30px" }}>
                

                <TextField
                        required
                        id="outlined-required"
                        label="Open Space"
                        variant="outlined"
                        className="age_property"
                        value={openSpace}
                        onChange={(e) => {
                          setOpenSpace(e.target.value);
                          setOpenSpaceError("");
                        }}
                        error={openSpaceError ? true : false}
                        helperText={openSpaceError}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">acre</InputAdornment>
                          ),
                        }}
                        InputLabelProps={{
                        style: {
                            width: "100%",
                            fontWeight: 400,
                            fontSize: "16px",
                            lineHeight: "20px",
                            color: "rgb(191, 192, 198)",
                        }, // Add your styles here
                        }}
                    />
             </div>
             <div className="add_property-group" style={{ marginTop: "30px" }}>
                

                <TextField
                        required
                        id="outlined-required"
                        label="No of Towers"
                        variant="outlined"
                        className="age_property"
                        value={noOfTower}
                        onChange={(e) => {
                          setNoOfTower(e.target.value);
                          setNoOfTowerError("");
                        }}
                        error={noOfTowerError ? true : false}
                        helperText={noOfTowerError}
                       
                        InputLabelProps={{
                        style: {
                            width: "100%",
                            fontWeight: 400,
                            fontSize: "16px",
                            lineHeight: "20px",
                            color: "rgb(191, 192, 198)",
                        }, // Add your styles here
                        }}
                    />
             </div>
             <div className="add_property-group" style={{ marginTop: "30px" }}>
                

                <TextField
                        required
                        id="outlined-required"
                        label="Power Backup"
                        variant="outlined"
                        className="age_property"
                        value={powerBackUp}
                        onChange={(e) => {
                          setPowerBackUp(e.target.value);
                          setPowerBackUpError("");
                        }}
                        error={powerBackUpError ? true : false}
                        helperText={powerBackUpError}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">KWT</InputAdornment>
                          ),
                        }}
                        InputLabelProps={{
                        style: {
                            width: "100%",
                            fontWeight: 400,
                            fontSize: "16px",
                            lineHeight: "20px",
                            color: "rgb(191, 192, 198)",
                        }, // Add your styles here
                        }}
                    />
             </div>
             <div className="add_property-group" style={{ marginTop: "30px" }}>
                

                <TextField
                        required
                        id="outlined-required"
                        label="Power Backup Capitity"
                        variant="outlined"
                        className="age_property"
                        value={powerBackUpCapacity}
                        onChange={(e) => {
                          setPowerBackUpCapacity(e.target.value);
                          setPowerBackUpCapacityError("");
                        }}
                        error={powerBackUpCapacityError ? true : false}
                        helperText={powerBackUpCapacityError}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">KWT</InputAdornment>
                          ),
                        }}
                        InputLabelProps={{
                        style: {
                            width: "100%",
                            fontWeight: 400,
                            fontSize: "16px",
                            lineHeight: "20px",
                            color: "rgb(191, 192, 198)",
                        }, // Add your styles here
                        }}
                    />
             </div>
             <div className="add_property-group" style={{ marginTop: "30px" }}>
                

                <TextField
                        required
                        id="outlined-required"
                        label="Show Price on Webiste"
                        variant="outlined"
                        className="age_property"
                        value={showPriceInWebsite}
                        onChange={(e) => {
                          setShowPriceInWebsite(e.target.value);
                          setShowPriceInWebsiteError("");
                        }}
                        error={showPriceInWebsiteError ? true : false}
                        helperText={showPriceInWebsiteError}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">Cr.</InputAdornment>
                          ),
                        }}
                        InputLabelProps={{
                        style: {
                            width: "100%",
                            fontWeight: 400,
                            fontSize: "16px",
                            lineHeight: "20px",
                            color: "rgb(191, 192, 198)",
                        }, // Add your styles here
                        }}
                    />
             </div>

             <div className="add_property-group" style={{ marginTop: "30px" }}>
                

                <TextField
                        required
                        id="outlined-required"
                        label="RERA Sub Category"
                        variant="outlined"
                        className="age_property"
                        value={reraSubCategory}
                        onChange={(e) => {
                          setReraSubCategory(e.target.value);
                          setReraSubCategoryError("");
                        }}
                        error={reraSubCategoryError ? true : false}
                        helperText={reraSubCategoryError}
                       
                        InputLabelProps={{
                        style: {
                            width: "100%",
                            fontWeight: 400,
                            fontSize: "16px",
                            lineHeight: "20px",
                            color: "rgb(191, 192, 198)",
                        }, // Add your styles here
                        }}
                    />
             </div>

             <div className="add_property-group" style={{ marginTop: "30px" }}>
                

                <TextField
                        required
                        id="outlined-required"
                        label="Linked Project ID"
                        variant="outlined"
                        className="age_property"
                        value={linkedProjectId}
                        onChange={(e) => {
                          setLinkedProjectId(e.target.value);
                          setLinkedProjectIdError("");
                        }}
                        error={linkedProjectIdError ? true : false}
                        helperText={linkedProjectIdError}
                      
                        InputLabelProps={{
                        style: {
                            width: "100%",
                            fontWeight: 400,
                            fontSize: "16px",
                            lineHeight: "20px",
                            color: "rgb(191, 192, 198)",
                        }, // Add your styles here
                        }}
                    />
             </div>

        

             <div className="add_property-group" style={{ marginTop: "30px" }}>
                

                <TextField
                        required
                        id="outlined-required"
                        label="RERA Registration Number"
                        variant="outlined"
                        className="age_property"
                        value={reraRegistrationNo}
                        onChange={(e) => {
                          setReraRegistrationNo(e.target.value);
                          setReraRegistrationNoError("");
                        }}
                        error={reraRegistrationNoError ? true : false}
                        helperText={reraRegistrationNoError}
                      
                        InputLabelProps={{
                        style: {
                            width: "100%",
                            fontWeight: 400,
                            fontSize: "16px",
                            lineHeight: "20px",
                            color: "rgb(191, 192, 198)",
                        }, // Add your styles here
                        }}
                    />
             </div>
             <div className='row'>
       
                    <div className="col-xl-6">
                    <div className="add_property-group" style={{ marginTop: "30px" }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]}>
                      <DatePicker
                        label="Registration Date"
                        className="data_container-component"
                        value={dayjs(registrationDate) }
                        onChange={(newValue: any) => setRegistrationDate(newValue?.$d?.toISOString())}
                        slotProps={{
                          textField: {
                          error: false,
                          },
                          }}
                        
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                  {registrationDateError && (
                    <div style={{ color: "#e02727", padding: "10px 0px" }}>
                      {registrationDateError}
                    </div>
                  )}
                </div>
                    </div>

                    <div className="col-xl-6">
                    <div className="add_property-group" style={{ marginTop: "30px" }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]}>
                      <DatePicker
                        label="Expiry date"
                        className="data_container-component"
                        value={dayjs(expiryDate) }
                        onChange={(newValue: any) => setExpiryDate(newValue?.$d?.toISOString())}
                        slotProps={{
                          textField: {
                          error: false,
                          },
                          }}
                        
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                  {expiryDateError && (
                    <div style={{ color: "#e02727", padding: "10px 0px" }}>
                      {expiryDateError}
                    </div>
                  )}
                </div>
                    </div>
                  
             </div>
             <div className="add_property-group" style={{ marginTop: "30px" }}>
                

                <TextField
                        required
                        id="outlined-required"
                        label="RERA Project Link"
                        variant="outlined"
                        className="age_property"
                        value={reraProjectLink}
                        onChange={(e) => {
                          setReraProjectLink(e.target.value);
                          setReraProjectLinkError("");
                        }}
                        error={reraProjectLinkError ? true : false}
                        helperText={reraProjectLinkError}
                      
                        InputLabelProps={{
                        style: {
                            width: "100%",
                            fontWeight: 400,
                            fontSize: "16px",
                            lineHeight: "20px",
                            color: "rgb(191, 192, 198)",
                        }, // Add your styles here
                        }}
                    />
             </div>
             <div className='mb-10'>
     
    
        

        <FormControl>
    <FormLabel id="demo-row-radio-buttons-group-label">Developer Confirmation:</FormLabel>
    <RadioGroup
      row
      aria-labelledby="demo-row-radio-buttons-group-label"
      name="row-radio-buttons-group"
      onChange={(e, value) => setDeveloperConfirmation(value)}
    >
      <FormControlLabel value="yes" control={<Radio />} label="Yes" />
      <FormControlLabel value="no" control={<Radio />} label="No" />

    </RadioGroup>
  </FormControl>
     
        </div>

        <div className='d-flex justify-content-end'>
          <button
            type='reset'
            className={clsx('btn btn-sm btn-active-light-primary me-2')}
            data-kt-menu-dismiss='true'
            style={{
                display: "block",
                width: "20%",
                backgroundColor: "grey",
                color:'white'
            }}
            onClick={handleResetFormPage}
          >
            Reset
          </button>
        
          <button 
          onClick={handleAddProject} 
          className='btn btn-sm btn-primary' style={{
            display: "block",
            width: "20%",
        }} data-kt-menu-dismiss='true'>
            Add Project
          </button>
        </div>
                    </div>
                    </div>
                {/* end::Table container */}
            </div>
            {/* begin::Body */}
            </div>
            </>
        )
        }

        export {AddProjectFormPage}
