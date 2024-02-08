import { FC, useState, useEffect } from 'react';
import { KTIcon } from '../../../../../_metronic/helpers';
import { Formik, Form, ErrorMessage } from 'formik';
// import FormControl from "@mui/material/FormControl";
import { FormControl, FormLabel, RadioGroup, Radio, FormControlLabel, Box } from '@mui/material';
import RadioButtonBox from '../RadioBox/RadioBox';
import TextField from '@mui/material/TextField';
import DatePicker from './DatePicker';
const Step1: FC = () => {
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
  const coveredParkingMenuItems = ['1', '2', '3', '3+'];
  const openParkingMenuItems = ['1', '2', '3', '3+'];
  const tenantTypeMenuItems = ['Family', 'Bachelors', 'Company'];
  const mainTenance = ['Include in rent', 'Separate'];
  const securityDeposit = ['None', '1 month', '2 month', 'Custom'];
  const lockInPeriod = ['None', '1 month', '2 month', 'Custom'];
  const broKerage = ['None', '1 month', '2 month', 'Custom'];
  const [propertyTypeMenu, setPropertyTypeMenu] = useState(propertyTypes);
  const [propertyTypeActive, setPropertyTypeActive] = useState('');
  const [lookingIntoMenu, setLookingInto] = useState(lookingIntoMenuItems);
  const [lookingIntoActive, setLookingIntoActive] = useState('');
  const [propertyTypeGroupMenu, setPropertyTypeGroupMenu] = useState(propertyTypeGroupMenuItems);
  const [propertyTypeGroupActive, setPropertyTypeGroupActive] = useState('');
  const [bhkMenu, setBhkMenu] = useState(bhkMenuItems);
  const [bhkActive, setBhkActive] = useState('');
  const [bathRoomMenu, setBathRoomMenu] = useState(bathRoomMenuItems);
  const [bathRoomActive, setBathRoomActive] = useState('');
  const [balconyMenu, setBalconyMenu] = useState(balconyMenuItems);
  const [balconyActive, setBalconyActive] = useState('');
  const [furnishTypeMenu, setFurnishTypeMenu] = useState(furnishTypeMenuItems);
  const [furnishTypeActive, setFurnishTypeActive] = useState('');
  const [coveredParkingMenu, setCoveredParkingMenu] = useState(coveredParkingMenuItems);
  const [coveredParkingActive, setCoveredParkingActive] = useState('');
  const [openParkingMenu, setOpenParkingMenuMenu] = useState(openParkingMenuItems);
  const [openParkingMenuActive, setOpenParkingMenuActive] = useState('');
  const [tenantTypeActive, settenantTypeActive] = useState('');
  const [mainTenanceActive, setMainTenanceActive] = useState('');
  const [securityDepositActive, setSecurityDepositActive] = useState('');
  const [lockInPeriodActive, setLockInPeriodActive] = useState('');
  const [broKerageActive, setBroKerageActive] = useState('');

  useEffect(() => {
    let look =
      propertyTypeActive === 'Commercial'
        ? lookingIntoMenuItems.filter((item) => item !== 'PG/Co-living')
        : lookingIntoMenuItems;
    setLookingInto(look);
  }, [propertyTypeActive]);
  useEffect(() => {
    const filteredPropertyTypeGroupMenuItems =
      lookingIntoActive === 'Rent'
        ? propertyTypeGroupMenuItems.filter(
            (item) => item !== 'Plot' && item !== 'Agricultural Land'
          )
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
                    }}
                    active={val === propertyTypeActive}
                  />
                );
              })}
            </div>
          </div>
          <div className='add_property-group' style={{ marginTop: '30px' }}>
            <div className='label_for_label'>
              lookingIntoMenu <span className='mandatoryMarker'>*</span>
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
                    }}
                  />
                );
              })}
            </div>
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
                    }}
                  />
                );
              })}
            </div>
          </div>
          {lookingIntoActive === 'Rent' && (
            <div className='add_property-group' style={{ marginTop: '30px' }}>
              <TextField
                required
                id='standard-basic'
                label='Age of Property (in years)'
                variant='standard'
                className='age_property'
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
                      val !== '3+BHK' ? setBhkActive(val) : handleInsertBHKMenuItems();
                    }}
                  />
                );
              })}
            </div>
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
                    }}
                  />
                );
              })}
            </div>
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
                    }}
                  />
                );
              })}
            </div>
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
                    }}
                  />
                );
              })}
            </div>
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
                        ? setCoveredParkingActive(val)
                        : handleInsertCoveredParkingMenuItems();
                    }}
                  />
                );
              })}
            </div>
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
                        ? setOpenParkingMenuActive(val)
                        : handleInsertOpenParkingMenuItems();
                    }}
                  />
                );
              })}
            </div>
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
                    active={val === openParkingMenuActive}
                    handleClick={() => {
                      setOpenParkingMenuActive(val);
                    }}
                  />
                );
              })}
            </div>
          </div>
          {/* <DatePicker /> */}
          {lookingIntoActive === 'Rent' && (
            <div className='add_property-group' style={{ marginTop: '30px' }}>
              <TextField
                required
                id='standard-basic'
                label='Monthly Rent'
                variant='standard'
                className='age_property'
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
                    }}
                  />
                );
              })}
            </div>
          </div>
          {mainTenanceActive === 'Separate' && (
            <div className='add_property-group' style={{ marginTop: '30px' }}>
              <TextField
                required
                id='standard-basic'
                label='Maintenance Charges (per month)'
                variant='standard'
                className='age_property'
              />
            </div>
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
                    }}
                  />
                );
              })}
            </div>
          </div>
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
                    }}
                  />
                );
              })}
            </div>
          </div>
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
                    }}
                  />
                );
              })}
            </div>
          </div>
          <div className='add_property-group' style={{ marginTop: '30px' }}>
            <TextField
              required
              id='standard-basic'
              label='Built Up Area'
              variant='standard'
              className='age_property'
            />
          </div>
          <div className='add_property-group' style={{ marginTop: '30px' }}>
            <TextField
              required
              id='standard-basic'
              label='Carpet Area'
              variant='standard'
              className='age_property'
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
        </div>
      </div>
    </div>
  );
};

export { Step1 };
