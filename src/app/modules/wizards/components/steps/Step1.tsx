import { FC, useState } from 'react';
import { KTIcon } from '../../../../../_metronic/helpers';
import { Formik, Form, ErrorMessage } from 'formik';
// import FormControl from "@mui/material/FormControl";
import { FormControl, FormLabel, RadioGroup, Radio, FormControlLabel, Box } from '@mui/material';
import RadioButtonBox from '../RadioBox/RadioBox';
import TextField from '@mui/material/TextField';
const Step1: FC = () => {
  const [addProperty, setAddProperty] = useState([
    {
      propertyType: 'Residential',
      lookingInto: ['Rent', 'Sell', 'PG/Co-living'],
      active: true,
    },
    {
      propertyType: 'Commercial',
      lookingInto: ['Rent', 'Sell'],
      active: false,
    },
  ]);
  const [propertyType, setPropertyType] = useState([
    { label: 'Residential', active: false },
    { label: 'Commercial', active: false },
  ]);
  const [lookingInto, setLookingInto] = useState([
    { label: 'Rent', active: false, isShow: true },
    { label: 'Sell', active: false, isShow: true },
    { label: 'PG/Co-living', active: false, isShow: true },
  ]);

  const [propertyTypeGroup, setPropertyTypeGroup] = useState([
    { label: 'Apartment', active: false, isShow: true, tag: 'Rent' },
    { label: 'Independent Floor', active: false, isShow: true, tag: 'Rent' },
    { label: 'Independent House', active: false, isShow: true, tag: 'Rent' },
    { label: 'Villa', active: false, isShow: true, tag: 'Rent' },
    { label: 'Plot', active: false, isShow: true, tag: null },
    { label: 'Agricultural Land', active: false, isShow: true, tag: null },
  ]);
  const [bhk, setBhk] = useState([
    { label: '1RK', active: false, isShow: true, tag: 'Rent' },
    { label: '1 BHK', active: false, isShow: true, tag: 'Rent' },
    { label: '2 BHK', active: false, isShow: true, tag: 'Rent' },
    { label: '3 BHK', active: false, isShow: true, tag: 'Rent' },
    { label: '4 BHK', active: false, isShow: true, tag: null },
  ]);
  const [bathRoom, setBathRoom] = useState([
    { label: '1', active: false, isShow: true, tag: 'Rent' },
    { label: '2 ', active: false, isShow: true, tag: 'Rent' },
    { label: '3 ', active: false, isShow: true, tag: 'Rent' },
    { label: '4 ', active: false, isShow: true, tag: 'Rent' },
    { label: '5 ', active: false, isShow: true, tag: null },
  ]);
  const [balcony, setBalcony] = useState([
    { label: '1', active: false, isShow: true, tag: 'Rent' },
    { label: '2 ', active: false, isShow: true, tag: 'Rent' },
    { label: '3 ', active: false, isShow: true, tag: 'Rent' },
    { label: '4 ', active: false, isShow: true, tag: 'Rent' },
    { label: '5 ', active: false, isShow: true, tag: null },
  ]);
  const [furnishType, setfurnishType] = useState([
    { label: 'Fully Furnished', active: false, isShow: true, tag: 'Rent' },
    { label: 'Semi Furnished ', active: false, isShow: true, tag: 'Rent' },
    { label: 'Unfurnished ', active: false, isShow: true, tag: 'Rent' },
  ]);
  const [coveredParking, setCoveredParking] = useState([
    { label: '1', active: false, isShow: true, tag: 'Rent' },
    { label: '2 ', active: false, isShow: true, tag: 'Rent' },
    { label: '3 ', active: false, isShow: true, tag: 'Rent' },
    { label: '4 ', active: false, isShow: true, tag: 'Rent' },
    { label: '5 ', active: false, isShow: true, tag: null },
  ]);
  const [openParking, setopenParking] = useState([
    { label: '1', active: false, isShow: true, tag: 'Rent' },
    { label: '2 ', active: false, isShow: true, tag: 'Rent' },
    { label: '3 ', active: false, isShow: true, tag: 'Rent' },
    { label: '4 ', active: false, isShow: true, tag: 'Rent' },
    { label: '5 ', active: false, isShow: true, tag: null },
  ]);
  const [tenantType, setTenantType] = useState([
    { label: 'Family', active: false, isShow: true, tag: 'Rent' },
    { label: 'Bachelors', active: false, isShow: true, tag: 'Rent' },
    { label: 'Company ', active: false, isShow: true, tag: 'Rent' },
  ]);
  const handleClickChange = (index: number) => {
    setPropertyType((prevState) =>
      prevState.map((item, i) => ({
        ...item,
        active: i === index ? true : false,
      }))
    );
    setLookingInto((prevState) =>
      prevState.map((item) => ({
        ...item,
        isShow: propertyType[index].label === 'Residential' || item.label !== 'PG/Co-living',
      }))
    );
  };

  const handleLookingInto = (index: number) => {
    // Get the active lookingInto label
    const activeLookingInto = lookingInto[index].label;

    // Determine the labels to show based on the active lookingInto
    let labelsToShow: string[] = [];
    if (activeLookingInto === 'Rent') {
      labelsToShow = ['Apartment', 'Independent Floor', 'Independent House', 'Villa'];
    } else if (activeLookingInto === 'Sell') {
      labelsToShow = [
        'Apartment',
        'Independent Floor',
        'Independent House',
        'Villa',
        'Plot',
        'Agricultural Land',
      ];
    }

    // Update the propertyTypeGroup state
    setPropertyTypeGroup((prevState) =>
      prevState.map((item) => ({
        ...item,
        isShow: labelsToShow.includes(item.label),
      }))
    );

    setLookingInto((prevState) =>
      prevState.map((item, i) => ({
        ...item,
        active: i === index ? true : false,
      }))
    );
  };

  const handlepropertyTypeGroup = (index: number) => {
    setPropertyTypeGroup((prevState) =>
      prevState.map((item, i) => ({
        ...item,
        active: i === index ? true : false,
      }))
    );
  };

  return (
    <div className='w-100' style={{ padding: '0px 50px' }}>
      <h2 className='fw-bolder d-flex align-items-center text-gray-900'>Add Property Details</h2>
      <div className='row'>
        <div className='col'>
          <div className='add_property-group' style={{ marginTop: '30px' }}>
            <div className='label_for_label'>
              PropertyType <span className='mandatoryMarker'>*</span>
            </div>
            <div className='d-flex' style={{ gap: '16px' }}>
              {propertyType.map((val, index) => {
                return (
                  <RadioButtonBox
                    label={val.label}
                    active={val.active}
                    handleClick={() => {
                      handleClickChange(index);
                    }}
                  />
                );
              })}
            </div>
          </div>
          <div className='add_property-group' style={{ marginTop: '30px' }}>
            <div className='label_for_label'>
              LookingInto <span className='mandatoryMarker'>*</span>
            </div>
            <div className='d-flex' style={{ gap: '16px' }}>
              {lookingInto.map((val, index) => {
                if (val.isShow) {
                  return (
                    <RadioButtonBox
                      key={index}
                      label={val.label}
                      active={val.active}
                      handleClick={() => {
                        handleLookingInto(index);
                      }}
                    />
                  );
                }
                return null;
              })}
            </div>
          </div>
          <div className='add_property-group' style={{ marginTop: '30px' }}>
            <div className='label_for_label'>
              PropertyType <span className='mandatoryMarker'>*</span>
            </div>
            <div className='d-flex flex-wrap' style={{ gap: '16px' }}>
              {propertyTypeGroup.map((val, index) => {
                if (val.isShow) {
                  return (
                    <RadioButtonBox
                      key={index}
                      label={val.label}
                      active={val.active}
                      handleClick={() => {
                        handlepropertyTypeGroup(index);
                      }}
                    />
                  );
                }
                return null;
              })}
            </div>
          </div>
          <div className='add_property-group' style={{ marginTop: '30px' }}>
            <TextField
              required
              id='standard-basic'
              label='Age of Property (in years)'
              variant='standard'
              className='age_property'
            />
          </div>
          <div className='add_property-group' style={{ marginTop: '30px' }}>
            <div className='label_for_label'>
              BHK <span className='mandatoryMarker'>*</span>
            </div>
            <div className='d-flex flex-wrap' style={{ gap: '16px' }}>
              {bhk.map((val, index) => {
                if (val.isShow) {
                  return (
                    <RadioButtonBox
                      key={index}
                      label={val.label}
                      active={val.active}
                      handleClick={() => {
                        handlepropertyTypeGroup(index);
                      }}
                    />
                  );
                }
                return null;
              })}
            </div>
          </div>
          <div className='add_property-group' style={{ marginTop: '30px' }}>
            <div className='label_for_label'>
              Bathroom <span className='mandatoryMarker'>*</span>
            </div>
            <div className='d-flex flex-wrap' style={{ gap: '16px' }}>
              {bathRoom.map((val, index) => {
                if (val.isShow) {
                  return (
                    <RadioButtonBox
                      key={index}
                      label={val.label}
                      active={val.active}
                      handleClick={() => {
                        handlepropertyTypeGroup(index);
                      }}
                    />
                  );
                }
                return null;
              })}
            </div>
          </div>
          <div className='add_property-group' style={{ marginTop: '30px' }}>
            <div className='label_for_label'>
              Balcony <span className='mandatoryMarker'>*</span>
            </div>
            <div className='d-flex flex-wrap' style={{ gap: '16px' }}>
              {balcony.map((val, index) => {
                if (val.isShow) {
                  return (
                    <RadioButtonBox
                      key={index}
                      label={val.label}
                      active={val.active}
                      handleClick={() => {
                        handlepropertyTypeGroup(index);
                      }}
                    />
                  );
                }
                return null;
              })}
            </div>
          </div>
          <div className='add_property-group' style={{ marginTop: '30px' }}>
            <div className='label_for_label'>
              Balcony <span className='mandatoryMarker'>*</span>
            </div>
            <div className='d-flex flex-wrap' style={{ gap: '16px' }}>
              {balcony.map((val, index) => {
                if (val.isShow) {
                  return (
                    <RadioButtonBox
                      key={index}
                      label={val.label}
                      active={val.active}
                      handleClick={() => {
                        handlepropertyTypeGroup(index);
                      }}
                    />
                  );
                }
                return null;
              })}
            </div>
          </div>
          <div className='add_property-group' style={{ marginTop: '30px' }}>
            <div className='label_for_label'>
              Furnish Type <span className='mandatoryMarker'>*</span>
            </div>
            <div className='d-flex flex-wrap' style={{ gap: '16px' }}>
              {furnishType.map((val, index) => {
                if (val.isShow) {
                  return (
                    <RadioButtonBox
                      key={index}
                      label={val.label}
                      active={val.active}
                      handleClick={() => {
                        handlepropertyTypeGroup(index);
                      }}
                    />
                  );
                }
                return null;
              })}
            </div>
          </div>
          <div className='add_property-group' style={{ marginTop: '30px' }}>
            <div className='label_for_label'>
              Covered Parking <span className='mandatoryMarker'>*</span>
            </div>
            <div className='d-flex flex-wrap' style={{ gap: '16px' }}>
              {coveredParking.map((val, index) => {
                if (val.isShow) {
                  return (
                    <RadioButtonBox
                      key={index}
                      label={val.label}
                      active={val.active}
                      handleClick={() => {
                        handlepropertyTypeGroup(index);
                      }}
                    />
                  );
                }
                return null;
              })}
            </div>
          </div>
          <div className='add_property-group' style={{ marginTop: '30px' }}>
            <div className='label_for_label'>
              Open Parking<span className='mandatoryMarker'>*</span>
            </div>
            <div className='d-flex flex-wrap' style={{ gap: '16px' }}>
              {openParking.map((val, index) => {
                if (val.isShow) {
                  return (
                    <RadioButtonBox
                      key={index}
                      label={val.label}
                      active={val.active}
                      handleClick={() => {
                        handlepropertyTypeGroup(index);
                      }}
                    />
                  );
                }
                return null;
              })}
            </div>
          </div>
          <div className='add_property-group' style={{ marginTop: '30px' }}>
            <div className='label_for_label'>
              Preferred Tenant Type<span className='mandatoryMarker'>*</span>
            </div>
            <div className='d-flex flex-wrap' style={{ gap: '16px' }}>
              {tenantType.map((val, index) => {
                if (val.isShow) {
                  return (
                    <RadioButtonBox
                      key={index}
                      label={val.label}
                      active={val.active}
                      handleClick={() => {
                        handlepropertyTypeGroup(index);
                      }}
                    />
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Step1 };
