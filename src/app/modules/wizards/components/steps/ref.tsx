import { FC, useState, useEffect } from 'react';
import { KTIcon } from '../../../../../_metronic/helpers';
import { Formik, Form, ErrorMessage } from 'formik';
// import FormControl from "@mui/material/FormControl";
import { FormControl, FormLabel, RadioGroup, Radio, FormControlLabel, Box } from '@mui/material';
import RadioButtonBox from '../RadioBox/RadioBox';
import TextField from '@mui/material/TextField';
import DatePickerInput from './DatePicker';
import BasicForm from './BasicForm';
import { string } from 'yup';
import InputAdornment from '@mui/material/InputAdornment';
import { IconButton } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Select from 'react-select';
import SaveStep1 from '../../../../utils/authentication.tsx';
<<<<<<< HEAD
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Select from 'react-select';
import SaveStep1 from '../../../../utils/authentication.tsx';

const Step1: FC = (props: any) => {
  const propertyTypes = ['Residential', 'Commercial'];
  const lookingIntoMenuItems = ['Rent', 'Sell', 'PG/Co-living'];
  const propertyTypeGroupMenuItems = [
    'Apartment',
    'Independent Floor',
    'Independent House',
    'Villa',
    'Plot',
    'Agricultural Land',
  ];
  const bhkMenuItems = ['1RK', '1 BHK', '2 BHK', '3+BHK'];
  const bathRoomMenuItems = ['1', '2', '3', '4'];
  const balconyMenuItems = ['0', '1', '2', '3', '4'];
  const furnishTypeMenuItems = ['Fully Furnished', 'Semi Furnished', 'Unfurnished'];
  const amenitieseMenuItems = [
    { value: 'Dining', label: 'Dining Table' },
    { value: 'Sofa', label: 'Sofa' },
    { value: 'Fridge', label: 'Fridge' },
  ];
  const coveredParkingMenuItems = ['1', '2', '3', '3+'];
  const openParkingMenuItems = ['1', '2', '3', '3+'];
  const tenantTypeMenuItems = ['Family', 'Bachelors', 'Company'];
  const mainTenance = ['Include in rent', 'Separate'];
  const securityDeposit = ['None', '1 month', '2 month', 'Custom'];
  const lockInPeriod = ['None', '1 month', '2 month', 'Custom'];
  const broKerage = ['None', '1 month', '2 month', 'Custom'];

  // Property Type
  const [propertyTypeMenu, setPropertyTypeMenu] = useState(propertyTypes);
  const [propertyTypeActive, setPropertyTypeActive] = useState('');
  const [propertyTypeError, setPropertyTypeError] = useState('');
  // Looking Into Menu
  const [lookingIntoMenu, setLookingInto] = useState(lookingIntoMenuItems);
  const [lookingIntoActive, setLookingIntoActive] = useState('');
  const [lookingIntoError, setLookingIntoError] = useState('');
  // PropertyTypeGroup Menu
  const [propertyTypeGroupMenu, setPropertyTypeGroupMenu] = useState(propertyTypeGroupMenuItems);
  const [propertyTypeGroupActive, setPropertyTypeGroupActive] = useState('');
  const [propertyTypeGroupError, setPropertyTypeGroupError] = useState('');
  
  // BHK Menu
  const [bhkMenu, setBhkMenu] = useState(bhkMenuItems);
  const [bhkActive, setBhkActive] = useState('');
  const [bhkError, setBhkError] = useState('');
  //  BathRoom Menu
  const [bathRoomMenu, setBathRoomMenu] = useState(bathRoomMenuItems);
  const [bathRoomActive, setBathRoomActive] = useState('');
  const [bathRoomError, setBathRoomError] = useState('');
  // Balcony Menu
  const [balconyMenu, setBalconyMenu] = useState(balconyMenuItems);
  const [balconyActive, setBalconyActive] = useState('');
  const [balconyError, setBalconyError] = useState('');
  //  Furnish Type Menu
  const [furnishTypeMenu, setFurnishTypeMenu] = useState(furnishTypeMenuItems);
  const [furnishTypeActive, setFurnishTypeActive] = useState('');
  const [furnishTypeError, setFurnishTypeError] = useState('');
  // Amenties Menu
  const [amentiesError, setAmentiestError] = useState('');
  
  // Covered Parking Menu
  const [coveredParkingMenu, setCoveredParkingMenu] = useState(coveredParkingMenuItems);
  const [coveredParkingActive, setCoveredParkingActive] = useState('');
  const [coveredParkingError, setCoveredParkingeError] = useState('');
  
  // Open Parking Menu
  const [openParkingMenu, setOpenParkingMenuMenu] = useState(openParkingMenuItems);
  const [openParkingMenuActive, setOpenParkingMenuActive] = useState('');
  const [openParkingError, setOpenParkingError] = useState('');
  //  Tenant Type
  const [tenantTypeActive, settenantTypeActive] = useState('');
  const [tenantTypeError, setTenantTypeError] = useState('');
  // Maintenance Type
  const [mainTenanceActive, setMainTenanceActive] = useState('');
  const [mainTenanceError, setMainTenanceError] = useState('');
  
  // Security Deposit Type
  const [securityDepositActive, setSecurityDepositActive] = useState('');
  const [securityDepositError, setSecurityDepositError] = useState('');
  // Lock In Period Type
  const [lockInPeriodActive, setLockInPeriodActive] = useState('');
  const [lockInPeriodError, setLockInPeriodError] = useState('');
  
  // Brokerrage Active Type
  const [broKerageActive, setBroKerageActive] = useState('');
  const [broKerageError, setBroKerageError] = useState('');
  // Built Up Area
  const [builtUpArea, setBuiltUpArea] = useState('');
  const [builtUpError, setBuiltUpError] = useState('');
  // Calender Menu
  const [availableFrom, setAvailableFrom] = useState('');
  const [availableFromDateError, setAvailableFromDateError] = useState('');
=======
>>>>>>> edb648a3f2cb701cf50690396aab14aab8d7283a

const Step1: FC<any> = (props: any) => {
    const propertyTypes = ['Residential', 'Commercial'];
    const lookingIntoMenuItems = ['Rent', 'Sell', 'PG/Co-living'];
    const commPropertyTypeGroupMenuItems = ['Office', 'Retail Shop', 'Showroom', 'Warehouse', 'Plot', 'Others'];
    const propertyTypeGroupMenuItems = ['Apartment', 'Independent Floor', 'Independent House', 'Villa', 'Plot', 'Agricultural Land'];
    const bhkMenuItems = ['1RK', '1 BHK', '2 BHK', '3+BHK'];
    const bathRoomMenuItems = ['1', '2', '3', '4'];
    const balconyMenuItems = ['0', '1', '2', '3', '4'];
    const furnishTypeMenuItems = ['Fully Furnished', 'Semi Furnished', 'Unfurnished'];
    const coveredParkingMenuItems = ['1', '2', '3', '3+'];
    const openParkingMenuItems = ['1', '2', '3', '3+'];
    const tenantTypeMenuItems = ['Family', 'Bachelors', 'Company'];
    const mainTenance = ['Include in rent', 'Separate'];
    const securityDeposit = ['None', '1 month', '2 month', 'Custom'];
    const lockInPeriod = ['None', '1 month', '2 month', 'Custom'];
    const broKerage = ['None', '1 month', '2 month', 'Custom'];
    // Property Type
    const [propertyTypeMenu, setPropertyTypeMenu] = useState(propertyTypes);
    const [propertyTypeActive, setPropertyTypeActive] = useState('Residential');
    const [propertyTypeError, setPropertyTypeError] = useState('');
    // Looking Into Menu
    const [lookingIntoMenu, setLookingInto] = useState(lookingIntoMenuItems);
    const [lookingIntoActive, setLookingIntoActive] = useState('');
    const [lookingIntoError, setLookingIntoError] = useState('');
    // PropertyTypeGroup Menu
    const [propertyTypeGroupMenu, setPropertyTypeGroupMenu] = useState(propertyTypeGroupMenuItems);
    const [commPropertyTypeGroupMenu, setCommPropertyTypeGroupMenu] = useState(commPropertyTypeGroupMenuItems);
    const [propertyTypeGroupActive, setPropertyTypeGroupActive] = useState('');
    const [commPropertyTypeGroupActive, setCommPropertyTypeGroupActive] = useState('');
    const [propertyTypeGroupError, setPropertyTypeGroupError] = useState('');
    // BHK Menu
    const [bhkMenu, setBhkMenu] = useState(bhkMenuItems);
    const [bhkActive, setBhkActive] = useState('');
    const [bhkError, setBhkError] = useState('');
    //  BathRoom Menu
    const [bathRoomMenu, setBathRoomMenu] = useState(bathRoomMenuItems);
    const [bathRoomActive, setBathRoomActive] = useState('');
    const [bathRoomError, setBathRoomError] = useState('');
    // Balcony Menu
    const [balconyMenu, setBalconyMenu] = useState(balconyMenuItems);
    const [balconyActive, setBalconyActive] = useState('');
    const [balconyError, setBalconyError] = useState('');
    //  Furnish Type Menu
    const [furnishTypeMenu, setFurnishTypeMenu] = useState(furnishTypeMenuItems);
    const [furnishTypeActive, setFurnishTypeActive] = useState('');
    const [furnishTypeError, setFurnishTypeError] = useState('');
    // Covered Parking Menu
    const [coveredParkingMenu, setCoveredParkingMenu] = useState(coveredParkingMenuItems);
    const [coveredParkingActive, setCoveredParkingActive] = useState('');
    const [coveredParkingError, setCoveredParkingeError] = useState('');
    // Open Parking Menu
    const [openParkingMenu, setOpenParkingMenuMenu] = useState(openParkingMenuItems);
    const [openParkingMenuActive, setOpenParkingMenuActive] = useState('');
    const [openParkingError, setOpenParkingError] = useState('');
    //  Tenant Type
    const [tenantTypeActive, settenantTypeActive] = useState('');
    const [tenantTypeError, setTenantTypeError] = useState('');
    // Maintenance Type
    const [mainTenanceActive, setMainTenanceActive] = useState('');
    const [mainTenanceError, setMainTenanceError] = useState('');
    // Security Deposit Type
    const [securityDepositActive, setSecurityDepositActive] = useState('');
    const [securityDepositError, setSecurityDepositError] = useState('');
    // Lock In Period Type
    const [lockInPeriodActive, setLockInPeriodActive] = useState('');
    const [lockInPeriodError, setLockInPeriodError] = useState('');
    // Brokerrage Active Type
    const [broKerageActive, setBroKerageActive] = useState('');
    const [broKerageError, setBroKerageError] = useState('');
    // Built Up Area
    const [builtUpArea, setBuiltUpArea] = useState('');
    const [builtUpError, setBuiltUpError] = useState('');
    // Calender Menu
    const [showCalender, setShowCalender] = useState(false);

    useEffect(() => {
        let look = propertyTypeActive === 'Commercial' ? lookingIntoMenuItems.filter((item) => item !== 'PG/Co-living') : lookingIntoMenuItems;
        setLookingInto(look);
    }, [propertyTypeActive]);
    useEffect(() => {
        const filteredPropertyTypeGroupMenuItems =
            lookingIntoActive === 'Rent'
                ? propertyTypeGroupMenuItems.filter((item) => item !== 'Plot' && item !== 'Agricultural Land')
                : propertyTypeGroupMenuItems;
        setPropertyTypeGroupMenu(filteredPropertyTypeGroupMenuItems);
    }, [lookingIntoActive]);

    const handleInsertCoveredParkingMenuItems = () => {
        setCoveredParkingMenu([
            ...coveredParkingMenuItems.slice(0, 2), // Keep 1RK to 3 BHK
            '3 ',
            '4 ',
            '5 ',
            '6 ',
            '7 ',
            '8 ',
            '9 ',
            '10 ',
        ]);
    };
    const handleInsertOpenParkingMenuItems = () => {
        setOpenParkingMenuMenu([
            ...openParkingMenuItems.slice(0, 2), // Keep 1RK to 3 BHK
            '3 ',
            '4 ',
            '5 ',
            '6 ',
            '7 ',
            '8 ',
            '9 ',
            '10 ',
        ]);
    };
    const handleInsertBHKMenuItems = () => {
        if (!bhkMenuItems.includes('3 BHK')) {
            setBhkMenu([
                ...bhkMenuItems.slice(0, 3), // Keep 1RK to 3 BHK
                '3 BHK',
                '4 BHK',
                '5 BHK',
                '6 BHK',
                '7 BHK',
                '8 BHK',
                '9 BHK',
                '10 BHK',
            ]);
        }
    };
    useEffect(() => {
        handleInserBathroomBalconyMenuItems();
    }, [bhkActive]);

<<<<<<< HEAD
  const handleSubmitFirstStep = () => {
    console.log('availableFrom', availableFrom);
    const errors = {
      propertyTypeActive: !propertyTypeActive ? 'Please select the category' : '',
      lookingIntoActive: !lookingIntoActive ? 'Please select the purpose' : '',
      propertyTypeGroupActive: !propertyTypeGroupActive ? 'Please select the property type' : '',
      bhkActive: !bhkActive ? 'Please select the BHK' : '',
      bathRoomActive: !bathRoomActive ? 'Please select the bathroom count' : '',
      balconyActive: !balconyActive ? 'Please select the balcony count' : '',
      furnishTypeActive: !furnishTypeActive ? 'Please select the furnish type' : '',
      coveredParkingActive: !coveredParkingActive ? 'Please select the covered parking' : '',
      openParkingMenuActive: !openParkingMenuActive ? 'Please select the open parking' : '',
      tenantTypeActive: !tenantTypeActive ? 'Please select the select tenant type' : '',
      mainTenanceActive: !mainTenanceActive ? 'Please select the maintenance' : '',
      securityDepositActive: !securityDepositActive ? 'Please select the security deposit' : '',
      lockInPeriodActive: !lockInPeriodActive ? 'Please select the lock-in period' : '',
      broKerageActive: !broKerageActive ? 'Please select the brokerage' : '',
      builtUpArea: !builtUpArea ? 'Saleable area should be between 150 and 1500' : '',
      // availableFrom: !availableFrom ? 'Please enter valid date' : '',
    };

    // Update state with errors
    setPropertyTypeError(errors.propertyTypeActive);
    setLookingIntoError(errors.lookingIntoActive);
    setPropertyTypeGroupError(errors.propertyTypeGroupActive);
    setBhkError(errors.bhkActive);
    setBathRoomError(errors.bathRoomActive);
    setBalconyError(errors.balconyActive);
    setFurnishTypeError(errors.furnishTypeActive);
    setCoveredParkingeError(errors.coveredParkingActive);
    setOpenParkingError(errors.openParkingMenuActive);
    setTenantTypeError(errors.tenantTypeActive);
    setMainTenanceError(errors.mainTenanceActive);
    setSecurityDepositError(errors.securityDepositActive);
    setLockInPeriodError(errors.lockInPeriodActive);
    setBroKerageError(errors.broKerageActive);
    setBuiltUpError(errors.builtUpArea);
    // setAvailableFromDateError(errors.availableFrom);
    // Check if any error exists
    for (const error in errors) {
      if (errors[error]) {
        return;
      }
    }
    const data = {
      category: propertyTypeActive,
      service: lookingIntoActive,
      property_type: propertyTypeGroupActive,
      age_of_property: '10',
      bhk: '3',
      bathroom: '3',
      balcony: '4',
      furnish_type: 'Fully-furnish',
      additional_furnish_type: ['AC', 'Geyser'],
      covered_parking: '1',
      open_parking: '1',
      preferred_tenant_type: 'Family',
      available_from: '01/02/2024',
      monthly_rent: '30000',
      maintenance_charges: '6500',
      security_deposit: '1 Month',
      lock_in_period: '6 Months',
      brokerage: '30 days',
      built_up_area: '1000 sq .ft.',
      carpet_area: '1000 sq. ft.',
      additional_details: {
        parking_charges: 'include in rent',
        painting_charges: '1 Month',
        facing: 'North',
        address: 'Greater Noida',
        servant_room: 'No',
        rera_no: 'RERA001002003',
        property_description: 'Near Yamuna Experessway',
      },
    };
    SaveStep1(data);
    props.handleSubmitStep1();
  };

  return (
    <div style={{ padding: '0px 50px' }}>
      <h2 className='fw-bolder d-flex align-items-center text-gray-900'>Add Property Details</h2>
      <div className='row'>
        <div className='col'>
          <div className='add_property-group' style={{ marginTop: '30px' }}>
            <div className='label_for_label'>
              PropertyType <span className='mandatoryMarker'>*</span>
            </div>
            <div className='d-flex' style={{ gap: '16px' }}>
              {propertyTypeMenu.map((val) => {
                return (
                  <RadioButtonBox
                    label={val}
                    handleClick={() => {
                      setPropertyTypeActive(val);
                      setPropertyTypeError('');
                    }}
                    active={val === propertyTypeActive}
                  />
                );
              })}
            </div>
            {propertyTypeError && (
              <div style={{ color: '#e02727', padding: '10px 0px' }}>{propertyTypeError}</div>
            )}
          </div>
          <div className='add_property-group' style={{ marginTop: '30px' }}>
            <div className='label_for_label'>
              Looking to <span className='mandatoryMarker'>*</span>
            </div>
            <div className='d-flex' style={{ gap: '16px' }}>
              {lookingIntoMenu.map((val, index) => {
                return (
                  <RadioButtonBox
                    key={index}
                    label={val}
                    active={val === lookingIntoActive}
                    handleClick={() => {
                      setLookingIntoActive(val);
                      setLookingIntoError('');
                    }}
                  />
                );
              })}
            </div>
            {lookingIntoError && (
              <div style={{ color: '#e02727', padding: '10px 0px' }}>{lookingIntoError}</div>
            )}
          </div>
          <div className='add_property-group' style={{ marginTop: '30px' }}>
            <div className='label_for_label'>
              PropertyType <span className='mandatoryMarker'>*</span>
            </div>
            <div className='d-flex flex-wrap' style={{ gap: '16px' }}>
              {propertyTypeGroupMenu.map((val, index) => {
                return (
                  <RadioButtonBox
                    key={index}
                    label={val}
                    active={val === propertyTypeGroupActive}
                    handleClick={() => {
                      setPropertyTypeGroupActive(val);
                      setPropertyTypeGroupError('');
                    }}
                  />
                );
              })}
            </div>
            {propertyTypeGroupError && (
              <div style={{ color: '#e02727', padding: '10px 0px' }}>{propertyTypeGroupError}</div>
            )}
          </div>
          {lookingIntoActive === 'Rent' && (
            <div className='add_property-group' style={{ marginTop: '30px' }}>
              <TextField
                label='Age of Property (in years)'
                variant='standard'
                fullWidth
                required
                className='age_property'
                inputProps={{ maxLength: 2 }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton aria-label='info' edge='end'>
                        <InfoOutlinedIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{
                  style: {
                    width: '100%',
                    fontWeight: 400,
                    fontSize: '18px',
                    lineHeight: '20px',
                    color: 'rgb(191, 192, 198)',
                  },
                }}
              />
            </div>
          )}
          <div className='add_property-group' style={{ marginTop: '30px' }}>
            <div className='label_for_label'>
              BHK <span className='mandatoryMarker'>*</span>
            </div>
            <div className='d-flex flex-wrap' style={{ gap: '16px' }}>
              {bhkMenu.map((val, index) => {
                return (
                  <RadioButtonBox
                    key={index}
                    label={val}
                    active={val === bhkActive}
                    handleClick={() => {
                      val !== '3+BHK'
                        ? (setBhkActive(val), setBhkError(''))
                        : handleInsertBHKMenuItems();
                    }}
                  />
                );
              })}
            </div>
            {bhkError && <div style={{ color: '#e02727', padding: '10px 0px' }}>{bhkError}</div>}
          </div>
          <div className='add_property-group' style={{ marginTop: '30px' }}>
            <div className='label_for_label'>
              Bathroom <span className='mandatoryMarker'>*</span>
            </div>
            <div className='d-flex flex-wrap' style={{ gap: '16px' }}>
              {bathRoomMenu.map((val, index) => {
                console.log(val, 'values');
                return (
                  <RadioButtonBox
                    key={index}
                    label={val}
                    active={val === bathRoomActive}
                    handleClick={() => {
                      setBathRoomActive(val);
                      setBathRoomError('');
                    }}
                  />
                );
              })}
            </div>
            {bathRoomError && (
              <div style={{ color: '#e02727', padding: '10px 0px' }}>{bathRoomError}</div>
            )}
          </div>
          <div className='add_property-group' style={{ marginTop: '30px' }}>
            <div className='label_for_label'>
              Balcony <span className='mandatoryMarker'>*</span>
            </div>
            <div className='d-flex flex-wrap' style={{ gap: '16px' }}>
              {balconyMenu.map((val, index) => {
                return (
                  <RadioButtonBox
                    key={index}
                    label={val}
                    active={val === balconyActive}
                    handleClick={() => {
                      setBalconyActive(val);
                      setBalconyError('');
                    }}
                  />
                );
              })}
            </div>
            {balconyError && (
              <div style={{ color: '#e02727', padding: '10px 0px' }}>{balconyError}</div>
            )}
          </div>
          <div className='add_property-group' style={{ marginTop: '30px' }}>
            <div className='label_for_label'>
              Furnish Type <span className='mandatoryMarker'>*</span>
            </div>
            <div className='d-flex flex-wrap' style={{ gap: '16px' }}>
              {furnishTypeMenu.map((val, index) => {
                return (
                  <RadioButtonBox
                    key={index}
                    label={val}
                    active={val === furnishTypeActive}
                    handleClick={() => {
                      setFurnishTypeActive(val);
                      setFurnishTypeError('');
                    }}
                  />
                );
              })}
            </div>
            {furnishTypeError && (
              <div style={{ color: '#e02727', padding: '10px 0px' }}>{furnishTypeError}</div>
            )}
          </div>
          <div className='add_property-group' style={{ marginTop: '30px' }}>
            <div className='label_for_label py-6'>Add Furnishings / Amenities</div>
            <Select options={amenitieseMenuItems} isMulti />
            {furnishTypeError && (
              <div style={{ color: '#e02727', padding: '10px 0px' }}>{furnishTypeError}</div>
            )}
          </div>
          <div className='add_property-group' style={{ marginTop: '30px' }}>
            <div className='label_for_label'>
              Covered Parking <span className='mandatoryMarker'>*</span>
            </div>
            <div className='d-flex flex-wrap' style={{ gap: '16px' }}>
              {coveredParkingMenu.map((val, index) => {
                return (
                  <RadioButtonBox
                    key={index}
                    label={val}
                    active={val === coveredParkingActive}
                    handleClick={() => {
                      val !== '3+'
                        ? (setCoveredParkingActive(val), setCoveredParkingeError(''))
                        : handleInsertCoveredParkingMenuItems();
                    }}
                  />
                );
              })}
            </div>
            {coveredParkingError && (
              <div style={{ color: '#e02727', padding: '10px 0px' }}>{coveredParkingError}</div>
            )}
          </div>
          <div className='add_property-group' style={{ marginTop: '30px' }}>
            <div className='label_for_label'>
              Open Parking<span className='mandatoryMarker'>*</span>
            </div>
            <div className='d-flex flex-wrap' style={{ gap: '16px' }}>
              {openParkingMenu.map((val, index) => {
                return (
                  <RadioButtonBox
                    key={index}
                    label={val}
                    active={val === openParkingMenuActive}
                    handleClick={() => {
                      val !== '3+'
                        ? (setOpenParkingMenuActive(val), setOpenParkingError(''))
                        : handleInsertOpenParkingMenuItems();
                    }}
                  />
                );
              })}
            </div>
            {openParkingError && (
              <div style={{ color: '#e02727', padding: '10px 0px' }}>{openParkingError}</div>
            )}
          </div>
          <div className='add_property-group' style={{ marginTop: '30px' }}>
            <div className='label_for_label'>
              Preferred Tenant Type<span className='mandatoryMarker'>*</span>
            </div>
            <div className='d-flex flex-wrap' style={{ gap: '16px' }}>
              {tenantTypeMenuItems.map((val, index) => {
                return (
                  <RadioButtonBox
                    key={index}
                    label={val}
                    active={val === tenantTypeActive}
                    handleClick={() => {
                      settenantTypeActive(val);
                      setTenantTypeError('');
                    }}
                  />
                );
              })}
            </div>
            {tenantTypeError && (
              <div style={{ color: '#e02727', padding: '10px 0px' }}>{tenantTypeError}</div>
            )}
          </div>
          <div className='add_property-group' style={{ marginTop: '30px' }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker
                  label='Available From'
                  className='data_container-component'
                  value={availableFrom}
                  onChange={() => {
                    (newValue: any) => setAvailableFrom(newValue);
                    // setAvailableFromDateError('');
                  }}
                />
              </DemoContainer>
            </LocalizationProvider>
            {availableFromDateError && (
              <div style={{ color: '#e02727', padding: '10px 0px' }}>{availableFromDateError}</div>
            )}
          </div>
          {lookingIntoActive === 'Rent' && (
            <div className='add_property-group' style={{ marginTop: '30px' }}>
              <TextField
                required
                id='standard-basic'
                label='Monthly Rent'
                variant='standard'
                className='age_property'
                inputProps={{ maxLength: 6 }}
                InputLabelProps={{
                  style: {
                    width: '100%',
                    fontWeight: 400,
                    fontSize: '18px',
                    lineHeight: '20px',
                    color: 'rgb(191, 192, 198)',
                  },
                }}
              />
            </div>
          )}
          <div className='add_property-group' style={{ marginTop: '30px' }}>
            <div className='label_for_label'>
              Maintenance Charges<span className='mandatoryMarker'>*</span>
            </div>
            <div className='d-flex flex-wrap' style={{ gap: '16px' }}>
              {mainTenance.map((val, index) => {
                return (
                  <RadioButtonBox
                    key={index}
                    label={val}
                    active={val === mainTenanceActive}
                    handleClick={() => {
                      setMainTenanceActive(val);
                      setMainTenanceError('');
                    }}
                  />
                );
              })}
            </div>
=======
    const handleInserBathroomBalconyMenuItems = () => {
        let bathrooms: any = [];
        let balconys: any = [];
        switch (bhkActive) {
            case '1RK':
                bathrooms = ['1'];
                balconys = ['0', '1'];
                break;
            case '1 BHK':
                bathrooms = ['1', '2'];
                balconys = ['0', '1', '2'];
                break;
            case '2 BHK':
                bathrooms = ['1', '2', '3'];
                balconys = ['0', '1', '2', '3'];
                break;
            case '3 BHK':
                bathrooms = ['1', '2', '3', '4'];
                balconys = ['0', '1', '2', '3', '4'];
                break;
            case '4 BHK':
                bathrooms = ['1', '2', '3', '4', '5'];
                balconys = ['0', '1', '2', '3', '4', '5'];
                break;
            case '5 BHK':
                bathrooms = ['1', '2', '3', '4', '5', '6'];
                balconys = ['0', '1', '2', '3', '4', '5', '6'];
                break;
            case '6 BHK':
                bathrooms = ['1', '2', '3', '4', '5', '6', '7'];
                balconys = ['0', '1', '2', '3', '4', '5', '6', '7'];
                break;
            case '7 BHK':
                bathrooms = ['1', '2', '3', '4', '5', '6', '7', '8'];
                balconys = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
                break;
            case '8 BHK':
                bathrooms = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
                balconys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
                break;
            case '9 BHK':
                bathrooms = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
                balconys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
                break;
            case '10 BHK':
                bathrooms = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
                balconys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
                break;
            default:
                bathrooms = ['1', '2', '3', '4'];
                balconys = ['0', '1', '2', '3', '4'];
                break;
        }
        setBathRoomMenu(bathrooms);
        setBalconyMenu(balconys);
    };

    // const handleSubmitFirstStep = () => {
    //   if (!propertyTypeActive) {
    //     setPropertyTypeError('Please select the category');
    //   }
    //   if (!lookingIntoActive) {
    //     setLookingIntoError('Please select the purpose');
    //   }
    //   if (!propertyTypeGroupActive) {
    //     setPropertyTypeGroupError('Please select the property type');
    //   }
    //   if (!bhkActive) {
    //     setBhkError('Please select the BHK');
    //   }
    //   if (!bathRoomActive) {
    //     setBathRoomError('Please select the bathroom count');
    //   }
    //   if (!balconyActive) {
    //     setBalconyError('Please select the balcony count');
    //   }
    //   if (!furnishTypeActive) {
    //     setFurnishTypeError('Please select the furnish type');
    //   }
    //   if (!coveredParkingActive) {
    //     setCoveredParkingeError('Please select the covered parking');
    //   }
    //   if (!openParkingMenuActive) {
    //     setOpenParkingError('Please select the open  parking');
    //   }
    //   if (!tenantTypeActive) {
    //     setTenantTypeError('Please select the select tenant type');
    //   }

    //   return;
    // };
    const handleNavigationMenu = (val: string) => {
        props.handleCommSubmitStep1(val);
    };

    const handleSubmitFirstStep = () => {
        const errors = {
            propertyTypeActive: !propertyTypeActive ? 'Please select the category' : '',
            lookingIntoActive: !lookingIntoActive ? 'Please select the purpose' : '',
            propertyTypeGroupActive: !propertyTypeGroupActive ? 'Please select the property type' : '',
            bhkActive: !bhkActive ? 'Please select the BHK' : '',
            bathRoomActive: !bathRoomActive ? 'Please select the bathroom count' : '',
            balconyActive: !balconyActive ? 'Please select the balcony count' : '',
            furnishTypeActive: !furnishTypeActive ? 'Please select the furnish type' : '',
            coveredParkingActive: !coveredParkingActive ? 'Please select the covered parking' : '',
            openParkingMenuActive: !openParkingMenuActive ? 'Please select the open parking' : '',
            tenantTypeActive: !tenantTypeActive ? 'Please select the select tenant type' : '',
            mainTenanceActive: !mainTenanceActive ? 'Please select the maintenance' : '',
            securityDepositActive: !securityDepositActive ? 'Please select the security deposit' : '',
            lockInPeriodActive: !lockInPeriodActive ? 'Please select the lock-in period' : '',
            broKerageActive: !broKerageActive ? 'Please select the brokerage' : '',
            builtUpArea: !builtUpArea ? 'Saleable area should be between 150 and 1500' : '',
        };
>>>>>>> edb648a3f2cb701cf50690396aab14aab8d7283a

        // Update state with errors
        setPropertyTypeError(errors.propertyTypeActive);
        setLookingIntoError(errors.lookingIntoActive);
        setPropertyTypeGroupError(errors.propertyTypeGroupActive);
        setBhkError(errors.bhkActive);
        setBathRoomError(errors.bathRoomActive);
        setBalconyError(errors.balconyActive);
        setFurnishTypeError(errors.furnishTypeActive);
        setCoveredParkingeError(errors.coveredParkingActive);
        setOpenParkingError(errors.openParkingMenuActive);
        setTenantTypeError(errors.tenantTypeActive);
        setMainTenanceError(errors.mainTenanceActive);
        setSecurityDepositError(errors.securityDepositActive);
        setLockInPeriodError(errors.lockInPeriodActive);
        setBroKerageError(errors.broKerageActive);
        setBuiltUpError(errors.builtUpArea);
        // Check if any error exists
        // for (const error in errors) {
        //     if (errors[error]) {
        //         return;
        //     }
        // }

        props.handleSubmitStep1();
        // Proceed with form submission or other actions
    };

    return (
        <div style={{ padding: '0px 50px' }}>
            <h2 className="fw-bolder d-flex align-items-center text-gray-900">Add Property Details</h2>
            <div className="row">
                <div className="col">
                    <div className="add_property-group" style={{ marginTop: '30px' }}>
                        <div className="label_for_label">
                            PropertyType <span className="mandatoryMarker">*</span>
                        </div>
                        <div className="d-flex" style={{ gap: '16px' }}>
                            {propertyTypeMenu.map((val) => {
                                return (
                                    <RadioButtonBox
                                        label={val}
                                        handleClick={() => {
                                            handleNavigationMenu(val);
                                            setPropertyTypeActive(val);
                                            setPropertyTypeError('');
                                        }}
                                        active={val === propertyTypeActive}
                                    />
                                );
                            })}
                        </div>
                        {propertyTypeError && <div style={{ color: '#e02727', padding: '10px 0px' }}>{propertyTypeError}</div>}
                    </div>

                    <div className="add_property-group" style={{ marginTop: '30px' }}>
                        <div className="label_for_label">
                            lookingIntoMenu <span className="mandatoryMarker">*</span>
                        </div>
                        <div className="d-flex" style={{ gap: '16px' }}>
                            {lookingIntoMenu.map((val, index) => {
                                return (
                                    <RadioButtonBox
                                        key={index}
                                        label={val}
                                        active={val === lookingIntoActive}
                                        handleClick={() => {
                                            setLookingIntoActive(val);
                                        }}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <div className="add_property-group" style={{ marginTop: '30px' }}>
                        <div className="label_for_label">
                            Property Category <span className="mandatoryMarker">*</span>
                        </div>
                        <div className="d-flex flex-wrap" style={{ gap: '16px' }}>
                            {propertyTypeActive === 'Residential' || propertyTypeActive === null || propertyTypeActive === ''
                                ? propertyTypeGroupMenu.map((val, index) => {
                                      return (
                                          <RadioButtonBox
                                              key={index}
                                              label={val}
                                              active={val === propertyTypeGroupActive}
                                              handleClick={() => {
                                                  setPropertyTypeGroupActive(val);
                                                  setPropertyTypeGroupError('');
                                              }}
                                          />
                                      );
                                  })
                                : commPropertyTypeGroupMenu.map((val, index) => {
                                      console.log(propertyTypeActive, 'propertyTypeActive--');
                                      return (
                                          <>
                                              <RadioButtonBox
                                                  key={index}
                                                  label={val}
                                                  active={val === commPropertyTypeGroupActive}
                                                  handleClick={() => {
                                                      setCommPropertyTypeGroupActive(val);
                                                  }}
                                              />
                                          </>
                                      );
                                  })}
                        </div>
                        {propertyTypeGroupError && <div style={{ color: '#e02727', padding: '10px 0px' }}>{propertyTypeGroupError}</div>}
                    </div>

                    {lookingIntoActive === 'Rent' && propertyTypeActive === 'Residential' && (
                        <div className="add_property-group" style={{ marginTop: '30px' }}>
                            <TextField
                                label="Age of Property (in years)"
                                variant="standard"
                                fullWidth
                                required
                                className="age_property"
                                inputProps={{ maxLength: 2 }}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton aria-label="info" edge="end">
                                                <InfoOutlinedIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                                InputLabelProps={{
                                    style: {
                                        width: '100%',
                                        fontWeight: 400,
                                        fontSize: '18px',
                                        lineHeight: '20px',
                                        color: 'rgb(191, 192, 198)',
                                    },
                                }}
                            />
                        </div>
                    )}

                    {propertyTypeActive === 'Commercial' && (
                        <div className="add_property-group" style={{ marginTop: '30px' }}>
                            <TextField required id="standard-basic" label="Search City" variant="standard" className="age_property" />
                        </div>
                    )}
                    {propertyTypeActive === 'Residential' && (
                        <div>
                            <div className="add_property-group" style={{ marginTop: '30px' }}>
                                <div className="label_for_label">
                                    BHK <span className="mandatoryMarker">*</span>
                                </div>
                                <div className="d-flex flex-wrap" style={{ gap: '16px' }}>
                                    {bhkMenu.map((val, index) => {
                                        return (
                                            <RadioButtonBox
                                                key={index}
                                                label={val}
                                                active={val === bhkActive}
                                                handleClick={() => {
                                                    val !== '3+BHK' ? setBhkActive(val) : handleInsertBHKMenuItems();
                                                }}
                                            />
                                        );
                                    })}
                                </div>
                                {bhkError && <div style={{ color: '#e02727', padding: '10px 0px' }}>{bhkError}</div>}
                            </div>
                            <div className="add_property-group" style={{ marginTop: '30px' }}>
                                <div className="label_for_label">
                                    Bathroom <span className="mandatoryMarker">*</span>
                                </div>
                                <div className="d-flex flex-wrap" style={{ gap: '16px' }}>
                                    {bathRoomMenu.map((val, index) => {
                                        console.log(val, 'values');
                                        return (
                                            <RadioButtonBox
                                                key={index}
                                                label={val}
                                                active={val === bathRoomActive}
                                                handleClick={() => {
                                                    setBathRoomActive(val);
                                                }}
                                            />
                                        );
                                    })}
                                </div>
                                {bathRoomError && <div style={{ color: '#e02727', padding: '10px 0px' }}>{bathRoomError}</div>}
                            </div>
                            <div className="add_property-group" style={{ marginTop: '30px' }}>
                                <div className="label_for_label">
                                    Balcony <span className="mandatoryMarker">*</span>
                                </div>
                                <div className="d-flex flex-wrap" style={{ gap: '16px' }}>
                                    {balconyMenu.map((val, index) => {
                                        return (
                                            <RadioButtonBox
                                                key={index}
                                                label={val}
                                                active={val === balconyActive}
                                                handleClick={() => {
                                                    setBalconyActive(val);
                                                }}
                                            />
                                        );
                                    })}
                                </div>
                                {balconyError && <div style={{ color: '#e02727', padding: '10px 0px' }}>{balconyError}</div>}
                            </div>
                            <div className="add_property-group" style={{ marginTop: '30px' }}>
                                <div className="label_for_label">
                                    Furnish Type <span className="mandatoryMarker">*</span>
                                </div>
                                <div className="d-flex flex-wrap" style={{ gap: '16px' }}>
                                    {furnishTypeMenu.map((val, index) => {
                                        return (
                                            <RadioButtonBox
                                                key={index}
                                                label={val}
                                                active={val === furnishTypeActive}
                                                handleClick={() => {
                                                    setFurnishTypeActive(val);
                                                }}
                                            />
                                        );
                                    })}
                                </div>
                                {furnishTypeError && <div style={{ color: '#e02727', padding: '10px 0px' }}>{furnishTypeError}</div>}
                            </div>
                            <div className="add_property-group" style={{ marginTop: '30px' }}>
                                <div className="label_for_label">
                                    Covered Parking <span className="mandatoryMarker">*</span>
                                </div>
                                <div className="d-flex flex-wrap" style={{ gap: '16px' }}>
                                    {coveredParkingMenu.map((val, index) => {
                                        return (
                                            <RadioButtonBox
                                                key={index}
                                                label={val}
                                                active={val === coveredParkingActive}
                                                handleClick={() => {
                                                    val !== '3+' ? setCoveredParkingActive(val) : handleInsertCoveredParkingMenuItems();
                                                }}
                                            />
                                        );
                                    })}
                                </div>
                                {coveredParkingError && <div style={{ color: '#e02727', padding: '10px 0px' }}>{coveredParkingError}</div>}
                            </div>
                            <div className="add_property-group" style={{ marginTop: '30px' }}>
                                <div className="label_for_label">
                                    Open Parking<span className="mandatoryMarker">*</span>
                                </div>
                                <div className="d-flex flex-wrap" style={{ gap: '16px' }}>
                                    {openParkingMenu.map((val, index) => {
                                        return (
                                            <RadioButtonBox
                                                key={index}
                                                label={val}
                                                active={val === openParkingMenuActive}
                                                handleClick={() => {
                                                    val !== '3+' ? setOpenParkingMenuActive(val) : handleInsertOpenParkingMenuItems();
                                                }}
                                            />
                                        );
                                    })}
                                </div>
                                {openParkingError && <div style={{ color: '#e02727', padding: '10px 0px' }}>{openParkingError}</div>}
                            </div>
                            <div className="add_property-group" style={{ marginTop: '30px' }}>
                                <div className="label_for_label">
                                    Preferred Tenant Type<span className="mandatoryMarker">*</span>
                                </div>
                                <div className="d-flex flex-wrap" style={{ gap: '16px' }}>
                                    {tenantTypeMenuItems.map((val, index) => {
                                        return (
                                            <RadioButtonBox
                                                key={index}
                                                label={val}
                                                active={val === tenantTypeActive}
                                                handleClick={() => {
                                                    settenantTypeActive(val);
                                                }}
                                            />
                                        );
                                    })}
                                </div>
                                {tenantTypeError && <div style={{ color: '#e02727', padding: '10px 0px' }}>{tenantTypeError}</div>}
                            </div>
                            <div className="add_property-group" style={{ marginTop: '30px' }}>
                                <DatePickerInput />
                            </div>

                            {lookingIntoActive === 'Rent' && (
                                <div className="add_property-group" style={{ marginTop: '30px' }}>
                                    <TextField
                                        required
                                        id="standard-basic"
                                        label="Monthly Rent"
                                        variant="standard"
                                        className="age_property"
                                        inputProps={{ maxLength: 2 }}
                                        InputLabelProps={{
                                            style: {
                                                width: '100%',
                                                fontWeight: 400,
                                                fontSize: '18px',
                                                lineHeight: '20px',
                                                color: 'rgb(191, 192, 198)',
                                            },
                                        }}
                                    />
                                </div>
                            )}
                            <div className="add_property-group" style={{ marginTop: '30px' }}>
                                <div className="label_for_label">
                                    Maintenance Charges<span className="mandatoryMarker">*</span>
                                </div>
                                <div className="d-flex flex-wrap" style={{ gap: '16px' }}>
                                    {mainTenance.map((val, index) => {
                                        return (
                                            <RadioButtonBox
                                                key={index}
                                                label={val}
                                                active={val === mainTenanceActive}
                                                handleClick={() => {
                                                    setMainTenanceActive(val);
                                                }}
                                            />
                                        );
                                    })}
                                </div>

                                {mainTenanceError && <div style={{ color: '#e02727', padding: '10px 0px' }}>{mainTenanceError}</div>}
                            </div>
                            {mainTenanceActive === 'Separate' && (
                                <div className="add_property-group" style={{ marginTop: '30px' }}>
                                    <TextField
                                        required
                                        id="standard-basic"
                                        label="Maintenance Charges (per month)"
                                        variant="standard"
                                        className="age_property"
                                    />
                                </div>
                            )}
                            <div className="add_property-group" style={{ marginTop: '30px' }}>
                                <div className="label_for_label">
                                    Security Deposit<span className="mandatoryMarker">*</span>
                                </div>
                                <div className="d-flex flex-wrap" style={{ gap: '16px' }}>
                                    {securityDeposit.map((val, index) => {
                                        return (
                                            <RadioButtonBox
                                                key={index}
                                                label={val}
                                                active={val === securityDepositActive}
                                                handleClick={() => {
                                                    setSecurityDepositActive(val);
                                                }}
                                            />
                                        );
                                    })}
                                </div>
                                {securityDepositError && <div style={{ color: '#e02727', padding: '10px 0px' }}>{securityDepositError}</div>}
                            </div>
                            <div className="add_property-group" style={{ marginTop: '30px' }}>
                                <div className="label_for_label">
                                    Lock-in Period<span className="mandatoryMarker">*</span>
                                </div>
                                <div className="d-flex flex-wrap" style={{ gap: '16px' }}>
                                    {lockInPeriod.map((val, index) => {
                                        return (
                                            <RadioButtonBox
                                                key={index}
                                                label={val}
                                                active={val === lockInPeriodActive}
                                                handleClick={() => {
                                                    setLockInPeriodActive(val);
                                                }}
                                            />
                                        );
                                    })}
                                </div>
                                {lockInPeriodError && <div style={{ color: '#e02727', padding: '10px 0px' }}>{lockInPeriodError}</div>}
                            </div>
                            <div className="add_property-group" style={{ marginTop: '30px' }}>
                                <div className="label_for_label">
                                    Do you charge brokerage?<span className="mandatoryMarker">*</span>
                                </div>
                                <div className="d-flex flex-wrap" style={{ gap: '16px' }}>
                                    {broKerage.map((val, index) => {
                                        return (
                                            <RadioButtonBox
                                                key={index}
                                                label={val}
                                                active={val === broKerageActive}
                                                handleClick={() => {
                                                    setBroKerageActive(val);
                                                }}
                                            />
                                        );
                                    })}
                                </div>
                                {broKerageError && <div style={{ color: '#e02727', padding: '10px 0px' }}>{broKerageError}</div>}
                            </div>
                            <div className="add_property-group" style={{ marginTop: '30px' }}>
                                <TextField
                                    required
                                    id="standard-basic"
                                    label="Built Up Area"
                                    variant="standard"
                                    className="age_property"
                                    value={builtUpArea}
                                    onChange={(e) => {
                                        setBuiltUpArea(e.target.value);
                                        setBuiltUpError('');
                                    }}
                                    error={builtUpError ? true : false}
                                    helperText={builtUpError}
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end">Sq. ft.</InputAdornment>,
                                    }}
                                    InputLabelProps={{
                                        style: {
                                            width: '100%',
                                            fontWeight: 400,
                                            fontSize: '16px',
                                            lineHeight: '20px',
                                            color: 'rgb(191, 192, 198)',
                                        }, // Add your styles here
                                    }}
                                />
                            </div>
                            <div className="add_property-group" style={{ marginTop: '30px' }}>
                                <TextField
                                    required
                                    id="standard-basic"
                                    label="Carpet Area"
                                    variant="standard"
                                    className="age_property"
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end">Sq. ft.</InputAdornment>,
                                    }}
                                    InputLabelProps={{
                                        style: {
                                            width: '100%',
                                            fontWeight: 400,
                                            fontSize: '16px',
                                            lineHeight: '20px',
                                            color: 'rgb(191, 192, 198)',
                                        }, // Add your styles here
                                    }}
                                />
                            </div>
                        </div>
                    )}
                    <div
                        style={{
                            display: 'block',
                            width: '100%',
                            margin: '25px 0px',
                            position: 'relative',
                            bottom: '0px',
                            padding: '0px',
                        }}
                    >
                        <button
                            onClick={handleSubmitFirstStep}
                            style={{
                                background: '#1B84FF',
                                borderRadius: '8px',
                                fontWeight: 500,
                                fontSize: '14px',
                                width: '100%',
                                padding: '17px 0px',
                                textAlign: 'center',
                                color: 'rgb(255, 255, 255)',
                                border: 'none',
                                // boxShadow: 'rgb(76, 189, 148) 0px -2px inset',
                            }}
                        >
                            {propertyTypeActive === 'Residential' ? 'Next, add address' : 'Next add property details'}
                        </button>
                    </div>
                </div>
            </div>
<<<<<<< HEAD
          )}
          <div className='add_property-group' style={{ marginTop: '30px' }}>
            <div className='label_for_label'>
              Security Deposit<span className='mandatoryMarker'>*</span>
            </div>
            <div className='d-flex flex-wrap' style={{ gap: '16px' }}>
              {securityDeposit.map((val, index) => {
                return (
                  <RadioButtonBox
                    key={index}
                    label={val}
                    active={val === securityDepositActive}
                    handleClick={() => {
                      setSecurityDepositActive(val);
                      setSecurityDepositError('');
                    }}
                  />
                );
              })}
            </div>
            {securityDepositError && (
              <div style={{ color: '#e02727', padding: '10px 0px' }}>{securityDepositError}</div>
            )}
          </div>
          {securityDepositActive === 'Custom' && (
            <div className='add_property-group' style={{ marginTop: '30px' }}>
              <TextField
                required
                id='standard-basic'
                label='Security Deposit'
                variant='standard'
                className='age_property'
              />
            </div>
          )}
          <div className='add_property-group' style={{ marginTop: '30px' }}>
            <div className='label_for_label'>
              Lock-in Period<span className='mandatoryMarker'>*</span>
            </div>
            <div className='d-flex flex-wrap' style={{ gap: '16px' }}>
              {lockInPeriod.map((val, index) => {
                return (
                  <RadioButtonBox
                    key={index}
                    label={val}
                    active={val === lockInPeriodActive}
                    handleClick={() => {
                      setLockInPeriodActive(val);
                      setLockInPeriodError('');
                    }}
                  />
                );
              })}
            </div>
            {lockInPeriodError && (
              <div style={{ color: '#e02727', padding: '10px 0px' }}>{lockInPeriodError}</div>
            )}
          </div>

          {lockInPeriodActive === 'Custom' && (
            <div className='add_property-group' style={{ marginTop: '30px' }}>
              <TextField
                required
                id='standard-basic'
                label='Lock in Period'
                variant='standard'
                className='age_property'
              />
            </div>
          )}
          <div className='add_property-group' style={{ marginTop: '30px' }}>
            <div className='label_for_label'>
              Do you charge brokerage?<span className='mandatoryMarker'>*</span>
            </div>
            <div className='d-flex flex-wrap' style={{ gap: '16px' }}>
              {broKerage.map((val, index) => {
                return (
                  <RadioButtonBox
                    key={index}
                    label={val}
                    active={val === broKerageActive}
                    handleClick={() => {
                      setBroKerageActive(val);
                      setBroKerageError('');
                    }}
                  />
                );
              })}
            </div>
            {broKerageError && (
              <div style={{ color: '#e02727', padding: '10px 0px' }}>{broKerageError}</div>
            )}
          </div>
          {broKerageActive === 'Custom' && (
            <div className='add_property-group' style={{ marginTop: '30px' }}>
              <TextField
                required
                id='standard-basic'
                label='Brokerage (in Rupees)'
                variant='standard'
                className='age_property'
              />
            </div>
          )}
          <div className='add_property-group' style={{ marginTop: '30px' }}>
            <TextField
              required
              id='standard-basic'
              label='Built Up Area'
              variant='standard'
              className='age_property'
              value={builtUpArea}
              onChange={(e) => {
                setBuiltUpArea(e.target.value);
                setBuiltUpError('');
              }}
              error={builtUpError ? true : false}
              helperText={builtUpError}
              InputProps={{
                endAdornment: <InputAdornment position='end'>Sq. ft.</InputAdornment>,
              }}
              InputLabelProps={{
                style: {
                  width: '100%',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '20px',
                  color: 'rgb(191, 192, 198)',
                }, // Add your styles here
              }}
            />
          </div>
          <div className='add_property-group' style={{ marginTop: '30px' }}>
            <TextField
              required
              id='standard-basic'
              label='Carpet Area'
              variant='standard'
              className='age_property'
              InputProps={{
                endAdornment: <InputAdornment position='end'>Sq. ft.</InputAdornment>,
              }}
              InputLabelProps={{
                style: {
                  width: '100%',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '20px',
                  color: 'rgb(191, 192, 198)',
                }, // Add your styles here
              }}
            />
          </div>
          <div
            style={{
              display: 'block',
              width: '100%',
              margin: '25px 0px',
              position: 'relative',
              bottom: '0px',
              padding: '0px',
            }}>
            <button
              onClick={handleSubmitFirstStep}
              style={{
                background: '#1B84FF',
                borderRadius: '8px',
                fontWeight: 500,
                fontSize: '14px',
                width: '100%',
                padding: '17px 0px',
                textAlign: 'center',
                color: 'rgb(255, 255, 255)',
                border: 'none',
                // boxShadow: 'rgb(76, 189, 148) 0px -2px inset',
              }}>
              Next, add address
            </button>
          </div>
=======
>>>>>>> edb648a3f2cb701cf50690396aab14aab8d7283a
        </div>
    );
};

export { Step1 };
