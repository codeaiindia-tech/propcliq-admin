import React, { FC, useState, useEffect } from 'react';
import { KTIcon } from '../../../_metronic/helpers';
import { ErrorMessage, Field } from 'formik';
import { TextField, Button, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Autocomplete from '@mui/material/Autocomplete';
import {SaveStep2, getPropertyDetailById} from "../../Apis/AddPropertyApiList";
import {getProjectList} from '../../Apis/ProjectAPIList';
import { X } from '@mui/icons-material';

const options = ['Option 1', 'Option 2'];
const Step2: FC<any> = (props:any) => {
    const [city, setCity] = useState<string>('');
    const [building, setBuilding] = useState<string | null>('');
    const [locality, setLocality] = useState<string>('');
    const [country, setCountry] = useState<string>('');
    const [stateValue, setStateValue] = useState<string>('');
    const [flatNo, setFlatNo] = useState<string>('');
    const [floorNo, setFloorNo] = useState<string>('');
    const [totalFloors, setTotalFloors] = useState<string>('');
    const [localityError, setLocalityError] = useState<string>('');
    const [stateError, setStateError] = useState<string>('');
    const [countryError, setCountryError] = useState<string>('');
    const [floorNoError, setFloorNoError] = useState<string>('');
    const [totalFloorsError, setTotalFloorsError] = useState<string>('');
  
    const [inputValue, setInputValue] = React.useState('');
    const [projectDetail, setProjectDetail] =  React.useState<any>();
    const [projectOption, setProjectOption] =  React.useState<any>([]);
    const [isProjectFlag, setIsProjectFlag] = React.useState<boolean>(false);
    const [isEdit, setIsEdit] = useState(false);

    const handleSubmit = () => {
        // Validate form fields
        let isValid = true;
        if (!locality) {
            setLocalityError('Please select a valid locality');
            isValid = false;
        } else {
            setLocalityError('');
        }

        if (!floorNo) {
            setFloorNoError('Please enter the floor no.');
            isValid = false;
        } else {
            setFloorNoError('');
        }

        
        if (!stateValue) {
            setStateError('Please enter State');
            isValid = false;
        } else {
            setStateError('');
        }

        if (!country) {
            setCountry('Please enter Country');
            isValid = false;
        } else {
            setCountry('');
        }


        if (totalFloors && isNaN(Number(totalFloors))) {
            setTotalFloorsError('Please enter valid total floors');
            isValid = false;
        } else {
            setTotalFloorsError('');
        }

        // Proceed with form submission if valid
        if (isValid) {
            // Perform form submission logic here
            const url: URL = new URL(window.location.href);
            const params: URLSearchParams = url.searchParams;
            const propertyId: any = params.get('id');
           const data = {
                "property_id": propertyId,
                "address_details": {
                    "area": city,
                    "project": building,
                    "locality": locality,
                    "flat_no": flatNo,
                    "floor_no":floorNo,
                    "total_floors": totalFloors
                }
            }
                

         const saveData =  SaveStep2(data);
         props.handleSubmitStep2();
            console.log('Form submitted successfully');
        }
    };

    const getPropertyDetail = async() => {
        const url: URL = new URL(window.location.href);
        const params: URLSearchParams = url.searchParams;
        const propertyId: any = params.get('id');
        const fetchPropertyDetail = await getPropertyDetailById({id:propertyId});
        console.log('getPropertyList',fetchPropertyDetail)
        if(fetchPropertyDetail?.address_details) {
            const {project, flat_no, floor_no, total_floors} = fetchPropertyDetail?.address_details;
            setInputValue(project)
            setBuilding(project);
            setTotalFloors(total_floors);
            setFloorNo(floor_no);
            setFlatNo(flat_no);
            setIsEdit(true);
        }
       
      }
  
      const initalState = () => {
        console.log('2')
       
      }

    useEffect(() =>  {
        const url: URL = new URL(window.location.href);
        const params: URLSearchParams = url.searchParams;
        const propertyId: any = params.get('id');

        if(propertyId){

          getPropertyDetail();
        }  else {

          initalState();
        }     
       },[])

       const getProjectDetailList = async() => {
        const fetchProjectDetail = await getProjectList();
        setProjectDetail(fetchProjectDetail)
        const projectNameList:any[] = [];
        projectNameList.push("No Project found");
        fetchProjectDetail.map((x:any) => {
            projectNameList.push(x.name);
        })        
        setProjectOption(projectNameList)
       }

       useEffect(() =>  {
        getProjectDetailList();    
       },[])

       useEffect(() =>  {
        if(inputValue === 'No Project found'){
            setIsProjectFlag(false)
        } else {
           const projectByName =  projectDetail?.find((x:any) => x.name === inputValue);
           if (projectByName) {
            const  {city, country,locality, state} : any =   projectByName
            setIsProjectFlag(true)
            setCity(city);
            setLocality(locality);
            setCountry(country);
            setStateValue(state);
           }
           

        }
         
       },[inputValue])

       

    return (
        <div className="w-100">
            <h2 className="fw-bolder d-flex align-items-center text-gray-900">
                {isEdit ? 'Edit Address Details' : 'Add Address Details'} 
            </h2>
            <Autocomplete
        value={building}
        onChange={(event: any, newValue: string | null) => {
        setBuilding(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="cfree-solo-demo"
        options={projectOption}
        sx={{ width: 760}}
        style= {{marginBottom:'1%'}}
        renderInput={(params) => <TextField {...params} label="Search Project" />}
            />

{!isProjectFlag && (      <Button variant="contained" color="primary" onClick={handleSubmit} style={{ marginTop: '20px' }}>
              + Add Your Project
            </Button>)}
{isProjectFlag && (
<div>
            
            <TextField
            label="Search City"
            placeholder="Search City"
                variant="outlined"
                fullWidth
                value={city}
                onChange={(e) => setCity(e.target.value)}
                style={{ marginTop: '20px' }}
            />
            <TextField
                label="Locality"
                placeholder="Locality"
                variant="outlined"
                fullWidth
                required
                error={!!localityError}
                helperText={localityError}
                value={locality}
                onChange={(e) => setLocality(e.target.value)}
                style={{ marginTop: '20px' }}
            />
            <TextField
                label="Country"
                placeholder="Country"
                variant="outlined"
                fullWidth
                required
                error={!!countryError}
                helperText={countryError}
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                style={{ marginTop: '20px' }}
            />
              <TextField
                label="State"
                placeholder="State"
                variant="outlined"
                fullWidth
                required
                error={!!stateError}
                helperText={stateError}
                value={stateValue}
                onChange={(e) => setStateValue(e.target.value)}
                style={{ marginTop: '20px' }}
            />
            <TextField
                label="Flat No."
                placeholder="Flat No."
                variant="outlined"
                fullWidth
                value={flatNo}
                onChange={(e) => setFlatNo(e.target.value)}
                style={{ marginTop: '20px' }}
            />
            <TextField
                label="Floor No."
                placeholder="Floor No."
                variant="outlined"
                fullWidth
                required
                error={!!floorNoError}
                helperText={floorNoError}
                value={floorNo}
                onChange={(e) => setFloorNo(e.target.value)}
                style={{ marginTop: '20px' }}
            />
            <TextField
                label="Total Floors"
                placeholder="Total Floors"
                variant="outlined"
                fullWidth
                type="number"
                error={!!totalFloorsError}
                helperText={totalFloorsError}
                value={totalFloors}
                onChange={(e) => setTotalFloors(e.target.value)}
                style={{ marginTop: '20px' }}
            />

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
              onClick={handleSubmit}
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
             
                {isEdit ? "Next, Edit Photos" : "Next, Add Photos"} 
            </button>
          </div>
      
            </div>)}
        </div>
    );
};

export { Step2 };
