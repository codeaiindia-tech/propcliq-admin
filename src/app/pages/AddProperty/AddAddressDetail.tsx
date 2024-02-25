import React, { FC, useState } from 'react';
import { KTIcon } from '../../../_metronic/helpers';
import { ErrorMessage, Field } from 'formik';
import { TextField, Button, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Step2: FC = () => {
    const [city, setCity] = useState<string>('');
    const [building, setBuilding] = useState<string>('');
    const [locality, setLocality] = useState<string>('');
    const [flatNo, setFlatNo] = useState<string>('');
    const [floorNo, setFloorNo] = useState<string>('');
    const [totalFloors, setTotalFloors] = useState<string>('');
    const [localityError, setLocalityError] = useState<string>('');
    const [floorNoError, setFloorNoError] = useState<string>('');
    const [totalFloorsError, setTotalFloorsError] = useState<string>('');

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

        if (totalFloors && isNaN(Number(totalFloors))) {
            setTotalFloorsError('Please enter valid total floors');
            isValid = false;
        } else {
            setTotalFloorsError('');
        }

        // Proceed with form submission if valid
        if (isValid) {
            // Perform form submission logic here
            console.log('Form submitted successfully');
        }
    };

    return (
        <div className="w-100">
            <TextField
                label="Search City"
                placeholder="Search City"
                variant="outlined"
                fullWidth
                value={city}
                onChange={(e) => setCity(e.target.value)}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />
            <TextField
                label="Building/Project/Society"
                placeholder="Building/Project/Society"
                variant="outlined"
                fullWidth
                value={building}
                onChange={(e) => setBuilding(e.target.value)}
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
            <Button variant="contained" color="primary" onClick={handleSubmit} style={{ marginTop: '20px' }}>
                Post Property
            </Button>
        </div>
    );
};

export { Step2 };
